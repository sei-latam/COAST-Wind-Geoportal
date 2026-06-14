/*
Importación de archivos GIS y creación de una Base de Datos Espaciales (BDE)

Proyecto COAST-SEI

*/

--- Pasos Generales

--- 1.0 Registre un nuevo servidor, por ejemplo 'GeovisorTest'

--- 2.0 Cree una base de datos, por ejemplo 'geovisor_db' 
CREATE DATABASE "coast-db"
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LOCALE_PROVIDER = 'libc'
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

--- 3.0 Cree un Schema en la base de datos, por ejemplo 'geovisor_data'
CREATE SCHEMA coast_data AUTHORIZATION postgres;
	
--- 4.0 Cree las extensiones de GIS (PostGIS)
create EXTENSION postgis;
create EXTENSION fuzzystrmatch;
create EXTENSION postgis_raster;
create EXTENSION postgis_topology;
create EXTENSION postgis_sfcgal;
create EXTENSION postgis_tiger_geocoder;

-- 5.0 Cree una tabla dentro de la base de datos y el schema 'geovisor_data'
CREATE TABLE coast_data.coast_gis();

--*--