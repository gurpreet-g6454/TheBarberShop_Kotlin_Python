<?php

class AdminPage {

static function adminHeader(){ ?>
<html>
    <head>
        <title>Admin Page</title>
       <link href="css/project.css" type="text/css" rel="stylesheet" />
    </head>
    <body>
<?php
}
 static function adminBody(){ ?>
  <div class="menuDiv">
            <small id="loginText"><a href="controller.php">Logout</a></small>
       <header>
            XYZ Salon
       </header>
       
    </div>

        <p id=caption><b>Admin Module</b></p>
        <div class="serviceBox2">
            <div id="row1" onclick="addMyBarber()"><b><br>Add Barber</b>
            </div>
            <div id="row1" onclick="addSchedule()"><b><br>Add Schedule</b>
            </div>
            <div id="row1" onclick="manageSchedule()"><b><br>Manage Schedule</b>
            </div>
        </div>  
        <div class="serviceBox2">
            <div id="row1" onclick="addService()"><b><br>Add Services</b>
            </div>
            <div id="row1" onclick="manageService()"><b><br>Manage Services</b>
            </div>
        </div>    

        <!--Add Barber-->
        <div id="addBarber" class="loginDiv">
             <div class="loginDiv2">
                    <small  alt="close" class="close" onclick="cancel()">X</small>
                <div id="form_login">
                    <form>  
                        <label for="name">Name</label><br>
                        <input type="text" name="barbName" id="name" placeholder="Name" required/><br>
                        <label for="mail">Email</label><br>
                        <input type="email" name="userMail" id="mail" placeholder="example@example.com" required/><br>
                        <label for="phone">Contact</label><br>
                        <input type="text" name="contat" id="contact" placeholder="XXXXXXXXXX" required/><br>
                        <label for="address">Address</label><br>
                        <input type="text" name="address" id="address" placeholder="XYZ" required/><br>
                        <label for="role">Role</label><br>
                        <input type="text" name="role" id="role" value="Barber" disabled/><br>
                        <input type="submit" value="Add Barber" class="btn"/>
                    </form>
                </div>
             </div>
         </div>

         <!--Add Schedule-->
        <div id="addSche" class="loginDiv">
             <div class="loginDiv2">
                    <small  alt="close" class="close" onclick="cancel()">X</small>
                <div id="form_login">
                    <form>  
                        <label for="name">Select Barber</label><br>
                        <select for="barber">
                            <option>Barber 1</option>
                            <option>Barber 2</option>
                            <option>Barber 3</option>
                        </select><br><br>

                        <label for="start_time">Start Time</label><br>
                        <input type="text" name="stime" id="stime" required/><br>
                        <label for="end_time">End Time</label><br>
                        <input type="text" name="etime" id="etime" required/><br>
                        <input type="submit" value="Add Schedule" class="btn"/>
                    </form>
                </div>
             </div>
         </div>
          <!--Manage Schedule-->
        <div id="ManageSche" class="loginDiv">
             <div class="loginDiv2">
                    <small  alt="close" class="close" onclick="cancel()">X</small>
                <div id="form_login">
                    <form>  
                        <label for="name">Select Barber</label><br>
                        <select for="barber">
                            <option>Barber 1</option>
                            <option>Barber 2</option>
                            <option>Barber 3</option>
                        </select><br><br>

                        <label for="start_time">Edit Start Time</label><br>
                        <input type="text" name="stime" id="stime" required/><br>
                        <label for="end_time">Edit End Time</label><br>
                        <input type="text" name="etime" id="etime" required/><br>
                        <input type="submit" value="Modify Schedule" class="btn"/>
                    </form>
                </div>
             </div>
         </div>
          <!--Add Services-->
        <div id="addServ" class="loginDiv">
             <div class="loginDiv2">
                    <small  alt="close" class="close" onclick="cancel()">X</small>
                <div id="form_login">
                    <form>  
                        <label for="name">Select Barber</label><br>
                        <select for="barber">
                            <option>Barber 1</option>
                            <option>Barber 2</option>
                            <option>Barber 3</option>
                        </select><br><br>

                        <label for="servLabel">Service Name</label><br>
                        <input type="text" name="sName" id="sName" required/><br>
                        <label for="servDesc">Service Description</label><br>
                        <input type="text" name="sDesc" id="sDesc" required/><br>
                        <label for="price">Price</label><br>
                        <input type="text" name="price" id="price" required/><br>
                        <input type="submit" value="Add Service" class="btn"/>
                    </form>
                </div>
             </div>
         </div>
          <!--Manage Schedule-->
        <div id="ManageServ" class="loginDiv">
             <div class="loginDiv2">
                    <small  alt="close" class="close" onclick="cancel()">X</small>
                <div id="form_login">
                    <form>  
                        <label for="name">Select Barber</label><br>
                        <select for="barber">
                            <option>Barber 1</option>
                            <option>Barber 2</option>
                            <option>Barber 3</option>
                        </select><br><br>
                        <label for="servLabel">Modify Service Name</label><br>
                        <input type="text" name="sName" id="sName" required/><br>
                        <label for="servDesc">Modify Service Description</label><br>
                        <input type="text" name="sDesc" id="sDesc" required/><br>
                        <label for="price">Modify Price</label><br>
                        <input type="text" name="price" id="price" required/><br>
                        <input type="submit" value="Modify Service" class="btn"/>
                    </form>
                </div>
             </div>
         </div>

         <script>
            var addBarber = document.getElementById("addBarber");
            var addSche = document.getElementById("addSche");
            var ManageSche = document.getElementById("ManageSche");
            var addServ = document.getElementById("addServ");
            var ManageServ = document.getElementById("ManageServ");

            function cancel(){
                addBarber.style.display = "none";
                addSche.style.display = "none";
                ManageSche.style.display = "none";
                addServ.style.display = "none";
                ManageServ.style.display = "none";
            }
 
            function addMyBarber(){
                addBarber.style.display = "block";
            }
            function addSchedule(){
                addSche.style.display = "block";
            }
            function manageSchedule(){
                ManageSche.style.display = "block";
            }
            function addService(){
                addServ.style.display = "block";
            }
            function manageService(){
                ManageServ.style.display = "block";
            }
        </script>

    <?php
}
static function adminFooter(){ ?>
 </body>
</html>
<?php
}
}
?>