<?php

class Validate
{


        static function validateInput()    
 {
    $errors = [];    
    
    //Validate the name 
    $name = $_POST['firstname'];
    // First Name and Last Name should not be empty and not numbers
        // Also replace occurences of semicolon, colon, comma, ampersand, 
        // dollar sign, < and > and any improper character with nothing
    $filter = array(";","<",">",":","&","$",",");
    str_replace($filter,"",$_POST['firstname']);
    if($name == '' || is_numeric($name))
    {
        $errors[] = "Please Enter a valid first name.";
    }

    $lname = $_POST['lastname'];
    str_replace($filter,"",$_POST['lastname']);
    if($lname == '' || is_numeric($name))
    {
        $errors[] = "Please Enter a valid last name.";
    }
    
    //Validate the email address
    $email = $_POST['email'];
    if(!isset($email) || !filter_var($email, FILTER_VALIDATE_EMAIL))
    {
        $errors[] = "Please Enter a valid email address";
    }

    //Ensure that one of the option in select was chosen
    $roomType = $_POST['color'];
    if($roomType == "none")
    {
        $errors[] = "Please select the color ";
    }


    //Validate the number of days    
    $age = $_POST['age'];
    if(!isset($age) || !filter_var($age, FILTER_VALIDATE_INT) || $age > 100 || $age < 15)
    {
        $errors[] = "Age must be between 15 and 100.";
    }

    //Check the message
    $uname = $_POST['username'];
    if($uname == '' || strpos($uname," "))
    {
        $errors[] = "Please enter a valid username ";
    }

    $password = $_POST['password'];
    if(strlen($password) < 6 || (strcmp($password,$_POST['passwordconfirm']) != 0))
    {
        $errors[] = "Please enter a valid password ";
    }
   
    
    //Return the errors
    return $errors;
 }

}

?>