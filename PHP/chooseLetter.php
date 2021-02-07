<?php

function cuentaLetraA ($texto , $letra){
  $var = strtolower($texto);
  $var = substr_count($var, $letra);
  echo "El texto $texto tiene $var veces la letra $letra";
}

$texto = $_GET['palabra'];
$letra = $_GET['letra'];

cuentaLetraA($texto, $letra);