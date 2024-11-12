<?php
// ตั้งค่าการเชื่อมต่อกับฐานข้อมูล
$servername = "localhost";
$username = "root";
$password = "password";
$dbname = "grade_database";

// สร้างการเชื่อมต่อ
$conn = new mysqli($servername, $username, $password, $dbname);

// ตรวจสอบการเชื่อมต่อ
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// รับข้อมูลจากการส่งแบบ POST
$year = $_POST['year'];
$term = $_POST['term'];
$current_gpa = $_POST['currentGPA'];
$target_gpa = $_POST['targetGPA'];

// เตรียมและรันคำสั่ง SQL
$sql = "INSERT INTO grade_info (year, term, current_gpa, target_gpa) VALUES ('$year', '$term', '$current_gpa', '$target_gpa')";

if ($conn->query($sql) === TRUE) {
    echo "ข้อมูลถูกบันทึกเรียบร้อยแล้ว";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// ปิดการเชื่อมต่อ
$conn->close();
?>
