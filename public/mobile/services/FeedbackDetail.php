<?php
require_once 'ConnectDate.php';

$obj = new ConnectDate();

$id = $_GET["id"];

$query = "select articles.id, articles.title, articles.created_at, users.image, users.name, articles.video, articles.content, articles.answer
from articles
join users ON articles.user_id = users.id
where articles.id = " . $id;

$con = mysqli_connect($obj->ip, $obj->id, $obj->password, $obj->database);

if (mysqli_connect_errno($con)) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
 
mysqli_set_charset($con, "utf8");

$res = mysqli_query($con, $query);


while($row = mysqli_fetch_array($res)) {
    $result['id'] = $row["id"];
    $result['title'] = $row["title"];
    $result['date'] = $row["created_at"];
    $result['image'] = $row["image"];
    $result['name'] = $row["name"];
    $result['video'] = $row["video"];
    $result['content'] = $row["content"];
    $result['answer'] = $row["answer"];
    $arr["result"][] = $result;
}

$json = json_encode($arr, JSON_UNESCAPED_UNICODE);
print $json;

mysqli_close($con);

?>