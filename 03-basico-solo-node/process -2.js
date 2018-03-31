process.stdout.write("Escriba una lista de números para sumar. '.' para terminar");

var suma = 0;

process.stdin.on("data", data=>{
	if(data.toString().trim()=='.'){
		process.exit();
	}
	else
	{
		suma += parseInt(data.toString().trim());
	}
});

process.on('exit',()=>{
	process.stdout.write("La suma total es: "+ suma +"\n");
});