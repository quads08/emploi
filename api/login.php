<?php
include('config.php');
$postdata = file_get_contents("php://input");
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $mail =   $request->email;
		$pas =    $request->password; 
		$sql = " select  *  from admin where email = '$mail'  
				 and  password = '$pas'  ";
		/*
		$log  = "E-mail: ".$mail.' - Password : '.$pas ;
        "-------------------------".PHP_EOL;
		
		file_put_contents('./verif.txt', $log, FILE_APPEND);*/
	 
		
        $result = mysqli_query($conn, $sql);
		if ($result->num_rows > 0) {	
			$row = mysqli_fetch_assoc($result);  
			$tab[] = array( 'ROLE'=>"ADMIN", "NOM"=>$row['nom'], "PRENOM"=>$row['prenom'], "ID"=>$row['id'] ) ; 
			print(json_encode($tab)); 
		}else { 
			$sql2 = " select  *  from reclamant where email = '$mail'  
				 and  password = '$pas'  ";
			$result2 = mysqli_query($conn, $sql2);
			if ($result2->num_rows > 0) {	
				$row2 = mysqli_fetch_assoc($result2);  
				$tab1[] = array( 'ROLE'=>$row2['role'], "NOM"=>$row2['nom'], "PRENOM"=>$row2['prenom'], "ID"=>$row2['code'] ) ; 
				print(json_encode($tab1)); 
			}else { 	 
				echo json_encode(array( 'RESPONSE'=>'ERREUR' ));
			}
		}
		
    }
    else { 
		echo json_encode(array( 'RESPONSE'=>'Erreur reception parametres' ));
    }
 
?>