/*
Importación de archivos GIS y creación de una Base de Datos Espaciales (BDE)
Proyecto COAST-SEI
*/

--- Pasos Generales
--- 1.0 Registre un nuevo servidor, por ejemplo 'COAST-WIND'

--- 2.0 Creación de una base de datos, por ejemplo 'coast-db' 
CREATE DATABASE "coast_db"
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LOCALE_PROVIDER = 'libc'
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

--- 3.0 Cree un Schema en la base de datos, por ejemplo 'coast_data'
CREATE SCHEMA coast_data AUTHORIZATION postgres;

--- 4.0 Creación de un nuevo rol, por ejemplo 'administrador' con contraseña 'xxxxxx' y asignarle los permisos necesarios para administrar la base de datos.
CREATE ROLE administrador WITH
	LOGIN
	NOSUPERUSER
	CREATEDB
	CREATEROLE
	INHERIT
	REPLICATION
	BYPASSRLS
	CONNECTION LIMIT -1
	PASSWORD 'xxxxxx';
/*

Permisos especiales requeridos para la inserción de las tablas de manchas de inundación y niveles de rios.
En este caso se utiliza el rol de administrador, pero en caso de errores se puede utilizar el root de postgres que por defecto funciona
*/

--- Cambiar el propietario de coast-db y colocar 'administrador'
---ALTER DATABASE coast_db OWNER TO administrador;

-- Conceder permisos de uso sobre el esquema
GRANT USAGE ON SCHEMA coast_data TO administrador;

-- Conceder todos los privilegios sobre las tablas existentes en ese esquema
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA coast_data TO administrador;

-- Conceder permisos sobre las secuencias (necesario para los campos SERIAL / llaves primarias)
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA coast_data TO administrador;

-- Asegurar que las tablas que se creen en el futuro también tengan permisos automáticos
ALTER DEFAULT PRIVILEGES IN SCHEMA coast_data GRANT ALL PRIVILEGES ON TABLES TO administrador;
ALTER DEFAULT PRIVILEGES IN SCHEMA coast_data  GRANT ALL PRIVILEGES ON SEQUENCES TO administrador;
	
--- 5.0 Cree las extensiones de GIS (PostGIS)
create EXTENSION postgis;
create EXTENSION fuzzystrmatch;
create EXTENSION postgis_raster;
create EXTENSION postgis_topology;
create EXTENSION postgis_sfcgal;
create EXTENSION postgis_tiger_geocoder;
