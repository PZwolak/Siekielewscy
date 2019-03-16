<?php
$to      = 'siekielewscy@gmail.com';
$name    = $_POST['name'];
$email   = $_POST['email'];
$sub   = $_POST['number'];
$subject = 'Nowy e-mail od ' . $name . ' (' . $email . ') o nr tel:' . $sub . '.';
$message = $_POST['message'];
$headers = 'From: ' . $name . ' (' . $email . ')';
$headers .= 'Content-Type: text/html; charset=utf-8';
mail($to, $subject, $message, $headers, $sub);
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="css/style.css">
  <title>Wiadomość wysłana</title>
</head>

<body>
  <header>
    <div class="hi">
      <p>wiadomość wysłana!</p>
      <a href="kontakt.html"><button>Wróć do strony głównej</button></a>
    </div>
  </header>
</body>

</html>
