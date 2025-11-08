 
<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    // Do something with the form data (e.g. save it to a database)
    // ...
    // Then display the form data on the page
    echo "<pre>";
    echo "Name: " . $name . "\n";
    echo "Email: " . $email . "\n";
    echo "</pre>";
}
?>