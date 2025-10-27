<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    $to = "gatopontocaoclinicavet@gmail.com"; // Substitua pelo seu e-mail
    $subject = "Nova mensagem do site";
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "Content-Type: text/html; charset=UTF-8";

    $body = "
        <h2>Nova mensagem do formulário de contato</h2>
        <p><strong>Nome:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Mensagem:</strong><br>$message</p>
    ";

    if (mail($to, $subject, $body, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
} else {
    echo "Acesso negado!";
}
?>
