<?php
     if (isset($_POST["submitbtn"])){
        $filename = $_FILES["resume"]["name"];
        $fileSize = $_FILES["resume"]["size"] / 1024;
        $fileType = $_FILES["resume"]["type"];
        $fileTmpname = $_FILES["resume"]["tmp_name"];

        if($fileType == "application/msword"){
            if($fileSize <= 200){
                //new file name
                $random = rand(1111, 9999);
                $newfileName = $random . $filename;
                //file uplaod path
                $uploadPath = "testUplaod/" . $newfileName;

                //function for upload file
                if(move_uploaded_file($fileTmpname, $uploadPath)){
                    echo "Successfule";
                    echo "File name: " . $newfileName;
                    echo "File Size: " . $fileSize . "kb";
                    echo "File Type: " . $fileType;
                }else{
                    echo "Maximum upload file size limit is 200 kb";
                }
            }else{
                echo "You can only uplaod a Word doc file.";
            }
        }
     }
?>