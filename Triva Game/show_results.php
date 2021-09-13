<?php

$mysqli = new mysqli("localhost", "sienasel_sbxusr", "Sandbox@)!&", "sienasel_sandbox");		

$result = $mysqli->query("SELECT Username, GamesPlayed, Correct, Incorrect FROM Users96385");

echo '<table>';
echo '<tr>
		<th>Username</th>
		<th>Games Played</th>
		<th>Correct</th>
		<th>Incorrect</th>
	 </tr>';


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
