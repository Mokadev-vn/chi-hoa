<?php
$username = "caodang";
$password = "RupUz^EfemAj6Va";
$dbName = "caodang";
try {
    $conn = mysqli_connect('localhost', $username, $password, $dbName) or die ('Không thể kết nối tới database');
    
    $sql = "UPDATE wp_options SET option_value = 'a:1:{}' WHERE option_name = 'vote_log_member'";
    
    if (mysqli_query($conn, $sql)){
        echo 'Cập nhật thành công';
    }
     
    mysqli_close($conn);
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}
