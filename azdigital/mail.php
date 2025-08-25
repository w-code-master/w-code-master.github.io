<?php

if($_POST['БОТ'] != "") {
	// Ничего не делаем если бот
} else {

	require_once('phpmailer/PHPMailerAutoload.php');
	$mail = new PHPMailer;
	$mail->CharSet = 'utf-8';

	$mail->isSMTP();     // Set mailer to use SMTP
	$mail->Host = 'smtp.mail.ru'; 
	$mail->SMTPAuth = true;
	$mail->Username = 'azdigital.smtp@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
	$mail->Password = 'A2OIUxueoa3='; // Ваш пароль от почты с которой будут отправляться письма
	$mail->SMTPSecure = 'ssl';
	$mail->Port = 465;
	$mail->isHTML(true);

	$mail->setFrom('azdigital.smtp@mail.ru'); // от кого будет уходить письмо?

	$mail->addAddress('Azbuka.digital@ya.ru');     // Кому будет уходить письмо 

	$mail->addAttachment($_FILES['upload']['tmp_name'], $_FILES['upload']['name']);

	$c = true;
	$mail->Subject = 'Заявка с сайта azdigital site';


	foreach ( $_POST as $key => $value ) {
		if ( $value != "" && !is_array($value)) {
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
		echo 'Error';
		echo $mail->ErrorInfo;
	} else {
		header('location: https://azdigital.site/thanks.html');
		// header('location: /index.html');
	}


}