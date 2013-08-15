<?php
$host = "localhost";
$user = "";
$password = "";
$database = "goflip";

mysql_connect($host, $user, $password) or die(mysql_error());
mysql_select_db($database);

$user_name = $_POST["user_name"];
$email = $_POST["email"];
$phone_number = $_POST["phone_number"];
$total_clicks = $_POST["total_clicks"];
$total_time = $_POST["total_time"];

// save data to the database
$resource = mysql_query("INSERT INTO users(user_name, email, phone_number, total_clicks, total_time) VALUES ('$user_name', '$email', '$phone_number', '$total_clicks', '$total_time')");


// obtain data from database
$aData = mysql_query("SELECT * FROM 'users' ORDER BY 'total_time' DESC LIMIT 0, 10");

if (count($aData)) {
    echo json_encode(array('data' => $aData));
} else {
    echo json_encode(array('data' => 'Nothing found'));
}

?>
