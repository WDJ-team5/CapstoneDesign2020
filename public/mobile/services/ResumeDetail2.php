<?php
require_once 'ConnectDate.php';

$obj = new ConnectDate();

$id = $_GET["id"];
$get_res = $_GET["res"];
$audition_id = $_GET["audition_id"];

$query1 = "update resumes set result = " . $get_res . " where id = " . $id;

$query2 = "select re.id,us.image,us.userid,us.name,re.result
from resumes AS re
join users AS us ON re.user_id = us.id
where re.audition_id = " . $audition_id;

$con = mysqli_connect($obj->ip, $obj->id, $obj->password, $obj->database);

if (mysqli_connect_errno($con)) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
 
mysqli_set_charset($con, "utf8");

$resko = mysqli_query($con, $query1);

mysqli_close($con);

$con = mysqli_connect("localhost", "root", "123456", "minaodo");

if (mysqli_connect_errno($con)) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
 
mysqli_set_charset($con, "utf8");

$res = mysqli_query($con, $query2);

while($row = mysqli_fetch_array($res)) {
    $result['id'] = $row["id"];
    $result['image'] = $row["image"];
    $result['userid'] = $row["userid"];
    $result['name'] = $row["name"];
    $result['result'] = $row["result"];
    $result['tmp'] = $resko;
    $arr["result"][] = $result;
}

$json = json_encode($arr, JSON_UNESCAPED_UNICODE);
print $json;

mysqli_close($con);

?>