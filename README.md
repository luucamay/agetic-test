# agetic-test
## Proyecto: Registro de gastos e ingresos
Desarrollar una aplicación que permita registrar los ingresos y gastos diarios de una persona.
## Backend
Se ha realizado un backend con nodejs, express, y nedb (para la base de datos)
### Instrucciones para ejecutar el endpoint
- Clona este proyecto con git clone
- Dirigete desde cualquier terminal a la carpeta backend
- Creo que npm install no está bien configurado asi que te recomiendo instalar las siguientes librerias con esos comandos:
  - ```npm install express --save```
  - ```npm install nedb --save```
  - ```npm install body-parser --save```
- Finalmente levanta el servidor con el comando ```npm start```
### Como probar los endpoints
Dentro del directorio backend hay un archivo **curl_scripts.js**. En este archivo hay 5 lineas de código escritas, cada linea puede usarse como un solo comando para ejecutarlo desde alguna terminal. O tamién puedes usar postman(hace mucho que no lo uso y como no me da tiempo de configurarlo ahora, me quedé con el curl :D)

Ejemplo si quiero obtener todas las transacciones ejecuto en la terminal:

```curl -X GET "http://localhost:8080/transactions/"```

Y como respuesta me devolvera un array de transacciones en formato JSON
También puedes probar esto en la URL y te mostrará el mismo resultado.

## Frontend
Ha sido desarrollado con ReactJS, con la base de **create-react-app**
### Instrucciones para ejecutar el proyecto
- Clona el proyecto con git clone
- Dirigete desde cualquier terminal a la carpeta frontend
- Ejecuta el comando ```npm start```
- Visita en tu navegador web de preferencia la direccion **localhost:3000**

## Base de datos
La base de datos utilizada en es proyecto es nedb(si se que esta en contra de la reglas, lo siento, pero planeaba cambiarla si habia tiempo) que es una base de datos minimalista escrita enteramente en Javascript.

Solo se ha considerado un tipo de dato hasta el momento que es Transacciones.
Una Transaccion tiene las siguientes propiedades:
- categoria
- descripcion
- fecha
- monto
- tipo

Donde tipo es la propiedad que hace la diferencia entre definir la transaccion como ingreso o gasto.
