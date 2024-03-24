<?php
require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$mail->isSMTP();                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';
$mail->SMTPAuth = true;
$mail->Username = 'moscow-kithcen-smtp@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'Mm123698741'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;
$mail->isHTML(true);


$mail->setFrom('moscow-kithcen-smtp@mail.ru');  // от кого будет уходить письмо?


$mail->addAddress('Azbuka.digital@ya.ru');     // Кому будет уходить письмо 
$mail->addAddress('tokmaganbet@gmail.com');     // Кому будет уходить письмо 


$c = true;
$mail->Subject = 'Заявка с квиза kitchen Area';


	foreach ( $_POST as $key => $value ) {
		if ( $value != "" && !is_array($value) && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
			$message .= "
			" . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
				<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
			</tr>
			";
		}
		if (is_array($value)) {
			foreach ( $value as $key2 => $value2 ) {
				$message .= "
				" . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
					<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
					<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value2</td>
				</tr>
				";
			}
		}
	}

$mail->Body = "<table style='width: 100%;'>$message</table>";

$mail->AltBody = '';

if (!$mail->send()) {
	echo 'Error Mail';
} else {
	header('Location: https://azbuka-digital.ru/kitchen_area/thanks.html');
}
