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
$aData = mysql_query("SELECT * FROM users ORDER BY total_time ASC LIMIT 0, 10");

$stack = array();

if ($aData) {
    while($row = mysql_fetch_array($aData)) {
        $jsonObj = array('user_name' => $row['user_name'], 'email' => $row['email'], 'phone_number' => $row['phone_number'], 'total_clicks' => $row['total_clicks'], 'total_time' => $row['total_time'] );
        array_push($stack, $jsonObj);
    }
}

echo json_encode($stack);

?>
