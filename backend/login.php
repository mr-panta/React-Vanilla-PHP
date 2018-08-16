<?php
    require('./cros.php');
    setMethod('POST');
    
    $req = json_decode(file_get_contents("php://input"));
    
    if(isset($req->username)) {
        $_SESSION['username'] = $req->username;
        echo json_encode([
            'status' => 'OK',
        ]);
    }
?>