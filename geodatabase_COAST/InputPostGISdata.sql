/*
Importación de archivos GIS y creación de una Base de Datos Espaciales (BDE)

Proyecto COAST-SEI

*/
--- Pasos Previos

/* Conecta datos GIS usando PostGIS e importa shapefiles (.shp) con la función shp2pgsql.
Intenta ejecutar los siguientes scripts en la terminal de Windows/macOS/Linux:

Primero, abre shp2pgsql.exe en el directorio local:
C:\Program Files\PostgreSQL\17\bin\shp2pgsql.exe

Segundo, ejecuta el script y reemplaza la ruta de la carpeta y los archivos .shp, siguiendo la estructura:
(shp2pgsql -s <SRID> -I <path_to_shapefile.shp> <schema_name>.<table_name> > <output_file.sql>

*/

