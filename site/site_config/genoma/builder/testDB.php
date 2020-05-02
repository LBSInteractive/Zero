<?php
$file = fopen("builder.conf", "r");
while (($búfer = fgets($file, 4096)) !== false) {
    echo $búfer;
}


if (!empty($_GET) && empty($_POST)){

    header('Content-type: application/json; charset=UTF-8');


} else if(empty($_GET) && !empty($_POST)){

    header('Content-type: application/json; charset=UTF-8');


} else {
   // header("Location: /site/site_config/genoma/builder/builder.html");
}

?>
