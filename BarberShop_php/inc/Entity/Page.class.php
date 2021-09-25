<?php

class Page  {

    public static $title = "Lab 08 - Gurpreet (300316454)";

    static function header() { ?>

        <!doctype html>
        <html lang="en">
        <head>
            <!-- Required meta tags -->
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

            <!-- Bootstrap CSS -->
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

            <title><?php echo self::$title; ?></title>
            <!-- <meta http-equiv="refresh" content="3"> -->

        </head>
        <body>
        <div class="container">
            <h1><?php echo self::$title; ?></h1>

           
    <?php }

    static function footer()    { ?>
        </div>
            <!-- Optional JavaScript -->
                    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
                    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
                </body>
            </html>
    <?php }

    static function showError($errors)

    {
        echo "<section class='highlight'>
        <p>Please fix the following errors.<p>
        <ul>
        ";
      
        for($i = 0; $i < count($errors); $i++){
          echo "<li>".$errors[$i]."</li>";
        }
      
        echo"</ul> </section> ";
    }

    static function showUserDetails(User $user) { ?>
    <FORM ACTION="" METHOD="POST">

    <div class="form-group row">
    <div class="col-md-6">
        Username: <?php echo $user->getUsername(); ?>
    </div>
    <div class="col-md-6">
            First Name: <?php echo $user->getFirst_name(); ?>
    </div>
    <div class="col-md-6">
            Last Name: <?php echo $user->getLast_name(); ?>
    </div>
    <div class="col-md-6">
            Email Address: <?php echo $user->getEmail(); ?>
    </div>
    <div class="col-md-6">
            Age: <?php echo $user->getAge(); ?>
    </div>
    </div>        

    <div class="form-group row">
    <div class="col-md-6">
    <a class="btn btn-primary" href="http://localhost/lab/logout.php" role="button">Logout</a>
    </div>
    </div>

    </div>

    

<?php }

    static function showLogin() { ?>

    <form class="form-signin" ACTION="" METHOD="POST" style="max-width: 330px">
        <h2 class="form-signin-heading">Please sign in</h2>
        <div class="form-group">
            <input type="text" id="inputUserName" class="form-control" placeholder="User Name" required autofocus name="username">
        </div>

        <div class="form-group">
            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required name=password>
        </div>

        <div class="form-group">
            <button class="btn btn-lg btn-primary btn-block" type="submit">Log in</button>
        </div>
      </form>
        
    Do not have any account? <a href="http://localhost/lab/register.php">Click here</a> to register.

    <?php }

    static function showRegistrationForm() { 

        ?>
    
        Have an account?<a href="http://localhost/lab/userLogin.php"> Please login</a>.

        <!-- 
            For the select, the first option text should be "Red, Green or Blue?"
            with empty value. You should also set it to be readonly, disabled and selected
        -->
        <form  action='' method='post' style="max-width: 330px">
        
        <div class="form-group">
        <input class="form-control"   type='text' name='firstname' class='width100' placeholder = "First Name">
        </div>
        <div class="form-group">
        <input  class="form-control" type='text' name='lastname' class='width100' placeholder = "Last Name">
        </div>
        <div class="form-group">
        <input  class="form-control" type='email' name='email' class='width100' placeholder = "someone@somewhere.com">
        </div>
        <div class="form-group">
        <select name='color' class='width100'>
                        <option value='none' placeholder="Red, Green or Blue" disabled></option>
                        <option value='Red'>Red</option>
                        <option value='Green'>Green</option>
                        <option value='Blue'>Blue</option>
                        
                    </select>
        </div>
     
        <div class="form-group">
        <input class="form-control" type='text' name='age' class='width100' placeholder = "Age">
        </div>
        <div class="form-group">
        <input class="form-control" type='text' name='username' class='width100' placeholder = "Username">
        </div>
        <div class="form-group">
        <input class="form-control" type='text' name='password' class='width100' placeholder = "password">
        </div>
        <div class="form-group">
        <input class="form-control" type='text' name='passwordconfirm' class='width100' placeholder = "password confirm">
        </div>
        <div class="form-group">
        <input class="btn btn-lg btn-primary btn-block" type='submit' name='submit' value='Register'>
        </div>
        </form>
    
        <?php }

}