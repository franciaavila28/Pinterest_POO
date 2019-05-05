<?php

// Read JSON file
$json = file_get_contents('data.json');
//Decode JSON
$list = json_decode($json, true);

for ($i=0; $i < count($list); $i++) {
    $element = $list[$i];
    if ($element['id'] === intval($_GET['id'])) {
        echo json_encode($element);
        break;
    }
}