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

.\shp2pgsql.exe -s 3857 -I "C:\Users\Carlos Andres\Documents\GitHub\COAST-Wind-Geoportal\GIS_data\ASB_Caribe_shape\ASB_Caribe_shape.shp" coast_data.asb_caribe | .\psql.exe -h 34.39.143.166 -U postgres -d coast-db

.\shp2pgsql.exe -s 3857 -I "C:\Users\Carlos Andres\Documents\GitHub\COAST-Wind-Geoportal\GIS_data\IntensidadPescaCaribe\IntensidadPescaCaribe.shp" coast_data.intensidad_pesca | .\psql.exe -h 34.39.143.166 -U postgres -d coast-db

.\shp2pgsql.exe -s 4326 -I "C:\Users\Carlos Andres\Documents\GitHub\COAST-Wind-Geoportal\GIS_data\poligono_limite2\poligono_limite2.shp" coast_data.poligono_limite | .\psql.exe -h 34.39.143.166 -U postgres -d coast-db

.\raster2pgsql.exe -s 32618 -I -M "C:\Users\Carlos Andres\Documents\GitHub\COAST-Wind-Geoportal\GIS_data\raster_clusters_enteros_0_10_3\raster_clusters_enteros_0_10_3.tif" coast_data.raster_clusters | .\psql.exe -h 34.39.143.166 -U postgres -d coast-db

