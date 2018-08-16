<?php
    require('./cros.php');
    setMethod('POST');
    
    unset($_SESSION['username']);
    echo json_encode([
        'status' => 'OK',
    ]);
?>