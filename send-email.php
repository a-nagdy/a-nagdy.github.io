<?//php 

// $fName = $_POST["fname"];
// $lname = $_POST["lname"];
// $email = $_POST["email"];
// $phone = $_POST["phone"];


// require "vendor/autoload.php";

// use PHPMailer\PHPMailer\PHPMailer;
// use PHPMailer\PHPMailer\Exception;


// $mail = new Phpmailer(true);

// try {
//     $mail->SMTPOptions = array(
//         'ssl' => array(
//         'verify_peer' => false,
//         'verify_peer_name' => false,
//         'allow_self_signed' => true
//         )
//         );
//     //Server settings
//     $mail->SMTPDebug = 1;                      //Enable verbose debug output
//     $mail->isSMTP();                                            //Send using SMTP
//     $mail->Host       = "imap.worldposta.com";                     //Set the SMTP server to send through
//     $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
//     $mail->Username   = 'Developers@2Bcart.com';                     //SMTP username
//     $mail->Password   = '2bcart1';                               //SMTP password
//     $mail->SMTPSecure = "tls";            //Enable implicit TLS encryption
//     $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = Phpmailer::ENCRYPTION_STARTTLS`

//     //Recipients
//     $mail->setFrom($email, 'Mailer');
//     $mail->addAddress('ahmednagdy165@gmail.com', 'Joe User');     //Add a recipient
//     $mail->addAddress($email);               //Name is optional
//     $mail->addReplyTo('info@example.com', 'Information');
//     $mail->addCC('cc@example.com');
//     $mail->addBCC('bcc@example.com');


//     //Content
//     $mail->isHTML(true);                                  //Set email format to HTML
//     $mail->Subject = 'Here is the subject';
//     $mail->Body    = 'This is the HTML message body <b>in bold!</b>';
//     $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

//     $mail->send();
//     echo 'Message has been sent';
// } catch (Exception $e) {
//     echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
// }

// echo $mail;


// header("Location: index.html");

// echo "Thanks";

