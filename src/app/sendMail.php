<?php

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): 
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case("POST"): 
        header("Access-Control-Allow-Origin: *");
        $json = file_get_contents('php://input');
        $params = json_decode($json);

        if (!$params) {
            http_response_code(400);
            exit;
        }

        $email = $params->email;
        $name = $params->name;
        $message_text = $params->message;

        $recipient = 'joshuaauerbach20@gmail.com';  
        $subject = "Kontaktanfrage von <$email>";
        $full_message = "Name: " . $name . "<br>Nachricht: " . $message_text;

        $headers   = array();
        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'Content-type: text/html; charset=utf-8';

        $from_email = "info@joshuaauerbach.de"; 
        $headers[] = "From: " . $from_email;

        $success = mail($recipient, $subject, $full_message, implode("\r\n", $headers), "-f " . $from_email);

        if ($success) {
            http_response_code(200);
            echo "Mail sent";
        } else {
            http_response_code(500);
            echo "Mail failed";
        }
        break;
    default:
        header("Allow: POST", true, 405);
        exit;
} 
?>