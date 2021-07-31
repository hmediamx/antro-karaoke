<?php

$nombre = addslashes(htmlspecialchars($_POST['nombre']));
$email = addslashes(htmlspecialchars($_POST['email']));
$telefonos = addslashes(htmlspecialchars($_POST['telefonos']));
$message = addslashes(htmlspecialchars($_POST['mensaje']));

$subject = "Mensaje Karaoke";
$sever = "From: no-reply@karaokedigital.com.mx";

$mensaje = "Nombre: " .$nombre ."\n E-mail: " .$email ."\n Telefono: " .$telefonos ."\n Asunto: " .$subject ."\n \n" .$message;


if(mail("ventas@karaokedigital.com.mx", "Mensajes Pagina", $mensaje, $sever)){
	$resultado = "Se envío tu mensaje correctamente";
	echo $resultado;
}
else {
	$resultado = "Hubo un error, intentalo de nuevo";
	echo $resultado;
}



?>