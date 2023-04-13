<?php 
// Connect to database
$servername = "mysql://root:zKp0KcAr8vaIt7l9eddk@containers-us-west-4.railway.app:6737";
$username = "root";
$password = "zKp0KcAr8vaIt7l9eddk";
$dbname = "railway";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Insert form data into database
$email = $_POST['email'];
$userpass = $_POST['userpass'];

$sql = "INSERT INTO users (id,email,userpass,timestamp) VALUES (NULL,'email','userpass',timestamp());";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
header("Location: ./login.html");
?>
