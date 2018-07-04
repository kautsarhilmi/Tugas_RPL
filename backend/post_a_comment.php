<?php
  include 'db_connect.php';
    $postdata = file_get_contents("php://input");
    $postid = "";
    $usernim = "";
    $text = "";
    $date_time = "";
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $postid = $request->postid;
        $usernim = $request->usernim;
        $text = addslashes($request->text);
        $date_time = $request->date_time;
        //ini buat cek apakah JSON ada isinya atau tidak
        if($request){
            $query_post = mysqli_query($connect,"INSERT INTO comment (postid, usernim, text, date_time) VALUES ('$postid', '$usernim', '$text', '$date_time') ");
            if($query_post){
                 $data =array(
                     'message' => "Posting Comment Success!",
                     'status' => "200"
                 );
             }
             else {
                 $data =array(
                     'message' => "Posting Comment Failed!",
                     'status' => "404"
                 ); 
             }
        }
        else{
            $data =array(
                'message' => "No Data!",
                'status' => "503"
            ); 
        }
        echo json_encode($data);
    }
?>