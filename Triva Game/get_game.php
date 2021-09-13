<?php

    session_start();
    require_once("functions.php");
    $mysqli = db_connect();
    $sql = "SELECT * FROM Questions96385 order by rand()";
    $table = $mysqli->query($sql);

    echo '<form method="post" action="process_five.php">';
for ($i = 0; $i < 5; $i++)
{
    $row = $table->fetch_row();
    
    $q = $row[1];
    $c1 = $row[2];
    $c2 = $row[3];
    $c3 = $row[4];
    $c4 = $row[5];

    $_SESSION['question'.$i] = $q;


    

    echo '
    <label>
        '.$q.'
      <br>
    </label>
    <br>
    <label>
      '.$c1.'
      <input type="radio" name="answer'.$i.'" value="0">
    </label>
    <br>
    <label>
      '.$c2.'
      <input type="radio" name="answer'.$i.'" value="1">
    </label>
    <br>
    <label>
      '.$c3.'
      <input type="radio" name="answer'.$i.'" value="2">
    </label>
    <br>
    <label>
      '.$c4.'
      <input type="radio" name="answer'.$i.'" value="3">
    </label>
    <br>';
  
}  

echo '<input type="submit" name="action" value="Submit">
<br> </form>';


?>