<?php

//FacilityID	FacilityName	Description

class RoleDAO  {

    //Static DB member to store the database
    private static $db;
    //Initialize the ReservationDAO
    static function init()    {
        self::$db = new PDOAgent("Role");

    }

    //Get all the Facility
    static function getRoles() {
        
        // SELECT        
        $selectAll = "select * from user_role;";
        //Prepare the Query
        self::$db->query($selectAll);
        self::$db->execute();
        //Return the resultSet
        return self::$db->getResultSet(); 
        
    }
}


?>