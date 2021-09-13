<?php

require_once("functions.php");
$username = $_POST['username'];
$password = $_POST['password'];
$mysqli = db_connect();

if ($username != "" && $password != "")
{

    $sql = "INSERT INTO Users96385 VALUES ('$username', '$password', 0, 0, 0)";
    
    if ($mysqli->query($sql))
    {
    
      echo $username + 'was added';
      $result = $mysqli->query("SELECT * FROM Users96385");

      echo '<table>';
      echo '<tr>
      		<th>Username</th>
      		<th>Password</th>
	        	<th>Games Played</th>
            <th>Correct</th>
            <th>Incorrect</th>
      	 </tr>';


    while ($row = $result->fetch_row()) 
    {
	      echo '<tr>';
	      foreach ($row as $value) 
        {
	      	echo '<td>'.$value.'</td>';
        }
	    
	    echo '</tr>';
    
    }
      echo '</table>';

      echo '<a href="insert_user.php">Insert another user</a>';

      $result->close();
    
    }
  else 
  {
    
      echo '<p>'.$username.' was already added </p>';
      echo '<a href="insert_user.php">Insert another user</a>';
  }
    
   
  
  
}
else
{
        
            echo '<form action="insert_user.php" method="post">

            <label for="username">Username </label>
            <br>
            <input type="text" name="username" id="username" required>
            <br>

            <label for="password">Password </label>
            <br>
            <input type="password" name="password" id="password" required>
            <br>

            <input type="submit" name="action" id="action" value="Insert" >
            </form>';
}

	



$mysqli->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>Insert User</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" >
</head>
<body>
   

  
   <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js"></script>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js"></script>
   <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js"></script>
</body>
</html>

