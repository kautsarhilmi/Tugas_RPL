<?php
  include 'db_connect.php';
    $postdata = file_get_contents("php://input");
    $usernim = "";

    $request = json_decode($postdata);
    $usernim = $request->usernim;

    $query_nama = mysqli_query($connect,"SELECT nama FROM user WHERE (nim = '$usernim')");
    if($query_nama){
         $result=mysqli_fetch_assoc($query_nama);
         $data = array(
            'message' => "Data Query Success",
            'data' => $result,
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