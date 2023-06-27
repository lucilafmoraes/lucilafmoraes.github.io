<?php
function teste() {
    $z=5;
    echo "Durante a execução da função: $z <br />";
}

$z = 3;
echo "Antes da execução da função: $z <br />"; //VAI IMPRIMIR 5
teste();    //VAI IMPRIMIR 5
echo "Depois da execução da função: $z<br />"; //VAI IMPRIMIR 3
?>