<?php
  include 'db_connect.php';
    $postdata = file_get_contents("php://input");
    $usernim = "";
    $judul ="";
    $deskripsi = "";
    $jenis = "";
    $foto = "";
    $date_time = "";
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $usernim = $request->usernim;
        $judul = addslashes($request->judul);
        $deskripsi = addslashes($request->deskripsi);
        $jenis = $request->jenis;
        $date_time = $request->date_time;
        //ini buat cek apakah JSON ada isinya atau tidak
        if($request){
            $query_post = mysqli_query($connect,"INSERT INTO post (usernim, judul, deskripsi, jenis, date_time) VALUES ('$usernim', '$judul', '$deskripsi', '$jenis', '$date_time') ");
            if($query_post){
                 $data =array(
                     'message' => "Posting Success!",
                     'status' => "200"
                 );
             }
             else {
                 $data =array(
                     'message' => "Posting Failed!",
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