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
        
        if($request){
            //cek apakah JSON punya attribut pw di dalamnya
            if($pw != ""){
                //cek apakah updatean username udah ada di db
                $query_username = mysqli_query($connect, "SELECT * FROM user WHERE username='$username' && nim!='$nim'");
                if(mysqli_num_rows($query_username)){
                    $data =array(
                      'message' => "Email or Username Already Taken!",
                      'status' => "409"
                  );
                } else {
                    $query_update = mysqli_query($connect,"UPDATE user SET nama='$nama', username='$username', pw='$pw', no_hp='$no_hp' WHERE nim='$nim'");
                    if($query_update){
                         $data =array(
                             'message' => "Update Success!",
                             'status' => "200"
                         );
                     }
                     else {
                         $data =array(
                             'message' => "Update Failed!",
                             'status' => "404"
                         ); 
                     }
                   }
            } else {
                //cek apakah updatean username udah ada di db
                $query_username = mysqli_query($connect, "SELECT * FROM user WHERE username='$username' && nim!='$nim'");
                if(mysqli_num_rows($query_username)){
                    $data =array(
                      'message' => "Email or Username Already Taken!",
                      'status' => "409"
                  );
                } else {
                    $query_update = mysqli_query($connect,"UPDATE user SET nama='$nama', username='$username', no_hp='$no_hp' WHERE nim='$nim'");
                    if($query_update){
                         $data =array(
                             'message' => "Update Success!",
                             'status' => "200"
                         );
                     }
                     else {
                         $data =array(
                             'message' => "Update Failed!",
                             'status' => "404"
                         ); 
                     }
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