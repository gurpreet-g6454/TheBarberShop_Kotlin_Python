<?php

class UserDAO   {

    // Create a member to store the PDO agent
    private static $db;
    // create the init function to start the PDO agent
    static function init()  {
        //Initialize the internal PDO Agent
        self::$db = new PDOAgent("User");    
    }    

    
    // function to create user
    static function createUser(User $user){
        // make sure the strings being stored in the database are cleaned 
        // trimmed, and changed to lowercase
        
        // query
        $sqlInsert = "INSERT INTO user (Name, role, username,email,Contact_Number,create_date,password,is_active)
                  VALUES (:name, :role, :username, :email, :contact_number, :create_date, :password, :is_active)";
    
    // QUERY BIND EXECUTE
    self::$db->query($sqlInsert);
    self::$db->bind(':name',trim($user->getName()));
    self::$db->bind(':role',trim($user->getRole()));
    self::$db->bind(':email',trim($user->getEmail()));
    self::$db->bind(':username',trim($user->getUsername()));
    self::$db->bind(':password',trim($user->getPassword()));
    self::$db->bind(':contact_number',trim($user->getContact_Number()));
    self::$db->bind(':create_date',date("Y/m/d"));
    self::$db->bind(':is_active',1);
    

    self::$db->execute();
        // bind
        // execute
        // you may return the rowCount

    }

    // get a user detail
    static function getUser(string $userName)  {
        
        $sql = "SELECT * FROM users WHERE username=:user";
        self::$db->query($sql);
        self::$db->bind(":user",$userName);
        self::$db->execute();
        return self::$db->singleResult();
       

    }

    // get multiple users detail
    // It is not needed in our app, but hey.. more practice is better!
    static function getUsers()  {
        //you know the drill

    }
    
    
    
}