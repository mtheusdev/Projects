<?php

$data = htmlspecialchars($_POST['date']);
$M1  = htmlspecialchars($_POST['M1']);
$M1_2  = htmlspecialchars($_POST['M1-2']);
$M5  = htmlspecialchars($_POST['M5']);
$M5_2  = htmlspecialchars($_POST['M5-2']);
$M15  = htmlspecialchars($_POST['M15']);
$M15_2  = htmlspecialchars($_POST['M15-2']);
$M30  = htmlspecialchars($_POST['M30']);
$M30_2  = htmlspecialchars($_POST['M30-2']);


$arquivofinal = 'premium.txt';
$arquivofinal2 = 'premium2.txt';
$file = fopen($arquivofinal, 'w');
$file2 = fopen($arquivofinal2, 'w');
$lista1 = 'LISTA 1'.PHP_EOL;
$lista2 = 'LISTA 2'.PHP_EOL;
$header = "SANCTVS DREAM TRADE PREMIUM".PHP_EOL.PHP_EOL;
$gale = 'MÁXIMO 2 MARTINGALES'.PHP_EOL.PHP_EOL;

fwrite($file2, $header);
fwrite($file, $header);

fwrite($file2, $gale);
fwrite($file, $gale);
fwrite($file, 'Data: '.$data.PHP_EOL.PHP_EOL);
fwrite($file2,'Data: '.$data.PHP_EOL.PHP_EOL);

fwrite($file2, $lista2);
fwrite($file, $lista1);

if($M1 === 'true'){
   $m1_2=file('filem1.txt');
   fwrite($file,PHP_EOL. '        SINAIS M1'.PHP_EOL.PHP_EOL);
   foreach($m1_2 as $data)
   {
      $string = explode(";",$data);
      $text = $string[0] . ";". strtolower($string[1]). ";".$string[2].":00;".$string[3];
      fwrite($file, $text);
   }
}

if($M5 === 'true'){
   $m1_2=file('filem5.txt');
   fwrite($file,PHP_EOL. '        SINAIS M5'.PHP_EOL.PHP_EOL);
   foreach($m1_2 as $data)
   {
      $string = explode(";",$data);
      $text = $string[0] . ";". strtolower($string[1]). ";".$string[2].":00;".$string[3];
      fwrite($file, $text);
   }
}

if($M15 === 'true'){
   $m1_2=file('filem15.txt');
   fwrite($file,PHP_EOL. '        SINAIS M15'.PHP_EOL.PHP_EOL);
   foreach($m1_2 as $data)
   {
      $string = explode(";",$data);
      $text = $string[0] . ";". strtolower($string[1]). ";".$string[2].":00;".$string[3];
      fwrite($file, $text);
   }
}

if($M30 === 'true'){
   $m1_2=file('filem30.txt');
   fwrite($file, PHP_EOL.'        SINAIS M30'.PHP_EOL.PHP_EOL);
   foreach($m1_2 as $data)
   {
      $string = explode(";",$data);
      $text = $string[0] . ";". strtolower($string[1]). ";".$string[2].":00;".$string[3];
      fwrite($file, $text);
   }
}

// file 2

if($M1_2 == 'true'){
   $m1=file('filem1-2.txt');
   fwrite($file2,PHP_EOL. '        SINAIS M1'.PHP_EOL.PHP_EOL);
   foreach($m1 as $data)
   {
      $string1 = explode(";",$data);
      $string2 = explode("-",$string1[0]);
      $string3 = explode("-",$string1[1]);
      $string2[1] = $string2[1] .":00";
      $stringfinal = $string2[0]. ";".strtolower($string3[0]);
      if(isset($string3[2])){ // otc no string[1]
         $stringfinal =  $stringfinal ."-".strtolower($string3[1]). ";" .$string2[1] . ";".($string3[2]);
      }else{
         $stringfinal =  $stringfinal . ";" .$string2[1] . ";".($string3[1]);
      }
      fwrite($file2, $stringfinal);
   }

}

if($M5_2 === 'true'){
   $m1_2=file('filem5-2.txt');
   fwrite($file2,PHP_EOL. '        SINAIS M5'.PHP_EOL.PHP_EOL);
   foreach($m1_2 as $data)
   {
      $string1 = explode(";",$data);
      $string2 = explode("-",$string1[0]);
      $string3 = explode("-",$string1[1]);
      $string2[1] = $string2[1] .":00";
      $stringfinal = $string2[0]. ";".strtolower($string3[0]);
      if(isset($string3[2])){ // otc no string[1]
         $stringfinal =  $stringfinal ."-".strtolower($string3[1]). ";" .$string2[1] . ";".($string3[2]);
      }else{
         $stringfinal =  $stringfinal . ";" .$string2[1] . ";".($string3[1]);
      }
      fwrite($file2, $stringfinal);
   }
}

if($M15_2 === 'true'){
   $m1_2=file('filem15-2.txt');
   fwrite($file2,PHP_EOL. '        SINAIS M15'.PHP_EOL.PHP_EOL);
   foreach($m1_2 as $data)
   {
      $string1 = explode(";",$data);
      $string2 = explode("-",$string1[0]);
      $string3 = explode("-",$string1[1]);
      $string2[1] = $string2[1] .":00";
      $stringfinal = $string2[0]. ";".strtolower($string3[0]);
      if(isset($string3[2])){ // otc no string[1]
         $stringfinal =  $stringfinal ."-".strtolower($string3[1]). ";" .$string2[1] . ";".($string3[2]);
      }else{
         $stringfinal =  $stringfinal . ";" .$string2[1] . ";".($string3[1]);
      }
      fwrite($file2, $stringfinal);
   }
}

if($M30_2 === 'true'){
   $m1_2=file('filem30-2.txt');
   fwrite($file2, PHP_EOL.'        SINAIS M30'.PHP_EOL.PHP_EOL);
   foreach($m1_2 as $data)
   {
      $string1 = explode(";",$data);
      $string2 = explode("-",$string1[0]);
      $string3 = explode("-",$string1[1]);
      $string2[1] = $string2[1] .":00";
      $stringfinal = $string2[0]. ";".strtolower($string3[0]);
      if(isset($string3[2])){ // otc no string[1]
         $stringfinal =  $stringfinal ."-".strtolower($string3[1]). ";" .$string2[1] . ";".($string3[2]);
      }else{
         $stringfinal =  $stringfinal . ";" .$string2[1] . ";".($string3[1]);
      }
      fwrite($file2, $stringfinal);
   }
}

fclose($file);
fclose($file2);
?>

