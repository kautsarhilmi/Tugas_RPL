<?php
  include 'db_connect.php';
  $postdata = file_get_contents("php://input");
  $postid = '';
  $request = json_decode($postdata);
  $postid = $request->postid;

    $query_comments = mysqli_query($connect,"SELECT u.nama, c.postid, c.text, c.date_time, c.usernim FROM comment c, user u WHERE c.postid='$postid' && c.usernim=u.nim ORDER BY c.date_time ASC");
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