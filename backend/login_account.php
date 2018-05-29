<?php
	include 'db_connect.php';
	$postdata = file_get_contents("php://input");
	$username = "";
	$pw = "";

	if(isset($postdata)) {
		$request = json_decode($postdata);
		$username = $request->username;
		$pw = $request->pw;

		//cek apakah json berisi
		if($request) {
			$loginreq = mysqli_query($connect,"SELECT nim, nama, username, email, no_hp  FROM user WHERE (username = '$username' && pw = '$pw') ");
			if($loginreq -> num_rows === 1){
				$row=mysqli_fetch_assoc($loginreq);
				$data =array(
                     'message' => "Login Success!",
                     'data' => $row,
                     'status' => "200"
                 );
             }
             else {
                 $data =array(
                     'message' => "Login Failed!",
                     'status' => "404"
                 ); 
            }
		}else{
			$data =array(
                'message' => "No Data!",
                'status' => "503"
            ); 
		}

		echo json_encode($data);
	}
?>