<?php
  include 'db_connect.php';
  $postdata = file_get_contents("php://input");
  $postid = '';
  $request = json_decode($postdata);
  $postid = $request->postid;

    $query_posts = mysqli_query($connect,"DELETE FROM post WHERE postid='$postid'");
    if($query_posts){
         $data = array(
            'message' => "Delete Post Success",
            'status' => "200"
         );
     }
     else {
         $data =array(
             'message' => "Delete Post Failed!",
             'status' => "404"
         );
     }
     
    echo json_encode($data);
?>