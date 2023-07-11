<?php
  //while-loop
   $i = 1;

   while ($i <= 5){
    echo "Hello while $i time."."<br>";
    $i++;
   }

   //do-whil-loop
   $i = 0;
   do{
    $i++;
    echo "php do ..while $i times"."<br>";
   }
   while($i <= 5);

   //for-loop
   for ($i=1; $i <= 5 ; $i++ ){
    echo "php for loop print $i times"."<br>";
   }
   //foreach loop
   $salary[]=2000;
   $salary[]=3000;
   $salary[]=5000; 

   foreach($salary as $value){
    echo "Salaray : $value<br>";
   }
?>