<?php
  include 'db_connect.php';
  $postdata = file_get_contents("php://input");
  $commentid = '';
  $usernim = '';
  $issuer_usernim = '';
  $request = json_decode($postdata);
  $commentid = $request->commentid;
  $usernim = $request->usernim;
  $issuer_usernim = $request->issuer_usernim;

    $create_notif = mysqli_query($connect,"INSERT INTO notification (commentid, usernim, issuer_usernim) VALUES ('$commentid', '$usernim', '$issuer_usernim')");
    if($create_notif){
     $data =array(
         'message' => "Create Notification Success!",
         'status' => "200"
     );
    }
    else {
     $data =array(
         'message' => "Create Notification Failed!",
         'status' => "404"
     ); 
    }

    echo json_encode($data);
?>