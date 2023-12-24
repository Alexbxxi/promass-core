# promass-core 🚀 

Esta aplicación contiene el backend de una app tipo Blogspot, hecho con buenas practicas y arquitectura MVC.

## Requisitos
Este proyecto ha sido realizado con NodeJs v20.10.0 + Express(last version) + TypeOrm(last version)

1.-Tener instalado el cliente de PostgreSQL.
<br>
3.- Tener instalado el cliente de Docker y la aplicación de escritorio (de preferencia) o alguna alternativa para gestionar contenedores.
<br>

## Pasos para la instalación

1.- Descargar o clonar el repositorio.
<br>
2.- Ejecutar el comando <code>npm install<code>
<br>
2.- Ejecutar el comando "npm install"

A continuación ejecutar los soguientes comandos para configurar la imagen de docker:
<br>
1.- Descarga la imagen oficial de PostgreSQL: <code>docker pull postgres<code>
1.- Verificar el estado del contenedor: <code>docker ps<code> 
1.- Este comando crea la imagen, la instancia y la de la base de datos: <code>docker run -d --name mi-postgres-container -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=admin -e POSTGRES_DB=dev.PROMASS_BLOG -p 5432:5432 postgres<code> (en el comando donde dice "mi-postgres-container pueden poner cualquier nombre a su contenedor).

## Pasos para levantar el proyecto

1.-Ejecutar el comando <code>npm start<code> al ejecutar este comando se hace la sincronización de la base de datos y las migraciones correspondientes.

## Notas

(IMPORTANTE): Se sube el archivo .env para fines de la prueba.

Desarrollado por @Alexbxxi 🤖 para el examen de Fullstack Developer para Grupo PROMASS.
