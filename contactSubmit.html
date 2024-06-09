<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);
try {
    //Server settings
    // $mail->SMTPDebug = 0;                     //Enable verbose debug output
    // $mail->isSMTP();                                            //Send using SMTP
    // $mail->Host = 'smtp.mailtrap.io';
    // $mail->SMTPAuth = true;
    // $mail->Port = 2525;
    // $mail->Username = '6c23bd40a45f3b';
    // $mail->Password = '5c32326d346070';
   
    $mail->IsSMTP(); // enable SMTP
    $mail->SMTPDebug = 0; // debugging: 1 = errors and messages, 2 = messages only
    $mail->SMTPAuth = true; // authentication enabled
    $mail->SMTPSecure = 'tls'; // secure transfer enabled REQUIRED for Gmail
    $mail->Host = "smtp.gmail.com";
    $mail->Port = 587; // or 587
    $mail->IsHTML(true);
    $mail->Username = "----";
    $mail->Password = "----";
    $mail->SMTPSecure = false;
    $mail->AddAddress("creatimatix@gmail.com", $_POST['fullname']);
    $mail->setFrom('creatimatix@gmail.com', $_POST['fullname']);
   
    //Content
    $mail->isHTML(false);                                  //Set email format to HTML
    $mail->Subject = 'Enquiry For Vaishnav Creation Team';
    $mail->Body   = "Vaishnav Creation Team,<br><br>
    Greeting for the day!,<br><br>
                        You have a new enquiry for your product.Please contact customer for details info.<br>
                         Fullname: ".$_POST['fullname']."<br>Contact Number: ".$_POST['number']."<br>Email Address: ".$_POST['email']."<br> Enquiry:".$_POST['message'].".";
    $mail->AltBody = "Vaishnav Creation Team,<br><br>
    Greeting for the day!,<br><br>
                        You have a new enquiry for your product.Please contact customer for details info.<br>
                         Fullname: ".$_POST['fullname']."<br>Contact Number: ".$_POST['number']."<br>Email Address: ".$_POST['email']."<br> Enquiry:".$_POST['message'].".";
    if(@$mail->send()){
      echo json_encode(['status' => true,'message' => 'Successfully mail sent.'], JSON_PRETTY_PRINT);
    }else{
      echo  json_encode(['status' => true,'message' => 'Please check email id.'], JSON_PRETTY_PRINT);
    }
    
} catch (Exception $e) {
   echo json_encode(['status' => false,'message' => 'Something went wrong, Please try again.'], JSON_PRETTY_PRINT);
}