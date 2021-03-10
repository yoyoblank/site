<?php

$name1 = $_POST['name1'];
$text1 = $_POST['text1'];
$name2 = $_POST['name2'];
$text2 = $_POST['text2'];
$name3 = $_POST['name3'];
$text3 = $_POST['text3'];
$name4 = $_POST['name4'];
$text4 = $_POST['text4'];
$name5 = $_POST['name5'];
$text5 = $_POST['text5'];
$name6 = $_POST['name6'];
$text6 = $_POST['text6'];
$name7 = $_POST['name7'];
$text7 = $_POST['text7'];
$phone = $_POST['phone1'];

$theme = 'Заказ';
$to = 'porse19978777@mail.ru';
$message = "<html><body>
НОВЫЙ ЗАКАЗ <br>
".$name1"    -    ".$text1" <br>
".$name2"    -    ".$text2" <br>
".$name3"    -    ".$text3" <br>
".$name4"    -    ".$text4" <br>
".$name5"    -    ".$text5" <br>
".$name6"    -    ".$text6" <br>
".$name7"    -    ".$text7" <br>
Номер телефона для связи   -    ".$phone" <br>


</body></html>";
$headers = "From: info@fastboosters.ru \r\n";

$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
mail($to,$theme,$message,$headers);

?>