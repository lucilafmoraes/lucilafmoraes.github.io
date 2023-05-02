<?php

function retornaImc(float $peso, float $alt):float
{
    //Duas opções... return + comando, ou comando + return comando
    return $imc = ($peso / $alt**2);
  

}
function obtemGrau($imc):string
{
    if ($imc<18) 
    {
        return "Grau de obesidade: peso baixo";
    }
    elseif ($imc<25)
    {
        return "Grau de obesidade: peso adequado :)";
    }
    elseif ($imc<30)
    {
        return "Grau de obesidade: sobrepeso";
    }
    elseif ($imc<35)
    {
        return "Grau de obesidade: obesidade grau 1";
    }
    elseif ($imc<40)
    { 
        return "Grau de obesidade: obesidade grau 2";
    }
    else
    {
        return "Obesidade extrema";
    }
}
?>