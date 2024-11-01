<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);

try {
    // Настройки SMTP
    $mail->isSMTP();
    $mail->Host = 'smtp.hostinger.com'; // Замените на адрес SMTP-сервера
    $mail->SMTPAuth = true;
    $mail->Username = 'naprawa-okularow@naprawa-okularow.online'; // Ваш email
    $mail->Password = '+Jokerdfktn93'; // Ваш пароль
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // Включаем шифрование
    $mail->Port = 465; // Порт

    // Получатели
    $mail->setFrom('naprawa-okularow@naprawa-okularow.online', 'Имя отправителя');
    $mail->addAddress('henkerofficial@gmail.com', 'Имя получателя'); // Добавляем получателя
    $mail->addReplyTo('naprawa-okularow@naprawa-okularow.online', 'Имя для ответа');
    
    $mail->CharSet = 'UTF-8';

    // Содержимое письма
    $mail->isHTML(true); // Устанавливаем формат HTML
    $mail->Subject = 'Тестовое письмо';
    $mail->Body    = 'Это тестовое письмо улялляя Анжела.';
    $mail->AltBody = 'Это тестовое письмо улялял Джуджунчик.';

    $mail->send();
    echo 'Письмо отправлено!';
} catch (Exception $e) {
    echo "Письмо не может быть отправлено. Ошибка: {$mail->ErrorInfo}";
}
