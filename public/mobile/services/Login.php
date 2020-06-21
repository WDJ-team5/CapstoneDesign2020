<?php
require_once 'ConnectDate.php';

$obj = new ConnectDate();

$con = mysqli_connect($obj->ip, $obj->id, $obj->password, $obj->database);

if (mysqli_connect_errno($con)) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
 
mysqli_set_charset($con, "utf8");

$res = mysqli_query($con, "select id,userid,name,class from users");

while($row = mysqli_fetch_array($res)) {
    $result['id'] = $row['id'];
    $result['userid'] = $row["userid"];
    $result['name'] = $row["name"];
    $result['port'] = $row["class"];
    $arr["result"][] = $result;
}

$json = json_encode($arr, JSON_UNESCAPED_UNICODE);
print $json;

mysqli_close($con);

?>