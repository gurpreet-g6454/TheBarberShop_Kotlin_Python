<?php
class MainPage {

    static function header() { ?>
<html>
    <head>
        <title>Home Page Hello</title>
       <link href="css/project.css" type="text/css" rel="stylesheet" />
    </head>
    <body>
    <?php
    }

    static function body() { ?>
        <div class="menuDiv">
            <small id="menuText">-_- Menu</small>
            <small id="loginText" onclick="loginForm()">Login</small>
            <small id="registerText" onclick="registerForm()">Register</small>
            <small id="adminText" onclick="adminForm()">Admin</small>
       <header>
            XYZ Salon
       </header>
    </div>
        <p id=caption><b>Services that we offer</b></p>
        <div class="serviceBox1">
            <div id="row1"><b>Hair Cut</b>
                <br> <i>Cut and style with perfection</i>
            </div>
            <div id="row1"><b>Beard Trim</b>
                <br> <i>Shape and flaunt the beard with pride</i></div>
            <div id="row1"><b>Clean Up</b>
                <br> <i>An overall refresher to make you look clean</i></div>
        </div>
        <br>
        <div class="serviceBox2">
            <div id="row1"><b>Fully Groomed</b>
                <br> <i>A two hour session to get you set up</i></div>
            <div id="row1"><b>Face Massage</b>
                <br> <i>A Relaxing face massage</i></div>
            <div id="row1"><b>Body Massage</b>
                <br> <i>A Relaxing body massage</i></div>
        </div>
        

        <!--User Login-->
         <div id="loginBox" class="loginDiv">
             <div class="loginDiv2">
                    <small  alt="close" class="close" onclick="cancel()">X</small>
                <div id="form_login">
                    <form>  
                        <label for="mail">Email</label><br>
                        <input type="email" name="userMail" id="mail" placeholder="example@example.com" required/><br>
                        <label for="phone">Password</label><br>
                        <input type="password" name="userPass" id="pass" placeholder="**********" required/><br>
                        <input type="submit" value="login" class="btn"/>
                    </form>
                </div>
             </div>
         </div>
        <!--Admin Login-->
        <div id="adminBox" class="adminDiv">
             <div class="adminDiv2">
                    <small  alt="close" class="close" onclick="cancel()">X</small>
                <div id="admin_login">
                    <form Action="adminModule.php" Method="POST">  
                        <label for="mail">Email</label><br>
                        <input type="email" name="adminMail" id="mail" placeholder="example@example.com" required/><br>
                        <label for="phone">Password</label><br>
                        <input type="password" name="adminPass" id="pass" placeholder="**********" required/><br>
                        <input type="submit" value="login" class="btn"/>
                    </form>
                </div>
             </div>
         </div>

        <!--Register-->
                 <div id="registerBox" class="registerDiv">
                    <div class="registerDiv2">
                           <small  alt="close" class="close" onclick="cancel()">X</small>
                       <div id="form_reg">
                            <form ACTION="" METHOD="POST">
                                <label for="uname">Name</label><br>
                                <input type="text" name="uname" id="uname" placeholder="John Smith" required/><br>
                                <label for="mail">Email</label><br>
                                <input type="email" name="mail" id="mail" placeholder="example@example.com" required/><br>
                                <label for="phone">Phone</label><br>
                                <input type="text" name="phone" id="phone" placeholder="XXXXXXXXXXX" required/><br>
                                <label for="phone">Password</label><br>
                                <input type="password" name="pass" id="pass" placeholder="**********" required/><br>
                                <label for="uname">Name</label><br>
                                <input type="text" name="username" id="username" placeholder="JohnSmith" required/><br>
                                <label for="role">Role</label><br>
                                <input type="text" name="role" id="role" value="USER" disabled/><br>
                                <!-- Use input type hidden to let us know that this action is to create user -->
                                <input type="hidden" name="create" value="USER">
                                <input type="submit" value="Register" class="btn"/>
                            </form>
                       </div>
                    </div>
                </div>
            
        <script>
            var registerBox = document.getElementById("registerBox");
            var loginBox = document.getElementById("loginBox");
            var adminBox = document.getElementById("adminBox");

            function cancel(){
                registerBox.style.display = "none";
                loginBox.style.display = "none";
                adminBox.style.display = "none";
            }
 
            function loginForm(){
                loginBox.style.display = "block";
            }
            function registerForm(){
                registerBox.style.display = "block";
            }
            function adminForm(){
                adminBox.style.display = "block";
            }
        </script>

    <?php
    }

    static function footer() {?>

    </body>
    <footer>
        <div class="footer">
            <div>Address
                <br>12345 Surrey Place
                <br>BC, Canada, V3V4Xy
            </div>
            <div>Contact Us
                <br>(+1)7789536578
                <br>(+1)7789536578
                <br> Email: xyzsalon@outlook.com</div>
            <div>Opening Hours
                <br> Mon-Fri : 9:00-5:30 PM
                <br> Sat : 10:00-4:00 PM
                <br> Sun : Closed
                </div>
        </div>
    </footer>
</html>
    <?php
    }
}
?>