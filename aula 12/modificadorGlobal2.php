<?php
function testaGlobal(){
    $GLOBALS ['valor'] += 1;
    $GLOBALS['res'] += 1;
    echo 'Valor (dentro da função): '.$GLOBALS['valor'].', Resultado (dentro da função): '.$GLOBALS['res'].'<br />';
}

$valor = 100;
$res = 10 * $valor;
echo 'Valor (antes da função): '.$valor.', Resultado (antes da função): '.$res.'<br />';
testaGlobal();
echo 'Valor (depois da função): '.$valor.', Resultado (depois da função): '.$res.'<br />';
?>