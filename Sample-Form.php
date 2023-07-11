<?php
   if(isset($_POST['Submit'])){
    $emp_name = trim($_POST["emp_name"]);
    $emp_number = trim($_POST["emp_number"]);
    $emp_email = trim($_POST["emp_email"]);

    if($emp_name == ""){
        $errorMsg = "error : You didn't enter the name";
        $code = "1";
    }elseif($emp_number == ""){
        $errorMsg = "error : Please  enter the numer.";
        $code = "2";
    }
    //Check if the number field is numeric
    elseif(is_numeric(trim($emp_number)) == false){
        $errorMsg = "error : Please  enter numeric value.";
        $code = "2";
    }elseif(strlen($emp_number) < 10){
        $errorMsg = "error : Numer should be ten digits.";
        $code = "2";
    }
    //check if email field is empty
    elseif($emp_email == ""){
        $errorMsg = "error : you didn't enter the email.";
        $code = "3";
    }//check for valid email
    elseif(!preg_match("/^[_\.0-9a-zA-Z]+@([0-9a-zA-Z][0-9a-zA-Z-]+\.)+[a-zA-Z]{2,6}$/i",$emp_email)){
        $errorMsg = "error : You didn't enter a valid email..";
        $code = "3";
    }else{
        echo "success";
        //final code will execute here.
    }
   }
?>