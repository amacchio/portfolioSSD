<?php $name = $_POST['name'];
2
$email = $_POST['email'];
3
$message = $_POST['message'];
4
$formcontent="From: $name \n Message: $message";
5
$recipient = "emailaddress@here.com";
6
$subject = "Contact Form";
7
$mailheader = "From: $email \r\n";
8
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
9
echo "Thank You!";
10
?>
