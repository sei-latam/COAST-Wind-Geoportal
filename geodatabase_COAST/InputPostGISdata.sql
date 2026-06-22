/*
Importación de archivos GIS y creación de una Base de Datos Espaciales (BDE)

Proyecto COAST-SEI

*/
--- Instrucciones generales
/* Conecta datos GIS usando PostGIS e importa shapefiles (.shp) con la función shp2pgsql y raster2pgsql.
Intenta ejecutar los siguientes scripts en la terminal de Linux:

Primero, abre shp2pgsql.exe en el directorio local:
C:\Program Files\PostgreSQL\18\bin\shp2pgsql.exe
C:\Program Files\PostgreSQL\18\bin\raster2pgsql.exe

Segundo, ejecuta el script y reemplaza la ruta de la carpeta y los archivos .shp, siguiendo la estructura:
(shp2pgsql -s <SRID> -I <path_to_shapefile.shp> <schema_name>.<table_name> > <output_file.sql>
*/


.\shp2pgsql.exe -s 3857:4326 -I "C:\Users\Carlos Andres\Desktop\COAST\ASB_Caribe_shape\ASB_Caribe_shape.shp" coast_data.asb_caribe | .\psql.exe -h 34.39.143.166 -U postgres -d coast_db
.\shp2pgsql.exe -s 4326 -I "C:\Users\Carlos Andres\Desktop\COAST\poligono_limite2\poligono_limite2.shp" coast_data.poligono_limite | .\psql.exe -h 34.39.143.166 -U postgres -d coast_db
.\raster2pgsql.exe -s 4326 -I -M -C "C:\Users\Carlos Andres\Desktop\COAST\raster_clusters_enteros_0_10_3\raster_clusters_enteros_project_0_10_3.tif" coast_data.raster_clusters_pr | .\psql.exe -h 34.39.143.166 -U postgres -d coast_db

---- Consultas SQL

SELECT * FROM coast_data.asb_caribe ORDER BY gid ASC;
SELECT * FROM coast_data.poligono_limite ORDER BY gid ASC;
SELECT * FROM coast_data.raster_clusters_pr ORDER BY rid ASC;