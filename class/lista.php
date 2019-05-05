<?php

// Read JSON file
$json = file_get_contents('data.json');
//Decode JSON
$list = json_decode($json, true);

echo json_encode($list);
