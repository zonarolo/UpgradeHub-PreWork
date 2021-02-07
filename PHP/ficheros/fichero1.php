<?php

$palabra = $_GET['palabra'];
$num = 0;
$texto = fopen("quijote.txt", 'r');

while (($contenido = fgets($texto)) !== false) {
    $contador = substr_count(strtolower($contenido), strtolower($palabra));

    $num += $contador;
}

fclose($texto);

echo "La palabra <b>$palabra</b> se ha encontrado <b>$num</b> veces.";