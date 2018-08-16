<?php
    require('./cros.php');
    setMethod('GET');

    if(isset($_SESSION['username'])) {
        echo json_encode([
            'username' => $_SESSION['username'],
            'is_login' => true,
        ]);
    } else {
        echo json_encode([
            'username' => "",
            'is_login' => false,
        ]);
    }
?>