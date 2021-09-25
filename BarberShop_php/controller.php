<?php

require_once("main_file.php");
// require once all the file
require_once("inc/config.inc.php");
require_once("inc/Entity/Page.class.php");
require_once("inc/Entity/User.class.php");
require_once("inc/Entity/Role.class.php");
require_once("inc/Utility/UserDAO.class.php");
require_once("inc/Utility/RoleDAO.class.php");
require_once("inc/Utility/PDOAgent.class.php");
require_once("inc/Utility/Validate.class.php");

MainPage::header();
MainPage::body();
if (!empty($_POST)) {
    // if it is an edit 
    if (isset($_POST["create"]) && $_POST["create"] == "USER")  
    {
        //$sqlInsert = "INSERT INTO user (Name, role, username,email,Contact_Number,create_date,password,is_active)
        //VALUES (:name, :role, :username, :email, :contact_number, :create_date, :password, :is_active)";
        //Intiating Dao
        UserDAO::init();
        RoleDAO::init();
        $user = new User();

        $Roles = RoleDAO::getRoles();
        $role =  $_POST['create'];
        //fetching Role id from Role table using role 
        foreach($Roles as $rol) {
                if($rol->getRole_type() == $role )
                {
                    $user->setRole($rol->getRole_id());
                }
        }

       // $user->setRole(strtolower($_POST['create']));
        $user->setName(strtolower($_POST['mail']));
        $user->setContact_Number(strtolower($_POST['phone']));
        $user->setEmail(strtolower($_POST['mail']));
        $user->setUsername(strtolower($_POST['username']));
        $user->setPassword(password_hash($_POST['pass'],PASSWORD_DEFAULT));
        
      
        // instantiate a new user
        // assemble the user data
        // create the user
        UserDAO::createUser($user);

    }
}
MainPage::footer();

?>