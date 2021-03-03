<?php 
$servername = "localhost";
$username   = "root";
$password   = "root123";
$dbname     = "data";
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
 $sql = "INSERT INTO CUSTOMERS 
        VALUES ('".$_POST['firstName']."', '".$_POST['lastName']."','".$_POST['address']."','".$_POST['City']."','".$_POST['pincode']."','".$_POST['phonenumber']."')";
    if (mysqli_query($conn,$sql)) {
    $data = array("data" => "You Data added successfully");
        echo json_encode($data);
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
?>
