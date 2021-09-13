<?php
  require_once("functions.php");
  $mysqli = db_connect();

  $q = $_POST['question'];
  $c1 = $_POST['choice1'];
  $c2 = $_POST['choice2'];
  $c3 = $_POST['choice3'];
  $c4 = $_POST['choice4'];
  $a = $_POST['options'];

  if ($c1 != "" && $c2 != "" && $c3 != "" && $c4 != "") {
    if(isset($_POST["action"])) {
      $sql = "INSERT INTO Questions96385 (question, choice1, choice2, choice3, choice4, answer) VALUES ('$q','$c1','$c2','$c3','$c4','$a')";
    }
  }

  $mysqli->query($sql);
  $mysqli->close();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>Add Question</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" >
</head>
<body>
  <form class="trivatable" action="insert_question.php" method="post">
    <label for="question">Question</label>
    <input type="text" name="question" value="">
    <br>
    <label for="choice1">Choice1</label>
    <input type="text" name="choice1" value="">
    <input type="radio" name="options" value="1">
    <br>
    <label for="choice2">Choice2</label>
    <input type="text" name="choice2" value="">
    <input type="radio" name="options" value="2">
    <br>
    <label for="choice3">Choice3</label>
    <input type="text" name="choice3" value="">
    <input type="radio" name="options" value="3">
    <br>
    <label for="choice4">Choice4</label>
    <input type="text" name="choice4" value="">
    <input type="radio" name="options" value="4">
    <input type="submit" name="action" value="Insert">
  </form>
   <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js"></script>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js"></script>
   <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js"></script>
</body>
</html>

<?php
$mysqli = new mysqli("localhost", "sienasel_sbxusr", "Sandbox@)!&", "sienasel_sandbox");

$result = $mysqli->query("SHOW COLUMNS FROM Questions96385");

echo '<table>';
echo '<tr>';
while ($row = $result->fetch_row()) {
	echo '<th>'.$row[0]."</th>";
}
echo '</tr>';

$result->close();

$result = $mysqli->query("SELECT * FROM Questions96385");

while ($row = $result->fetch_row()) {
	echo '<tr>';
	foreach ($row as $value) {
		echo '<td>'.$value.'</td>';
	}
	echo '</tr>';
}
echo '</table>';

$result->close();

$mysqli->close();
?>
