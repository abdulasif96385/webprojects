<?php

if($_GET['key']!="864") {
	die("Access denied");
}

$mysqli = new mysqli("localhost", "sienasel_sbxusr", "Sandbox@)!&", "sienasel_sandbox");
$sql = "CREATE TABLE Users96385 (

    Username VARCHAR(25) NOT NULL,
    Pass VARCHAR(25) NOT NULL,
    GamesPlayed INT,
    Correct INT,
    Incorrect INT,
    PRIMARY KEY (Username)
   
    
)";

$mysqli->query($sql);
$mysqli->close();

die("Success");

?>