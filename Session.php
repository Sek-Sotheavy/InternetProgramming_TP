<?php
   session_start();

   //session store
   $_SESSION["username"] = "Jeffieya";
   $_SESSION["email"] = "jeffie@gmail.com";

   //retriev session data
   echo $_SESSION["username"];
   echo "<br>";
   echo $_SESSION["email"];
   ?>