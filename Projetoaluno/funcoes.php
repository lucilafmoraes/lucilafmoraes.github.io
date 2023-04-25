<?php
    function media(float $nota1, float $nota2):float {
        $media=($nota1+$nota2)/2;
        return $media;
    }
    function grau(float $media, string &$grau):void {
        if($media >8)
        $grau='A';
        elseif($media >=6)
        $grau='B';
        elseif($media >=4)
        $grau='C';
        elseif($media >=2)
        $grau='D';
        else
        $grau='E';
    }
?>