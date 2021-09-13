<?php

require_once("functions.php");
$mysqli = db_connect();

function delete() {
    $u = $_POST['users'];
    $sql = "DELETE * FROM Users96385 WHERE Username = $u";
  }

if (isset($_POST['users'])) {
    delete();
    return;
}

if ($_POST['users'] == "")
{

$sql = "SELECT Username FROM Users96385";

$result = $mysqli->query($sql);

echo '
<form action="" method="post">
<label for="users">Delete user:</label>

<select name="users" id="users">';

while ($row = $result->fetch_row())
{
  echo'<option value="'.$row[0].'">'.$row[0].'</option>';
}

echo '
<input type="submit" name="action" id="action" value="Delete" >
</select></form>';
}
else
{


$mysqli->query($sql);
}
$mysqli->close();


?>

<html>
<body>
</body>
    </html>
