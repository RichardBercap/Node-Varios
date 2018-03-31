//opciones de banderilla desde la terminal 
console.log(process.argv);//back a variables and we pass arguments with
//like this: name Richard after node process

function leerOpcion(opcion){
	var index = process.argv.indexOf(opcion);
	if(index === -1){//if the index not found 
		return false;
	}else{
		//argv is the matriz
		return process.argv[index+1]; 
	}
}

var nombre = leerOpcion("-nombre");
console.log("The name is: "+nombre);

process.stdout.write("Cual es el apellido: \n");

//to read data
process.stdin.on("data", data=>{
	process.stdout.write(`El nombre completo es ${nombre} ${data}\n`);

	process.exit();//end of the process
});

