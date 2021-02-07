<?php

function reemplazar ($fichero, $ficheroNuevo, $palabra, $sustituir){
  $descriptor = fopen($fichero, "r+");
  $nuevo = fopen($ficheroNuevo, 'w+');
  while (($contenido = fgets($descriptor)) !== false){
    $cambio = str_replace($palabra, $sustituir, $contenido);
    fwrite($nuevo, $cambio);
  }
}

reemplazar('quijote.txt', 'archivoNuevo.txt', 'molino', 'morty');