<?php

$token = "1425581484:AAFOIM1EmvtWttMqxJDQFAR1PiE8zOsr8xY";
$chat_id = "706098925";

$c = true;

foreach ($_POST as $key => $value) {
    if ($value != "") {
        $txt .= "<b>".$key."</b> ".$value."%0A";
    }
}
  
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r"); 

if ($sendToTelegram) {

} else {
    echo "Error";
}