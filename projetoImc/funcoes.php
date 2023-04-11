<?php
    function obtemImc(float $pes,float $alt):float{
        $imc = $pes/($alt*$alt);
        return $imc;
    }

    function preencheClassificacao(float $peso, string &$classifica):void{
        if($imc<18.5)
            $classifica = "Peso mínimo";
    }
?>