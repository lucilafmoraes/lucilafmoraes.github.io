<?php
    require_once("funcoes.php");
    //estudar o isset
    //verifica se as informações chegaram
    if (isset($_POST["peso"]) && isset($_POST["altura"])) 
    {
        //guardar as informações em variaveis e converter se necessario
        //guardando os valores convertidos em variáveis
        $peso = (float) $_POST['peso'];
        $altura = floatval($_POST['altura']);
        //Preciso obter e guardar o imc
        $imc = retornaImc($peso, $altura);
        //Preciso obter o grau de obesidade a partir do imc
        $grauDeObesidade = obtemGrau($imc);

        echo "O valor do IMC é $imc <br>";
        echo "O grau de obesidade é {$grauDeObesidade}";

    }
    else {
        echo "erro na entrada de dados";
    }
    //acessar através do localhost... "http://localhost/ProjetoImcRec/ProcessaDados.php"

?>