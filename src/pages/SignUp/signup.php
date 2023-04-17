<?php 
// Connect to database
$servername = "mysql://letsrollserver.mysql.database.azure.com";
$username = "sean";
$password = "LL0921jj";
$dbname = "users";



$conn = new mysqli($servername, $username, $password, $dbname);

$con = mysqli_init();
mysqli_ssl_set($con,NULL,NULL, "{path to CA cert}", NULL, NULL);
mysqli_real_connect($conn, "letsrollserver.mysql.database.azure.com", "sean", "LL0921jj", "users", 3306, MYSQLI_CLIENT_SSL);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Insert form data into database
$email = $_HEAD['email'];
$password = $_HEAD['password'];

$sql = "INSERT INTO users (id,email,password,timestamp) VALUES (NULL,'email','password',timestamp());";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
header("Location: ./home");
?>
