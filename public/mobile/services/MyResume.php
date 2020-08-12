<?php
require_once 'ConnectDate.php';

$obj = new ConnectDate();

$id = $_GET["id"];

$query = "select resumes.id, auditions.title, resumes.message, resumes.score, resumes.result
from resumes
join auditions on resumes.audition_id = auditions.id
where resumes.user_id = " . $id;

$con = mysqli_connect($obj->ip, $obj->id, $obj->password, $obj->database);

if (mysqli_connect_errno($con)) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
 
mysqli_set_charset($con, "utf8");

$res = mysqli_query($con, $query);


while($row = mysqli_fetch_array($res)) {
    $result['id'] = $row["id"];
    $result['title'] = $row["title"];
    $result['message'] = $row["message"];
    $result['score'] = $row["score"];
    $result['result'] = $row["result"];
    $arr["result"][] = $result;
}

$json = json_encode($arr, JSON_UNESCAPED_UNICODE);
print $json;

mysqli_close($con);

?>