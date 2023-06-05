<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Starting</title>
</head>
<body>
    

    <?php

    $conexion = mysqli_connect("localhost","root","","edon")

    or 

        die("Error en la conexion");


        if(isset($_POST['rol'])){
            $rol = $_POST['rol'];

            if($rol == 'estudiante'){

                $startEstudiante = mysqli_query($conexion, "select user,password from estudiante where user = '$_REQUEST[user]' AND password = 
                '$_REQUEST[password]'")

                or 

                die("Error en comprobacion" . mysqli_error($conexion));

                if($starting = mysqli_fetch_array($startEstudiante)){
                    header("locarion: iniciadoEstudiante.html");
                }else{
                    echo "Error al iniciar sesion";
                }

            }elseif($rol == 'profesor'){

                $startProfesor = mysqli_query($conexion, "select user,password from profesor where user = '$_REQUEST[user]' AND password = 
                '$_REQUEST[password]'")

                or 

                die("Error en comprobacion" . mysqli_error($conexion));

                if($starting = mysqli_fetch_array($startEstudiante)){
                    header("locarion: iniciadoProfesor.html");
                }else{
                    echo "Error al iniciar sesion";
                }
            }

        }

    mysqli_close($conexion);
    ?>


</body>
</html>