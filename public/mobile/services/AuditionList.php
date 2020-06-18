<?php
require_once 'ConnectDate.php';

$obj = new ConnectDate();

$id = $_GET["id"];

$query = "select id,aud_image,title,end_date from auditions where user_id = " . $id;

$con = mysqli_connect($obj->ip, $obj->id, $obj->password, $obj->database);

if (mysqli_connect_errno($con)) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
 
mysqli_set_charset($con, "utf8");

$res = mysqli_query($con, $query);


while($row = mysqli_fetch_array($res)) {
    $result['id'] = $row["id"];
    $result['aud_image'] = $row["aud_image"];
    $result['title'] = $row["title"];
    $result['end_date'] = $row["end_date"];
    $arr["result"][] = $result;
}

$json = json_encode($arr, JSON_UNESCAPED_UNICODE);
print $json;

mysqli_close($con);

?>