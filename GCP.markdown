# Actualizar los repositorios y paquetes del sistema
sudo apt update && sudo apt upgrade -y

# Buscar y verificar versiones de Java disponibles
sudo apt update && apt search openjdk- | grep jre-headless

# Instalar Java 17 Runtime, JRE por defecto y la herramienta unzip
sudo apt install openjdk-17-jre-headless default-jre unzip -y

# Verificar que Java se instaló correctamente
java -version

# Crear el directorio para GeoServer y acceder a él
sudo mkdir /usr/share/geoserver
cd /usr/share/geoserver

# Descargar GeoServer 2.24.2
sudo wget https://sourceforge.net/projects/geoserver/files/GeoServer/2.24.2/geoserver-2.24.2-bin.zip

# Descomprimir el archivo descargado
sudo unzip geoserver-2.24.2-bin.zip

# Eliminar el archivo .zip para no ocupar espacio innecesario
sudo rm geoserver-2.24.2-bin.zip

# Configurar variables de entorno y permisos

echo "export GEOSERVER_HOME=/usr/share/geoserver" >> ~/.bashrc
source ~/.bashrc


# Otorgar permisos de ejecución
sudo chmod +x /usr/share/geoserver/bin/startup.sh
sudo chmod +x /usr/share/geoserver/bin/shutdown.sh

# Ir al directorio de binarios
cd /usr/share/geoserver/bin/

# Iniciar GeoServer en segundo plano
sudo nohup ./startup.sh &

# Esperar unos segundos a que cargue e inspeccionar la salida
sudo cat /usr/share/geoserver/bin/nohup.out

# Verificar que Java esté escuchando en el puerto 8080
ss -tulnp | grep java
ss -tulnp | grep 8080


sudo apt update
sudo apt install nginx -y

sudo systemctl enable nginx
sudo systemctl start nginx


sudo nano /etc/nginx/sites-available/coast-wind.org

server {
    listen 80;
    server_name geoserver.coast-wind.org coast-wind.org www.coast-wind.org;

    # Captura explícita de la ruta para GeoServer
    location /geoserver {
        proxy_pass http://127.0.0.1:8080/geoserver;
        
        # Cabeceras necesarias para SSL/Proxy (Cloudflare + GeoServer Wicket CSRF)
        proxy_set_header Host $http_host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto https;
        proxy_set_header X-Forwarded-Host $host;
        
        # Redirección interna adaptada al subdominio HTTPS
        proxy_redirect http://127.0.0.1:8080/geoserver https://geoserver.coast-wind.org/geoserver;

        # Optimización SIG
        proxy_buffer_size          128k;
        proxy_buffers              4 256k;
        proxy_busy_buffers_size    256k;
        proxy_connect_timeout      90s;
        proxy_send_timeout         90s;
        proxy_read_timeout         90s;
    }

    # Carpeta raíz para el frontend (geovisor)
    location / {
        root /var/www/html;
        index index.html index.htm;
        try_files $uri $uri/ =404;
    }
}

sudo nginx -t && sudo systemctl reload nginx


# Crear el enlace simbólico para activar el sitio
sudo ln -s /etc/nginx/sites-available/coast-wind.org /etc/nginx/sites-enabled/

# Eliminar la configuración por defecto
sudo rm -f /etc/nginx/sites-enabled/default

# Probar la sintaxis de Nginx
sudo nginx -t
sudo
# Reiniciar el servicio Nginx
sudo systemctl restart nginx

sudo nano /usr/share/geoserver/data_dir/global.xml

<proxyBaseUrl>https://geoserver.coast-wind.org/geoserver</proxyBaseUrl>

# 1. Matar cualquier proceso previo que haya quedado colgado
sudo pkill -9 -f geoserver
sudo pkill -9 -f jetty

# 2. Entrar al directorio bin
cd /usr/share/geoserver/bin/

# 3. Iniciar el servicio en segundo plano\
sudo JAVA_HOME=/usr/lib/jvm/java-21-openjdk-amd64 /usr/share/geoserver/bin/startup.sh &


# 4. Esperar 5 segundos y verificar que levante el puerto 8080
sleep 5
ss -tulnp | grep 8080

# Modificacion del archive startup.sh para poder eliminar, modificar o subir archivos al geoserver


sudo nano /usr/share/geoserver/bin/startup.sh


exec "$_RUNJAVA" -DGEOSERVER_CSRF_DISABLED=true --add-opens=java.base/java.lang=ALL-UNNAMED --add-opens=java.base/java.util=ALL-UNNAMED --add-opens=java.desktop/java.awt.font=ALL-UNNAMED --add-opens=java.desktop/sun.awt=ALL-UNNAMED --add-exports=java.desktop/sun.java2d=ALL-UNNAMED --add-exports=java.desktop/sun.java2d.pipe=ALL-UNNAMED -DGEOSERVER_DATA_DIR="$GEOSERVER_DATA_DIR" -Djava.awt.headless=true -Djetty.base="$GEOSERVER_HOME" -Djetty.home="$GEOSERVER_HOME" -Djetty.logging.dir="$GEOSERVER_HOME/logs" -jar "$GEOSERVER_HOME/start.jar"


# 1. Ajustar permisos de la carpeta de datos
sudo chmod -R 777 /usr/share/geoserver/data_dir

# 2. Matar procesos anteriores
sudo pkill -9 -f geoserver
sudo pkill -9 -f jetty

# 3. Iniciar GeoServer con la nueva configuración
cd /usr/share/geoserver/bin/
sudo JAVA_HOME=/usr/lib/jvm/java-21-openjdk-amd64 /usr/share/geoserver/bin/startup.sh &

ss -tulnp | grep 8080



'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''INICIAR DE FORMA AUTOMATICA GEOSERVER'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''


sudo nano /etc/systemd/system/geoserver.service

[Unit]
Description=GeoServer Web Application Service
After=network.target nginx.service

[Service]
Type=simple
User=root
WorkingDirectory=/usr/share/geoserver
Environment="JAVA_HOME=/usr/lib/jvm/java-21-openjdk-amd64"
Environment="GEOSERVER_HOME=/usr/share/geoserver"
Environment="GEOSERVER_DATA_DIR=/usr/share/geoserver/data_dir"

ExecStart=/usr/lib/jvm/java-21-openjdk-amd64/bin/java \
  -DGEOSERVER_CSRF_DISABLED=true \
  --add-opens=java.base/java.lang=ALL-UNNAMED \
  --add-opens=java.base/java.util=ALL-UNNAMED \
  --add-opens=java.desktop/java.awt.font=ALL-UNNAMED \
  --add-opens=java.desktop/sun.awt=ALL-UNNAMED \
  --add-exports=java.desktop/sun.java2d=ALL-UNNAMED \
  --add-exports=java.desktop/sun.java2d.pipe=ALL-UNNAMED \
  -DGEOSERVER_DATA_DIR=/usr/share/geoserver/data_dir \
  -Djava.awt.headless=true \
  -Djetty.base=/usr/share/geoserver \
  -Djetty.home=/usr/share/geoserver \
  -Djetty.logging.dir=/usr/share/geoserver/logs \
  -jar /usr/share/geoserver/start.jar

Restart=always
RestartSec=10s

[Install]
WantedBy=multi-user.target

# 1. Eliminar cualquier proceso de GeoServer/Jetty corriendo manualmente
sudo pkill -9 -f geoserver
sudo pkill -9 -f jetty

# 2. Recargar el demonio de systemd para que reconozca el nuevo servicio
sudo systemctl daemon-reload

# 3. Reiniciar Geoserver
sudo systemctl restart geoserver

# 4. Arrancar el servicio ahora mismo
sudo systemctl start geoserver


ss -tulnp | grep 8080

'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''VERSION CLOUD ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''


# 1. Crear el directorio de datos objetivo (si no existe)
sudo mkdir -p /usr/share/geoserver/data_dir/data/capas_coast

# 2. Mover el archivo zip desde tu carpeta home a la ubicación final
sudo mv ~/Capas_Coast.zip /usr/share/geoserver/data_dir/data/capas_coast/

# 3. Ir al directorio y descomprimir el paquete
cd /usr/share/geoserver/data_dir/data/capas_coast/
sudo unzip -o Capas_Coast.zip

# 4. Asignar propiedad a www-data (usuario de GeoServer) y permisos de lectura/escritura
sudo chown -R www-data:www-data /usr/share/geoserver/data_dir/data/capas_coast
sudo chmod -R 755 /usr/share/geoserver/data_dir/data/capas_coast




GEOSERVER_URL="http://localhost:8080/geoserver/rest"
USER="admin"
PASS="geoserver"
WORKSPACE="coast_wind_data"

# 1. Eliminar Workspace previo en cascada (si existe)
curl -u "$USER:$PASS" -X DELETE "$GEOSERVER_URL/workspaces/$WORKSPACE?recurse=true"

# 2. Crear Workspace nuevo
curl -u "$USER:$PASS" -X POST -H "Content-type: application/xml" \
  -d "<workspace><name>$WORKSPACE</name></workspace>" \
  "$GEOSERVER_URL/workspaces"



ls -la /usr/share/geoserver/data_dir/data/capas_coast

find /usr/share/geoserver/data_dir/data/capas_coast -maxdepth 2 -name "*.tif" | wc -l



DATA_DIR="/usr/share/geoserver/data_dir/data/capas_coast"
GEOSERVER_URL="http://localhost:8080/geoserver/rest"
USER="admin"
PASS="geoserver"
WORKSPACE="coast_wind_data"

cd "$DATA_DIR"

for file in *.tif; do
  [ -f "$file" ] || continue

  # Nombre original sin extension .tif
  layer_name="${file%.tif}"

  # Nombres codificados para la URL de la API REST de GeoServer
  layer_name_url=$(echo "$layer_name" | sed 's/ /%20/g')
  file_url=$(echo "$file" | sed 's/ /%20/g')

  echo "=== Procesando: $layer_name ==="

  # 1. Crear CoverageStore
  curl -s -u "$USER:$PASS" -X POST -H "Content-type: application/xml" \
    -d "<coverageStore><name>$layer_name</name><type>GeoTIFF</type><enabled>true</enabled><workspace>$WORKSPACE</workspace><url>file:$DATA_DIR/$file_url</url></coverageStore>" \
    "$GEOSERVER_URL/workspaces/$WORKSPACE/coveragestores"

  # 2. Publicar Coverage (Capa)
  curl -s -u "$USER:$PASS" -X POST -H "Content-type: application/xml" \
    -d "<coverage><name>$layer_name</name><nativeName>$layer_name</nativeName><title>$layer_name</title><srs>EPSG:4326</srs><projectionPolicy>FORCE_DECLARED</projectionPolicy><enabled>true</enabled></coverage>" \
    "$GEOSERVER_URL/workspaces/$WORKSPACE/coveragestores/$layer_name_url/coverages"

  echo "   [OK] $layer_name"
done



SLD_DIR="$HOME/estilos_sld"
GEOSERVER_URL="http://localhost:8080/geoserver/rest"
USER="admin"
PASS="geoserver"
WORKSPACE="coast_wind_data"

rm -rf "$SLD_DIR"
mkdir -p "$SLD_DIR"
cd "$SLD_DIR"

# Diccionario asociativo con los nombres exactos y sus colores
declare -A colores
colores=(
  ["Environmental Sensitivity Index"]="rampa_suma"
  ["Manglares"]="#1b4d3e"
  ["Presencia de pastos marinos"]="#7cfc00"
  ["Areas Coralinas"]="#ff6f61"
  ["Fondo algas carnosas"]="#808000"
  ["Fondos duros algas calcareas"]="#20b2aa"
  ["Zonas de alimentacion de tortugas"]="#ffcc00"
  ["Playas de anidacion de tortugas"]="#ffcc00"
  ["Desove de nodriza strombusg"]="#ff6600"
  ["Congregacion de peces"]="#8a2be2"
  ["Presencia de mamiferos marinos"]="#9400d3"
  ["Congregacion de aves marinas"]="#ff007f"
  ["Congregacion de aves playeras"]="#ff007f"
  ["Playas"]="#f5f5dc"
  ["Playones"]="#eee8aa"
  ["Playones salinos"]="#f5f5dc"
  ["Acantilados"]="#8b4513"
  ["Humedales costeros"]="#00ffff"
  ["Lagunas costeras"]="#40e0d0"
  ["Estuarios"]="#00ffff"
  ["Panganales"]="#556b2f"
  ["Playones fluviomarinos"]="#556b2f"
  ["Areas significativas de biodiversidad"]="#333333"
  ["Areas protegidas"]="#2e8b57"
  ["Sitios prioritarios de conservacion"]="#d9534f"
  ["Surgencia"]="#0000ff"
  ["Ostras perliferas"]="#a0522d"
)

# A. Generar archivos SLD locales
for layer in "${!colores[@]}"; do
    color="${colores[$layer]}"
    if [ "$color" = "rampa_suma" ]; then
        cat << EOF > "$layer.sld"
<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor version="1.0.0" xmlns="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.opengis.net/sld StyledLayerDescriptor.xsd">
  <NamedLayer>
    <Name>$layer</Name>
    <UserStyle>
      <Title>Rampa de Suma</Title>
      <FeatureTypeStyle>
        <Rule>
          <RasterSymbolizer>
            <ColorMap type="ramp">
              <ColorMapEntry color="#ffffb2" quantity="0" label="Bajo" opacity="0.0"/>
              <ColorMapEntry color="#fecc5c" quantity="5" label="Medio-Bajo" opacity="0.7"/>
              <ColorMapEntry color="#fd8d3c" quantity="10" label="Medio-Alto" opacity="0.7"/>
              <ColorMapEntry color="#e31a1c" quantity="20" label="Alto" opacity="0.8"/>
            </ColorMap>
          </RasterSymbolizer>
        </Rule>
      </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>
EOF
    else
        cat << EOF > "$layer.sld"
<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor version="1.0.0" xmlns="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.opengis.net/sld StyledLayerDescriptor.xsd">
  <NamedLayer>
    <Name>$layer</Name>
    <UserStyle>
      <Title>Estilo Binario</Title>
      <FeatureTypeStyle>
        <Rule>
          <RasterSymbolizer>
            <ColorMap type="values">
              <ColorMapEntry color="#000000" quantity="0" label="Ausencia" opacity="0.0"/>
              <ColorMapEntry color="$color" quantity="1" label="Presencia" opacity="0.7"/>
            </ColorMap>
          </RasterSymbolizer>
        </Rule>
      </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>
EOF
    fi
done

# B. Subir SLDs y asociarlos como DefaultStyle en GeoServer
for file in *.sld; do
    [ -f "$file" ] || continue
    layer="${file%.sld}"
    
    # Codificar espacios para URLs de REST
    layer_url=$(echo "$layer" | sed 's/ /%20/g')

    echo "=== Aplicando Estilo: $layer ==="

    # 1. Crear la entidad de estilo en el workspace
    curl -s -u "$USER:$PASS" -X POST -H "Content-type: application/xml" \
      -d "<style><name>$layer</name><filename>$file</filename></style>" \
      "$GEOSERVER_URL/workspaces/$WORKSPACE/styles"

    # 2. Subir el XML del estilo
    curl -s -u "$USER:$PASS" -X PUT -H "Content-type: application/vnd.ogc.sld+xml" \
      -d @"$file" \
      "$GEOSERVER_URL/workspaces/$WORKSPACE/styles/$layer_url"

    # 3. Vincular el estilo por defecto a la capa
    curl -s -u "$USER:$PASS" -X PUT -H "Content-type: application/xml" \
      -d "<layer><defaultStyle><name>$WORKSPACE:$layer</name></defaultStyle></layer>" \
      "$GEOSERVER_URL/workspaces/$WORKSPACE/layers/$WORKSPACE:$layer_url"

    echo "   [ESTILO OK] $layer"
done


DATA_DIR="/usr/share/geoserver/data_dir/data/capas_coast"

# 1. Mover los zips vectoriales desde tu home al directorio de datos
sudo mv ~/Poligono_ronda_eolica.zip "$DATA_DIR/"
sudo mv ~/Volcanes_de_lodo_SGC_2023.zip "$DATA_DIR/"

# 2. Descomprimir ambos archivos
cd "$DATA_DIR"
sudo unzip -o Poligono_ronda_eolica.zip
sudo unzip -o Volcanes_de_lodo_SGC_2023.zip

# 3. Asignar propiedad a www-data y permisos correspondientes
sudo chown -R www-data:www-data "$DATA_DIR"
sudo chmod -R 755 "$DATA_DIR"


ls -la /usr/share/geoserver/data_dir/data/capas_coast/*.shp




DATA_DIR="/usr/share/geoserver/data_dir/data/capas_coast"
GEOSERVER_URL="http://localhost:8080/geoserver/rest"
USER="admin"
PASS="geoserver"
WORKSPACE="coast_wind_data"

# Nombres exactos de los archivos SHP sin la extensión .shp
vector_layers=("Poligono ronda eolica" "Volcanes de lodo SGC 2023")

for shp_name in "${vector_layers[@]}"; do
  # Codificar espacios a %20 para la URL REST de GeoServer
  shp_name_url=$(echo "$shp_name" | sed 's/ /%20/g')

  echo "=== Publicando Vectorial: $shp_name ==="

  # 1. Crear el DataStore apuntando al archivo físico
  curl -s -u "$USER:$PASS" -X POST -H "Content-type: application/xml" \
    -d "<dataStore><name>$shp_name</name><enabled>true</enabled><workspace>$WORKSPACE</workspace><connectionParameters><entry key=\"url\">file:$DATA_DIR/$shp_name_url.shp</entry></connectionParameters></dataStore>" \
    "$GEOSERVER_URL/workspaces/$WORKSPACE/datastores"

  # 2. Publicar el FeatureType (Capa) en EPSG:4326
  curl -s -u "$USER:$PASS" -X POST -H "Content-type: application/xml" \
    -d "<featureType><name>$shp_name</name><nativeName>$shp_name</nativeName><title>$shp_name</title><srs>EPSG:4326</srs><projectionPolicy>FORCE_DECLARED</projectionPolicy><enabled>true</enabled></featureType>" \
    "$GEOSERVER_URL/workspaces/$WORKSPACE/datastores/$shp_name_url/featuretypes"

  echo "   [VECTOR OK] $shp_name"
done




DATA_DIR="/usr/share/geoserver/data_dir/data/capas_coast"

# 1. Mover zip desde home al directorio de datos
sudo mv ~/grilla_joint_EPSG4326_conv.zip "$DATA_DIR/"

# 2. Descomprimir
cd "$DATA_DIR"
sudo unzip -o grilla_joint_EPSG4326_conv.zip

# 3. Asignar permisos correctos
sudo chown -R www-data:www-data "$DATA_DIR"
sudo chmod -R 755 "$DATA_DIR"


ls -la /usr/share/geoserver/data_dir/data/capas_coast/*grilla*.shp


DATA_DIR="/usr/share/geoserver/data_dir/data/capas_coast"
GEOSERVER_URL="http://localhost:8080/geoserver/rest"
USER="admin"
PASS="geoserver"
WORKSPACE="coast_wind_data"
SHP_NAME="grilla_joint_EPSG4326_conv"

echo "=== Publicando Vectorial Grilla: $SHP_NAME ==="

# 1. Crear el DataStore
curl -s -u "$USER:$PASS" -X POST -H "Content-type: application/xml" \
  -d "<dataStore><name>$SHP_NAME</name><enabled>true</enabled><workspace>$WORKSPACE</workspace><connectionParameters><entry key=\"url\">file:$DATA_DIR/$SHP_NAME.shp</entry></connectionParameters></dataStore>" \
  "$GEOSERVER_URL/workspaces/$WORKSPACE/datastores"

# 2. Publicar la Capa (FeatureType) en EPSG:4326
curl -s -u "$USER:$PASS" -X POST -H "Content-type: application/xml" \
  -d "<featureType><name>$SHP_NAME</name><nativeName>$SHP_NAME</nativeName><title>$SHP_NAME</title><srs>EPSG:4326</srs><projectionPolicy>FORCE_DECLARED</projectionPolicy><enabled>true</enabled></featureType>" \
  "$GEOSERVER_URL/workspaces/$WORKSPACE/datastores/$SHP_NAME/featuretypes"

echo "   [GRILLA OK] $SHP_NAME publicada correctamente."




''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''' CORS DE NGINX para el analisis espacial """""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

sudo nano /etc/nginx/sites-available/coast-wind.org

server {
    listen 80;
    server_name geoserver.coast-wind.org coast-wind.org www.coast-wind.org;

    # Captura explícita de la ruta para GeoServer
    location /geoserver {
        # --- INICIO CONFIGURACIÓN CORS ---
        add_header 'Access-Control-Allow-Origin' 'https://coast-wind.org' always;
        add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS' always;
        add_header 'Access-Control-Allow-Headers' 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization' always;

        if ($request_method = 'OPTIONS') {
            add_header 'Access-Control-Allow-Origin' 'https://coast-wind.org' always;
            add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS' always;
            add_header 'Access-Control-Allow-Headers' 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization' always;
            add_header 'Access-Control-Max-Age' 1728000;
            add_header 'Content-Type' 'text/plain; charset=utf-8';
            add_header 'Content-Length' 0;
            return 204;
        }
        # --- FIN CONFIGURACIÓN CORS ---

        proxy_pass http://127.0.0.1:8080/geoserver;
        
        # Cabeceras necesarias para SSL/Proxy (Cloudflare + GeoServer Wicket CSRF)
        proxy_set_header Host $http_host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto https;
        proxy_set_header X-Forwarded-Host $host;
        
        # Redirección interna adaptada al subdominio HTTPS
        proxy_redirect http://127.0.0.1:8080/geoserver https://geoserver.coast-wind.org/geoserver;

        # Optimización SIG
        proxy_buffer_size          128k;
        proxy_buffers              4 256k;
        proxy_busy_buffers_size    256k;
        proxy_connect_timeout      90s;
        proxy_send_timeout         90s;
        proxy_read_timeout         90s;
    }

    # Carpeta raíz para el frontend (geovisor)
    location / {
        root /var/www/html;
        index index.html index.htm;
        try_files $uri $uri/ =404;
    }
}

sudo nginx -t
sudo systemctl reload nginx
