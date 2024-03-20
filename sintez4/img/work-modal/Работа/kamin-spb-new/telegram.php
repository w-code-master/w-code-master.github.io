<?php
/* https://api.telegram.org/bot598343425:AAFbHOmQrct_99vpIYdyPpxDZ9TExB-TECM/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */ 
// api.telegram.org/bot1137498967:AAFROX_WptacAOyyr30kW7lGHEO61Mgdzyw/getUpdates


    $info = $_POST['info'];

    $phone = $_POST['phone'];



    $name = $_POST['name']; if ($name == '') { $name = '-'; };
    $email = $_POST['email']; if ($email == '') { $email = '-'; };


// if(isset($_POST['question2'])) {
    $question1 = $_POST['question1']; if ($question1 == '') { $question1 = '-'; };
    $question2 = $_POST['question2']; if ($question2 == '') { $question2 = '-'; };
    $question3 = $_POST['question3']; if ($question3 == '') { $question3 = '-'; };
    $question4 = $_POST['question4']; if ($question4 == '') { $question4 = '-'; };
    $question5 = $_POST['question5']; if ($question5 == '') { $question5 = '-'; };
    $question6 = $_POST['question6']; if ($question6 == '') { $question6 = '-'; };
    $question7 = $_POST['question7']; if ($question7 == '') { $question7 = '-'; };
    $question8 = $_POST['question8']; if ($question8 == '') { $question8 = '-'; };
    $question9 = $_POST['question9']; if ($question9 == '') { $question9 = '-'; };
    $question10 = $_POST['question10']; if ($question10 == '') { $question10 = '-'; };
    $question11 = $_POST['question11']; if ($question11 == '') { $question11 = '-'; };
    $question12 = $_POST['question12']; if ($question12 == '') { $question12 = '-'; };
    $question13 = $_POST['question13']; if ($question13 == '') { $question13 = '-'; };
    $question14 = $_POST['question14']; if ($question14 == '') { $question14 = '-'; };
    $question15 = $_POST['question15']; if ($question15 == '') { $question15 = '-'; };
    // } else {
//     $question1 = $question2 = $question3 = $question4 = $question5 = $question6 = $question7 = $question8 = $question9 = $question10 = '-';
// }
// UTM
// if(isset($_POST['utm_source'])) {
    $utm_source = $_POST['utm_source']; if ($utm_source == '') { $utm_source = '-'; };
// } else {
//     $utm_source = '-';
// }
// if(isset($_POST['utm_medium'])) {
    $utm_medium = $_POST['utm_medium']; if ($utm_medium == '') { $utm_medium = '-'; };
// } else {
//     $utm_medium = '-';
// }
// if(isset($_POST['utm_term'])) {
    $utm_term = $_POST['utm_term']; if ($utm_term == '') { $utm_term = '-'; };
// } else {
//     $utm_term = '-';
// }
// if(isset($_POST['utm_content'])) {
    $utm_content = $_POST['utm_content']; if ($utm_content == '') { $utm_content = '-'; };
// } else {
//     $utm_content = '-';
// }
// if(isset($_POST['utm_campaign'])) {
    $utm_campaign = $_POST['utm_campaign']; if ($utm_campaign == '') { $utm_campaign = '-'; };
// } else {
//     $utm_campaign = '-';
// }



$token = "1137498967:AAFROX_WptacAOyyr30kW7lGHEO61Mgdzyw";
$chat_id = "-426514120";

$arr = array(
    'Имя: ' => $name,
    'Телефон: ' => '+'.$phone,
    'Форма: ' => $info,
    
    'Тип отапливаемого помещения? ' => $question1,
    'Проживание в доме' => $question2,
    'Площадь отапливаемого помещения ' => $question3,
    'В какой бюджет вы хотели бы уложиться? ' => $question4,
    'Тип оборудования ' => $question5,
    'Удобное время для звонка ' => $question13,
    'Способ топки печи ' => $question6,
    'Объём парного помещения м3 ' => $question7,
    'Способ нагрева воды ' => $question8,
    'Объём нагреваемой воды ' => $question9,
    'В какой бюджет вы хотели бы уложиться? ' => $question10,
    'Удобное время для звонка ' => $question14,
    'Объём отапливаемого помещения м3 ' => $question11,
    'Тип отопления ' => $question12,
    'Удобное время для звонка ' => $question15,
    'utm_source' => $utm_source,
    'utm_medium' => $utm_medium,
    'utm_term' => $utm_term,
    'utm_content' => $utm_content,
    'utm_campaign' => $utm_campaign,

);


foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
  };
  
  $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
  
  if ($sendToTelegram) {
    header('Location: index.html');
  } else {
    echo "Error";
  }
?>