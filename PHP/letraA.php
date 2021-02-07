<?php

function cuentaLetraA ($string1){
  $var = substr_count( strtolower($string1), 'a');
  echo $var;
}


cuentaLetraA($_GET['palabra']);
