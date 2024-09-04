<?php
$servername = "localhost";
$username = "root"; // padrão do XAMPP
$password = ""; // padrão do XAMPP
$dbname = "feira_facil";

// Cria a conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}
?>
