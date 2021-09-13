<?php

session_start();

if ($_POST['username'] == "")
{
echo '<form method="post" action="login.php">

<label for="username">Username </label>

<input type="text" name="username" id="username">

<br>

<label for="password">Password </label>

<input type="password" name="password" id="password"><br>

<input type="submit" name="sub" id="sub">

</form>


';
}
require_once("functions.php");
$mysqli = db_connect();

$u = $_POST['username'];

$sql = "SELECT Username, Pass FROM Users96385 WHERE Username = '".$u."'";

$result = $mysqli->query($sql);

$row = $result->fetch_row();

if ($_POST['password'] != "")
{
if ($row[1] != $_POST['password'])
{
    die("Invalid username and/or password");
}
else
{
    $_SESSION['username'] = $u;
    echo '<h1>Options</h1>

<a href="get_game.php">Play Game</a> <br>
<a href="show_users.php">Show Results</a>

';
}
}






?>

<!DOCTYPE html>
<html lang="en">



</html>
