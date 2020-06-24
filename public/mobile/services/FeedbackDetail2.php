<?php
require_once 'ConnectDate.php';

$obj = new ConnectDate();

$article_id = $_GET["article_id"];
$expert_id = $_GET["expert_id"];
$answer = $_GET["answer"];

$query1 = "update articles set answer = " . $answer . " where id = " . $article_id;

$query2 = "select articles.id, users.name, articles.title, articles.created_at, articles.answer
from articles
join users ON articles.user_id = users.id
where articles.expert_id = " . $expert_id;

$con = mysqli_connect($obj->ip, $obj->id, $obj->password, $obj->database);

if (mysqli_connect_errno($con)) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
 
mysqli_set_charset($con, "utf8");

$resko = mysqli_query($con, $query1);

mysqli_close($con);

$con = mysqli_connect($obj->ip, $obj->id, $obj->password, $obj->database);

if (mysqli_connect_errno($con)) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
 
mysqli_set_charset($con, "utf8");

$res = mysqli_query($con, $query2);

while($row = mysqli_fetch_array($res)) {
    $result['id'] = $row["id"];
    $result['name'] = $row["name"];
    $result['title'] = $row["title"];
    $result['date'] = $row["created_at"];
    $result['answer'] = $row["answer"];
    $arr["result"][] = $result;
}

$json = json_encode($arr, JSON_UNESCAPED_UNICODE);
print $json;

mysqli_close($con);

?>