<?php

$token = "5226906015:AAEbLneumfQhz0d88Vjp4I-ZkPszZ82Fcqo";
$chat_id = "-1001679681318";

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