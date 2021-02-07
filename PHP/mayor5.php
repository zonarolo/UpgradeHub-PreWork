<?php

$palabras = ["lunes", "mariposa", "sol", "acelerador", "aceituna", "palo"];

foreach ($palabras as $palabra) {
  if (strlen($palabra) > 5 ) {
    $contador += 1;
    echo $palabra . " ";
  }
}

echo "<br> El numero total de palabras mayores a 5 es: $contador";

