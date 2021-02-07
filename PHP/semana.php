<?php

$semana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

$dia = $_GET['numero'];

echo "{$semana[$dia-1]}";