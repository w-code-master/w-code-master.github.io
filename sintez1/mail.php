<?php
require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$mail->isSMTP();                      // Set mailer to use SMTP
$mail->Host = 'smtp.yandex.ru'; 
$mail->SMTPAuth = true;
$mail->Username = 'Sintez.digital@yandex.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'bsuevzlyxvosvrgd'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;
$mail->isHTML(true);
$mail->setFrom('Sintez.digital@yandex.ru'); // от кого будет уходить письмо?


$mail->addAddress('Sintez.digital@ya.ru');     // Кому будет уходить письмо 


$c = true;
$mail->Subject = 'Заявка с Sintez Digital';


	foreach ( $_POST as $key => $value ) {
		if ( $value != "" && !is_array($value)) {
			$message .= "
			" . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
				<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
			</tr>
			";
		}
	}

$mail->Body = "<table style='width: 100%;'>$message</table>";

$mail->AltBody = '';

if (!$mail->send()) {
	echo 'Error';
	echo $mail->ErrorInfo;
} else {
}
?>
