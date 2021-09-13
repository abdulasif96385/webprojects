<?php

require_once("functions.php");
$mysqli = db_connect();

$sql = "DROP TABLE Users96385";

$mysqli->query($sql);


?>