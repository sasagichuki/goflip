<?php
//$host = "localhost";
//$user = "postgres";
//$pass = "phoenix";
//$db = "goflip";

$host = "ec2-54-221-204-17.compute-1.amazonaws.com";
$user = "tzwjagkacvmdun";
$pass = "ep5ulZn_TL4pXu058OT7uipZBe";
$db = "d7pf0ab8t8m5h1";

$con = pg_connect("host=$host dbname=$db user=$user password=$pass")
    or die ("Could not connect to server\n");

$user_name = $_POST["user_name"];
$email = $_POST["email"];
$phone_number = $_POST["phone_number"];
$total_clicks = $_POST["total_clicks"];
$total_time = $_POST["total_time"];

$quer = "CREATE TABLE IF NOT EXISTS users (user_id serial PRIMARY KEY, user_name varchar(50) NOT NULL, email varchar(50) NOT NULL, phone_number varchar(30) NOT NULL, total_clicks int NOT NULL, total_time int NOT NULL)";
$res = pg_query($con, $quer) or die("Cannot execute query: $quer\n");

$query = "INSERT INTO users(user_name, email, phone_number, total_clicks, total_time) VALUES ('$user_name', '$email', '$phone_number', '$total_clicks', '$total_time')";
$rs = pg_query($con, $query) or die("Cannot execute query: $query\n");

$query2 = "SELECT * FROM users ORDER BY total_time ASC LIMIT 0, 10";

$aData = pg_query($con, $query2) or die("Cannot execute query: $query2\n");
$row = pg_fetch_row($aData);

//echo $row[0] . "\n";

$stack = array();

if ($aData) {
    while($row = pg_fetch_row($aData)) {
        $jsonObj = array('user_name' => $row['user_name'], 'email' => $row['email'], 'phone_number' => $row['phone_number'], 'total_clicks' => $row['total_clicks'], 'total_time' => $row['total_time'], );
        array_push($stack, $jsonObj);
    }
}

pg_close($con);

echo json_encode($stack);

//mysql_connect($host, $user, $password) or die(mysql_error());
//mysql_select_db($database);
//
//$user_name = $_POST["user_name"];
//$email = $_POST["email"];
//$phone_number = $_POST["phone_number"];
//$total_clicks = $_POST["total_clicks"];
//$total_time = $_POST["total_time"];
//
//// save data to the database
//$resource = mysql_query("INSERT INTO users(user_name, email, phone_number, total_clicks, total_time) VALUES ('$user_name', '$email', '$phone_number', '$total_clicks', '$total_time')");
//
//
//// obtain data from database
//$aData = mysql_query("SELECT * FROM users ORDER BY total_time ASC LIMIT 0, 10");
//
//$stack = array();
//
//if ($aData) {
//    while($row = mysql_fetch_array($aData)) {
//        $jsonObj = array('user_name' => $row['user_name'], 'email' => $row['email'], 'phone_number' => $row['phone_number'], 'total_clicks' => $row['total_clicks'], 'total_time' => $row['total_time'], );
//        array_push($stack, $jsonObj);
//    }
//}
//
//echo json_encode($stack);

?>
