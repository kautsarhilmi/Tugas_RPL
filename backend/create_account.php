<?php
  include 'db_connect.php';
    $postdata = file_get_contents("php://input");
    $nim = "";
    $nama ="";
    $username = "";
    $pw = "";
    $no_hp = "";
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $nim = $request->nim;
        $nama = $request->nama;
        $username = $request->username;
        $pw = $request->pw;
        $no_hp = $request->no_hp;
        //ini buat cek apakah JSON ada isisnya atau tidak
        if($request){
            $query_register = mysqli_query($connect,"INSERT INTO user (nim, nama, username, pw, no_hp) VALUES ('$nim', '$nama', '$username', '$pw', '$no_hp') ");
            if($query_register){
                 $data =array(
                     'message' => "Register Success!",
                     'status' => "200"
                 );
             }
             else {
                 $data =array(
                     'message' => "Register Failed!",
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