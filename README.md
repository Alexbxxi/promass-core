# promass-core 🚀 

Esta aplicación contiene el backend de una app tipo Blogspot, hecho con buenas practicas y arquitectura MVC.

## Requisitos
Este proyecto ha sido realizado con NodeJs v20.10.0 + Express(last version) + TypeOrm(last version)

1.-Tener instalado el cliente de PostgreSQL.
<br>
2.- Tener instalado el cliente de Docker y la aplicación de escritorio (de preferencia) o alguna alternativa para gestionar contenedores.
<br>

## Pasos para la instalación

1.- Descargar o clonar el repositorio.
<br>
2.- Ejecutar el comando <code>npm install<code>.
<br>
A continuación ejecutar los siguientes comandos para configurar la imagen de Docker:
<br>
3.- Descarga la imagen oficial de PostgreSQL: <code>docker pull postgres<code>
<br>
4.- Verificar el estado del contenedor: <code>docker ps<code>
<br>
5.- Este comando crea la imagen, la instancia y la de la base de datos: <code>docker run -d --name mi-postgres-container -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=admin -e POSTGRES_DB=dev.PROMASS_BLOG -p 5432:5432 postgres<code> 
<br>
(En el comando donde dice "mi-postgres-container pueden poner cualquier nombre a su contenedor).

## Pasos para levantar el proyecto

1.-Ejecutar el comando <code>npm start<code> al ejecutar este comando se hace la sincronización de la base de datos y las migraciones correspondientes.

## Notas

(IMPORTANTE): Se sube el archivo .env para fines de la prueba.

Desarrollado por @Alexbxxi 🤖 para el examen de Fullstack Developer para Grupo PROMASS.
