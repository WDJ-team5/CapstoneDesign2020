<?php
require_once 'ConnectDate.php';

$obj = new ConnectDate();

$id = $_GET["id"];

$query = "select resumes.id, users.image, users.name, users.userid, users.gender, users.address, users.call_number, ranks.rank_name, resumes.score, resumes.message, resumes.result, resumes.audition_id, resumes.video
from resumes
join users ON resumes.user_id = users.id
join ranks ON users.rank_id = ranks.id
where resumes.id = " . $id;

$con = mysqli_connect($obj->ip, $obj->id, $obj->password, $obj->database);

if (mysqli_connect_errno($con)) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
 
mysqli_set_charset($con, "utf8");

$res = mysqli_query($con, $query);

while($row = mysqli_fetch_array($res)) {
    $result['id'] = $row["id"];
    $result['image'] = $row["image"];
    $result['name'] = $row["name"];
    $result['userid'] = $row["userid"];
    $result['gender'] = $row["gender"];
    $result['address'] = $row["address"];
    $result['call_number'] = $row["call_number"];
    $result['rank_name'] = $row["rank_name"];
    $result['score'] = $row["score"];
    $result['message'] = $row["message"];
    $result['result'] = $row["result"];
    $result['audition_id'] = $row["audition_id"];
    $result['video'] = $row["video"];
    $arr["result"][] = $result;
}

$json = json_encode($arr, JSON_UNESCAPED_UNICODE);
print $json;

mysqli_close($con);

?>