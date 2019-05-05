<?php

// Read JSON file
$list = file_get_contents('data.json');
//Decode JSON
$list = json_decode($list, true);

// Read JSON file
$guardados = file_get_contents('guardar.json');
//Decode JSON
$guardados = json_decode($guardados, true);
$elemento_guardado = false;

for ($i=0; $i < count($list); $i++) { 
    $element = $list[$i];

    if($element[$id] === intval($_POST['id'])) {
        for ($x=0; $x < count($guardados); $x++) { 
            $guardado = $guardados[$x];
            if ($guardado['id'] === $element['id']) {
                $elemento_guardado = true;
            }
        }

        if(!$elemento_guardado) {
            $guardados[] = $element;
            $to_save = fopen('guardar.json', 'w');
            $to_save.write(json_encode($guardados));
            $to_save.close();
            echo json_encode(true);
            break;
        }
    }
}

echo json_encode(false);
