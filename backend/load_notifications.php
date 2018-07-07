<?php
  include 'db_connect.php';
  $postdata = file_get_contents("php://input");
  $usernim = '';
  $request = json_decode($postdata);
  $usernim = $request->usernim;

    $query_posts = mysqli_query($connect,"SELECT p.postid, p.jenis, p.judul, c.date_time, u.nama FROM comment c, post p, user u, notification n WHERE c.postid=p.postid && n.commentid=c.commentid && n.issuer_usernim=u.nim && n.usernim='$usernim' ORDER BY c.date_time DESC");
    if(mysqli_num_rows($query_posts)){
         while($result=mysqli_fetch_assoc($query_posts)){
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