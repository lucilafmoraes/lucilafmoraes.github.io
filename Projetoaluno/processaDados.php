<?php
include("funcoes.php");
if(isset($_POST["nome"]) && isset($_POST["n1"]) && isset($_POST["n2"]))
{
    $nome=$_POST["nome"];
    $n1=floatval($_POST["n1"]);
    $n2=floatval($_POST["n2"]);
    $grau="";
    $media=media($n1, $n2);

    grau($media, $grau);
    echo "nome: ${nome} <br>";
    echo "média: ${media} <br>";
    echo "grau: ${grau} <br>"; 
}
else{
    echo "Deu ruim";
}
?>