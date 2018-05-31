<?php
  include 'db_connect.php';
    $postdata = file_get_contents("php://input");
    $nim = "";
    $nama ="";
    $username = "";
    $pw = "";
    $email = "";
    $no_hp = "";
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $nim = $request->nim;
        $nama = $request->nama;
        $username = $request->username;
        $pw = $request->pw;
        $email = $request->email;
        $no_hp = $request->no_hp;
        //ini buat cek apakah JSON ada isisnya atau tidak
        if($request){
            //cek apalah username sama email udah ada di db
            $query_regis = mysqli_query($connect, "SELECT * FROM user WHERE email='$email' OR username='$username'");
            if(mysqli_num_rows($query_regis)){
                $data =array(
                  'message' => "Email or Username Already Taken!",
                  'status' => "409"
              );
            } else {
                $query_register = mysqli_query($connect,"INSERT INTO user (nim, nama, username, pw, email, no_hp) VALUES ('$nim', '$nama', '$username', '$pw', '$email', '$no_hp') ");
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