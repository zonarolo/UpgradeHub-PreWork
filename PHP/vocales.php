<?php

$palabra = $_GET['palabra'];
$palabra = strtolower($palabra);
 if (strpos($palabra, 'a') !== false){
  if (strpos($palabra, 'e') !== false){
    if (strpos($palabra, 'i') !== false){
      if (strpos($palabra, 'o') !== false){
        if (strpos($palabra, 'u') !== false){
            echo "La palabra $palabra contiene las 5 vocales";
        }else echo "La palabra $palabra no contiene las 5 vocales";
      }else echo "La palabra $palabra no contiene las 5 vocales";
    }else echo "La palabra $palabra no contiene las 5 vocales";
  }else echo "La palabra $palabra no contiene las 5 vocales";
 }else echo "La palabra $palabra no contiene las 5 vocales";


