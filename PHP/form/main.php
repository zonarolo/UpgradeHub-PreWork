<?php

 if (isset($_POST['escribir'])){
  $email = $_POST['email'];
  $password = $_POST['password'];
  $password2 = $_POST['password2'];

  if ($password === $password2 && strlen($password) >= 8){
		$msg = "Datos procesados correctamente.";
  }else $msg = "Error al enviar el formulario.";
	
}
?>
<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta name="Author" content="Juan Rolo" />
		<title>Formulario</title>
	</head>
	<body>
		<h2>Registro</h2>
		<form action="main.php" method="POST">
			<div>
				<label>Email</label>
				<input type="text" name="email" placeholder="Introduce tu email" />
			</div>
			<div>
				<label> Contraseña</label>
				<input type="password" name="password" placeholder="Contraseña" />
			</div>
			<div>
				<label>Repita Contraseña</label>
				<input type="password" name="password2" placeholder="Repita contraseña" />
      </div>
      <input type="hidden" name="escribir" />
			<input type="submit" value="Enviar" />
			<strong class="mensaje"><?php echo $msg ?></strong>
			<script src="https://code.jquery.com/jquery-3.2.1.js"></script>
			<script type="text/javascript">
			$(document).ready(function() {
				setTimeout(function() {
					$(".mensaje").fadeOut(1500);
				},3000);
			});
			</script>
		</form>
	</body>
</html>
