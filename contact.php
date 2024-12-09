<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Email recipient (change this to your email)
    $to = "thwtchdctr@gmail.com";
    $headers = "From: " . $email . "\r\n" .
               "Reply-To: " . $email . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    $mail_subject = "Contact Form: " . $subject;
    $mail_body = "You have received a new message from your website contact form:\n\n" .
                 "Name: " . $name . "\n" .
                 "Email: " . $email . "\n" .
                 "Subject: " . $subject . "\n\n" .
                 "Message:\n" . $message;

    // Sending email
    if (mail($to, $mail_subject, $mail_body, $headers)) {
        echo "<p>Your message has been sent successfully!</p>";
    } else {
        echo "<p>There was an error sending your message. Please try again later.</p>";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact - Ember Realm</title>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- JavaScript to include the header -->
    <div id="header-container"></div> <!-- Placeholder for header -->
    <!-- Contact Form Section -->
    <section class="container">
        <h2>Contact Us</h2>
        <form action="contact.php" method="POST">
            <label for="name">Your Name:</label>
            <input type="text" id="name" name="name" required>

            <label for="email">Your Email:</label>
            <input type="email" id="email" name="email" required>

            <label for="subject">Subject:</label>
            <input type="text" id="subject" name="subject" required>

            <label for="message">Message:</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit">Send Message</button>
        </form>
    </section>

    <!-- JavaScript to load the header -->
    <script src="loadHeader.js"></script>
</body>
</html>