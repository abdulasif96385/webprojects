<?php
    session_start();

    $numCorrect = 0;

    $answer1 = $_POST['answer0']; 
    $answer2 = $_POST['answer1'];
    $answer3 = $_POST['answer2'];
    $answer4 = $_POST['answer3'];
    $answer5 = $_POST['answer4'];

    $question1 = $_SESSION['question0']; 
    $question2 = $_SESSION['question1']; 
    $question3 = $_SESSION['question2']; 
    $question4 = $_SESSION['question3']; 
    $question5 = $_SESSION['question4']; 

    /*echo $question1.'<br>';
    echo $question2.'<br>';
    echo $question3.'<br>';
    echo $question4.'<br>';
    echo $question5.'<br>';

    echo $answer1.'<br>';
    echo $answer2.'<br>';
    echo $answer3.'<br>';
    echo $answer4.'<br>';
    echo $answer5.'<br>';*/

    require_once("functions.php");
    $mysqli = db_connect();

    

    $sql = "SELECT answer FROM Questions96385 WHERE question = '".$question1."'";


    $result = $mysqli->query($sql);

    $row = $result->fetch_row();

    $ans = $row[0];

    if ($answer1 == $ans)
    {
        $numCorrect++;
        echo '1 ';
    }

    $sql = "SELECT answer FROM Questions96385 WHERE question = '".$question2."'";


    $result = $mysqli->query($sql);

    $row = $result->fetch_row();

    $ans = $row[0];

    if ($answer2 == $ans)
    {
        $numCorrect++;
        echo '2 ';
    }

    $sql = "SELECT answer FROM Questions96385 WHERE question = '".$question3."'";


    $result = $mysqli->query($sql);

    $row = $result->fetch_row();

    $ans = $row[0];

    if ($answer3 == $ans)
    {
        $numCorrect++;
        echo '3 ';
    }

    $sql = "SELECT answer FROM Questions96385 WHERE question = '".$question4."'";


    $result = $mysqli->query($sql);

    $row = $result->fetch_row();

    $ans = $row[0];

    if ($answer4 == $ans)
    {
        $numCorrect++;
        echo '4 ';
    }

    $sql = "SELECT answer FROM Questions96385 WHERE question = '".$question5."'";


    $result = $mysqli->query($sql);

    $row = $result->fetch_row();

    $ans = $row[0];

    if ($answer5 == $ans)
    {
        $numCorrect++;
        echo '5 ';
    }

    echo $numCorrect.'/5 correct';

    $u = $_SESSION['username'];

    $sql = "UPDATE Users96385 SET GamesPlayed = GamesPlayed + 1, Correct = Correct + numCorrect, Incorrect = Incorrect + 5 - Correct WHERE username = '".$u."'";

    $mysqli->query($sql);
    

    $mysqli->close();


?>