<?php

$from = 'info@iko39.com'; //от кого
$to = 'createsite@mail.ru'; //кому
$subject = 'Письмо с сайта Rockstart'; //тема письма

if ($_POST['step'] == 2) {
    if (empty($_POST['step_1_1'])) {
        $json['error'] = 'Вы не выбрали сферу бизнеса!';
        echo json_encode($json);
        exit;
    }

    if (empty($_POST['step_1_2'])) {
        $json['error'] = 'Вы не указали ссылку на сайт и/или аккаунт в соцсетях!';
        echo json_encode($json);
        exit;
    }

    if ($_POST['step_1_1']) {
        setcookie('step_1_1', $_POST['step_1_1'], time() + 60 * 60 * 24 * 1, '/');
    } else {
        setcookie('step_1_1', '', 0, '/');
    }
    if ($_POST['step_1_1']) {
        setcookie('step_1_2', $_POST['step_1_2'], time() + 60 * 60 * 24 * 1, '/');
    } else {
        setcookie('step_1_2', '', 0, '/');
    }

    $ans = array('error' => '', 'step' => '2');
    echo json_encode($ans);
} else if ($_POST['step'] == 3) {
    if (empty($_POST['step_2_1']) && empty($_POST['step_2_2']) && empty($_POST['step_2_3']) && empty($_POST['step_2_4'])) {
        $json['error'] = 'Выберите минимум 1 пункт!';
        echo json_encode($json);
        exit;
    }

    if ($_POST['step_2_1']) {
        setcookie('step_2_1', $_POST['step_2_1'], time() + 60 * 60 * 24 * 1, '/');
    } else {
        setcookie('step_2_1', '', 0, '/');
    }
    if ($_POST['step_2_2']) {
        setcookie('step_2_2', $_POST['step_2_2'], time() + 60 * 60 * 24 * 1, '/');
    } else {
        setcookie('step_2_2', '', 0, '/');
    }
    if ($_POST['step_2_3']) {
        setcookie('step_2_3', $_POST['step_2_3'], time() + 60 * 60 * 24 * 1, '/');
    } else {
        setcookie('step_2_3', '', 0, '/');
    }
    if ($_POST['step_2_4']) {
        setcookie('step_2_4', $_POST['step_2_4'], time() + 60 * 60 * 24 * 1, '/');
    } else {
        setcookie('step_2_4', '', 0, '/');
    }

    $ans = array('error' => '', 'step' => '3');
    echo json_encode($ans);
} else if ($_POST['step'] == 4) {
    if (empty($_POST['step_3_1']) && empty($_POST['step_3_2']) && empty($_POST['step_3_3'])) {
        $json['error'] = 'Выберите минимум 1 пункт!';
        echo json_encode($json);
        exit;
    }

    if ($_POST['step_3_1']) {
        setcookie('step_3_1', $_POST['step_3_1'], time() + 60 * 60 * 24 * 1, '/');
    } else {
        setcookie('step_3_1', '', 0, '/');
    }
    if ($_POST['step_3_2']) {
        setcookie('step_3_2', $_POST['step_3_2'], time() + 60 * 60 * 24 * 1, '/');
    } else {
        setcookie('step_3_2', '', 0, '/');
    }
    if ($_POST['step_3_3']) {
        setcookie('step_3_3', $_POST['step_3_3'], time() + 60 * 60 * 24 * 1, '/');
    } else {
        setcookie('step_3_3', '', 0, '/');
    }

    $ans = array('error' => '', 'step' => '4');
    echo json_encode($ans);
} else if ($_POST['step'] == 5) {
    if (empty($_POST['step_4_1']) && empty($_POST['step_4_2']) && empty($_POST['step_4_3'])) {
        $json['error'] = 'Выберите минимум 1 пункт!';
        echo json_encode($json);
        exit;
    }

    if ($_POST['step_4_1']) {
        setcookie('step_4_1', $_POST['step_4_1'], time() + 60 * 60 * 24 * 1, '/');
    } else {
        setcookie('step_4_1', '', 0, '/');
    }
    if ($_POST['step_4_2']) {
        setcookie('step_4_2', $_POST['step_4_2'], time() + 60 * 60 * 24 * 1, '/');
    } else {
        setcookie('step_4_2', '', 0, '/');
    }
    if ($_POST['step_4_3']) {
        setcookie('step_4_3', $_POST['step_4_3'], time() + 60 * 60 * 24 * 1, '/');
    } else {
        setcookie('step_4_3', '', 0, '/');
    }

    $ans = array('error' => '', 'step' => '5');
    echo json_encode($ans);
} else if ($_POST['step'] == 6) {
    if (empty($_POST['phone'])) {
        $json['error'] = 'Вы не указали номер телефона!';
        echo json_encode($json);
        exit;
    }   

    $subj = "=?UTF-8?B?" . base64_encode($subject) . "?=";
    $head = '';
    $head .= "From: <" . $from . ">\r\n";
    $head .= "Envelope-From: " . $from . "\r\n";
    $head .= "Errors-To: " . $from . "\r\n";
    $head .= "X-Mailer: PHPMail Tool\r\n";
    $head .= "Reply-To: " . $from . "\r\n";
    $head .= "Mime-Version: 1.0\r\n";
    $head .= "Content-Type: text/html; charset=\"UTF-8\"\r\n";

    if ($_COOKIE['step_1_1']) {
        $body .= 'Сфера бизнеса - ' . $_COOKIE['step_1_1'] . '<br/>';
    }
    if ($_COOKIE['step_1_2']) {
        $body .= 'Ссылка на сайт - ' . $_COOKIE['step_1_2'] . '<br/>';
    }

    $body .= 'Задачи:<br/>';
    if ($_COOKIE['step_2_1']) {
        $body .= $_COOKIE['step_2_1'] . '<br/>';
    }
    if ($_COOKIE['step_2_2']) {
        $body .= $_COOKIE['step_2_2'] . '<br/>';
    }
    if ($_COOKIE['step_2_3']) {
        $body .= $_COOKIE['step_2_3'] . '<br/>';
    }
    if ($_COOKIE['step_2_4']) {
        $body .= $_COOKIE['step_2_4'] . '<br/>';
    }

    $body .= 'Бюджет на рекламу:<br/>';
    if ($_COOKIE['step_3_1']) {
        $body .= $_COOKIE['step_3_1'] . '<br/>';
    }
    if ($_COOKIE['step_3_2']) {
        $body .= $_COOKIE['step_3_2'] . '<br/>';
    }
    if ($_COOKIE['step_3_3']) {
        $body .= $_COOKIE['step_3_3'] . '<br/>';
    }

    $body .= 'Чего Вы хотите в целом:<br/>';
    if ($_COOKIE['step_4_1']) {
        $body .= $_COOKIE['step_4_1'] . '<br/>';
    }
    if ($_COOKIE['step_4_2']) {
        $body .= $_COOKIE['step_4_2'] . '<br/>';
    }
    if ($_COOKIE['step_4_3']) {
        $body .= $_COOKIE['step_4_3'] . '<br/>';
    }

    if ($_POST['phone']) {
        $body .= 'Номер телефона - ' . $_POST['phone'];
    }

    mail($to, $subj, $body, $head);

    $ans = array('error' => '', 'step' => '6');
    echo json_encode($ans);
}
    