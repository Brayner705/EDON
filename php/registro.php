<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro</title>
</head>
<body>
    
    <?php

        $conexion = mysqli_connect("localhost","root","","edon")

        or

            die("Problemas con tu internet");

        if(isset($_POST['rol'])){
            $rol = $_POST['rol'];
            if($rol == 'estudiante'){

                mysqli_query($conexion, "insert into estudiante(user,email,password) values ('$_REQUEST[user]','$_REQUEST[email]',
                '$_REQUEST[password]')")
    
    
                or die ("Tienes problemas con tu internet" . mysqli_error($conexion));

            }elseif($rol == 'profesor'){

                mysqli_query($conexion, "insert into profesor(user,email,password) values ('$_REQUEST[user]','$_REQUEST[email]',
                '$_REQUEST[password]')")
    
    
                or die ("Tienes problemas con tu internet" . mysqli_error($conexion));

            }
        }

        mysqli_close($conexion);

        echo "Estas registrado"
    ?>

</body>
</html>