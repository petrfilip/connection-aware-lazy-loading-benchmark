<?php

$input = file_get_contents('php://input');
$input = str_replace('.', ',', $input);
file_put_contents('database.csv',  $input. "\n", FILE_APPEND | LOCK_EX);

