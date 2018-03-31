var sId = setTimeout(()=>{
	console.log('Corriendo...')
},1000);

//to cancel the timeout
clearTimeout(sId);

var valor = 0;
const sit = setInterval(()=>{
	
	valor +=1;
	console.log(valor);
	if (valor == 5) {
		clearInterval(sit);//this line stop the setinterval
	}
},1000);