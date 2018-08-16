<?php
    header("Access-Control-Allow-Origin: http://localhost:3000");
	header("Access-Control-Allow-Credentials: true");
	header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
	header('P3P: CP="CAO PSA OUR"'); // Makes IE to support cookies
    header("Content-Type: application/json; charset=utf-8");
    session_start();

    function setMethod($method) {
        header("Access-Control-Allow-Methods: " . $method);
    }
?>