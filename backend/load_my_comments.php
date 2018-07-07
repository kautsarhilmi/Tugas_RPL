<?php
  include 'db_connect.php';
  $postdata = file_get_contents("php://input");
  $usernim = '';
  $request = json_decode($postdata);
  $usernim = $request->usernim;

    $query_comments = mysqli_query($connect,"SELECT p.judul, c.postid, c.text, c.date_time FROM comment c, post p WHERE c.postid=p.postid && c.usernim='$usernim' ORDER BY c.date_time DESC");
    if(mysqli_num_rows($query_comments)){
         while($result=mysqli_fetch_assoc($query_comments)){
            $results_set[]=$result;
         }
         $data = array(
            'message' => "Data Query Success",
            'data' => $results_set,
            'status' => "200"
         );
     }
     else {
         $data =array(
             'message' => "Data Query Failed!",
             'status' => "404"
         );
     }
     
    echo json_encode($data);
?>