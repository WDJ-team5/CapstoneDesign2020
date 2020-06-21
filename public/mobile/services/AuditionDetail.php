<?php
require_once 'ConnectDate.php';

$obj = new ConnectDate();

$id = $_GET["id"];

$query = " select aud.id, aud.title,aud.aud_image,aud.rank,aud.end_date,us.name,us.call_number,com.company_name,us.address,aud.content,aud.video
from auditions AS aud
join users AS us ON aud.user_id = us.id
join companies AS com ON us.company_id = com.id
where aud.id = " . $id;

$con = mysqli_connect($obj->ip, $obj->id, $obj->password, $obj->database);

if (mysqli_connect_errno($con)) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
 
mysqli_set_charset($con, "utf8");

$res = mysqli_query($con, $query);


while($row = mysqli_fetch_array($res)) {
    $result['id'] = $row["id"];
    $result['title'] = $row["title"];
    $result['aud_image'] = $row["aud_image"];
    $result['rank'] = $row["rank"];
    $result['end_date'] = $row["end_date"];
    $result['name'] = $row["name"];
    $result['call_number'] = $row["call_number"];
    $result['company_name'] = $row["company_name"];
    $result['address'] = $row["address"];
    $result['content'] = $row["content"];
    $result['video'] = $row["video"];
    $arr["result"][] = $result;
}

$json = json_encode($arr, JSON_UNESCAPED_UNICODE);
print $json;

mysqli_close($con);

?>