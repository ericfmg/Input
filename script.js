function obtenerdatos()
	{
		let nombre = document.getElementById('nombre').value;
		let edad = parseFloat(document.getElementById('edad').value);

        document.getElementById('Bienvenido').innerHTML = `<h1>Bienveido ${nombre} de ${edad} años<h1/>`

	}