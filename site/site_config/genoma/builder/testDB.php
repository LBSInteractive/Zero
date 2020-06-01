<?php
header('Content-type: application/json; charset=utf-8');
date_default_timezone_set("America/Bogota");
error_reporting(0);
if (file_exists('.\builder.conf')){

    $data = [];
    $onDataBase = false;

    $jsonResponse = new stdClass;
    $jsonResponse->code = 402;
    $jsonResponse->status = 'M';
    $jsonResponse->msg = '';
    $jsonResponse->data = '';



    $file = fopen("builder.conf", "r");

    while (($bufer = fgets($file)) !== false) {
        $data[] = $bufer;
    }

    $dbhost = trim($data[0], " \n");
    $dbuser = trim($data[3], " \n");
    $dbpass = trim(base64_decode($data[4]), " \n");
    $db = trim($data[2], " \n");

    function OpenCon($dbhost, $dbuser, $dbpass,$db)
    {

        $dbhost = $dbhost;
        $dbuser = $dbuser;
        $dbpass = $dbpass;
        $db = $db;

        $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);

        if ($conn->connect_error) {

             error_log(date('Y-m-d h:iA')." [ERROR] ".$conn->connect_error.PHP_EOL, 3, $_SERVER['DOCUMENT_ROOT']."/site/site_config/logs/builder.log");

        } else {

            return $conn;
        }


    }

    function CloseCon($conn)
    {
        $conn -> close();
    }

    $conn = OpenCon($dbhost, $dbuser, $dbpass,$db);

    if (isset($conn) && ($conn->connect_error == null)) {
        $onDataBase = true;
        CloseCon($conn);
    }


    if ($onDataBase) {

        http_response_code(201);
        $jsonResponse->code = 201;
        $jsonResponse->status = 'B';
        $jsonResponse->msg = 'Conexión exitosa';
        $jsonResponse->data = null;
        $jsonResponseService = json_encode($jsonResponse);
        echo $jsonResponseService;

    } else {

        http_response_code(402);
        $jsonResponse->code = 402;
        $jsonResponse->status = 'M';
        $jsonResponse->msg = 'Error en la conexión';
        $jsonResponse->data = null;
        $jsonResponseService = json_encode($jsonResponse);
        echo $jsonResponseService;

    }



} else {

    error_log(date('Y-m-d h:iA')." [ERROR] "."Archivo builder.conf no encontrado".PHP_EOL, 3, $_SERVER['DOCUMENT_ROOT']."/site/site_config/logs/builder.log");
    http_response_code(402);
    $jsonResponse->code = 402;
    $jsonResponse->status = 'M';
    $jsonResponse->msg = 'Error en el archivo de configuración';
    $jsonResponse->data = null;
    $jsonResponseService = json_encode($jsonResponse);
    echo $jsonResponseService;
};





// if (!empty($_GET) && empty($_POST)){

//     header('Content-type: application/json; charset=UTF-8');


// } else if(empty($_GET) && !empty($_POST)){

//     header('Content-type: application/json; charset=UTF-8');


// } else {
//    // header("Location: /site/site_config/genoma/builder/builder.html");
// }

?>
