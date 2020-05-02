<?php
/****************************************************************************************************Notas/

Bienvenido, aqui podras configurar tu core de direccionamiento para tu pagian web


Nota: Si deseas bloquear la navegación por tu arbol de trabajo, es decir, por medio de URLs, en ese caso
puedes copiar en la rutas generales o especificas, el archivo index.php es decir este, y mantener el
redireccionamiento al área de logeo, o por otro lado en el archivo .htacess tienes codigos de redireccionamiento

/****************************************************************************************************FIN Notas*/





/****************************************************************************************************Router*/

/* En esta área puedes realizar diferente redirecciones, tanto para redirect HTTP o HTTPS, o por lo
*  contrario si deseas redireccionar al Generador.
Copiar y pegar el header generico debajo del comentario set router
*/

/*Router Server HTTPS
* Action: forzar direccionamiento por https
*
*     header("Location: https://domainName/site/...../Controller");
*
*/


/*Router Server local
* Action: direccionamiento por raiz del path
*
*     header("Location: /site/..../Controller");
*
*/


/*Router Generador
* Action: direccionamiento al generador
*
*
*     header("Location: /site/site_config/genoma/builder/builder.html");
*
*/


                               /**Set router**/
//header("Location: /site/site_media/html/modules/generadorMC/generadorController.php");
header("Location: /site/site_config/genoma/builder/builder.html");

/****************************************************************************************************FIN Router*/





/****************************************************************************************************Pruebas*/

/* Aquí podras realizar test de prueba, donde podras evidenciar ejemplos como el error 404 y su pagina de
redirección correspondiente.
//Copia la linea header prefabricada, descomentala y copiala debajo de Set router

/*
*  URL para pruebas
*/

 /* Tipo: Error 404
 *  Action: direccionamiento al error 404 Apache por defecto
 *
 *	  header("HTTP/1.0 404 Not Found");
 *
 */


/*
*  Envio de encabezados como Status de pruebas
 /

 /* Tipo: Error 404
 *  Action: direccionamiento al error 404 Apache por defecto
 *
 *	  http_response_code(NumeroStatus);
 *
 *Ejemplo
 *
 *    http_response_code(404);
 *
 */


/****************************************************************************************************FIN Pruebas*/

?>
