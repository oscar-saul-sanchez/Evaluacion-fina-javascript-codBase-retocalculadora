var calculadora = {
	existeOpc: "no",
	ultOpc: "",
	cadena: "",


	init: function(){
		this.asignarEventoBtn('teclado')
	},


	asignarEventoBtn: function(selector){
		var teclas = document.querySelectorAll('.' + selector + ' img')
		for(i=0;i<teclas.length;i++){
			teclas[i].onclick = this.eventoPresionoTecla
			teclas[i].onmouseleave = this.eventoSoltoTecla
		}
	},


	eventoPresionoTecla: function(event){
		if(event.target.id == "1" || event.target.id == "2" || event.target.id == "3"
			|| event.target.id == "4" || event.target.id == "5" || event.target.id == "6"
			|| event.target.id == "7" || event.target.id == "8" || event.target.id == "9"
			|| event.target.id == "0") {
			mostrarNumero(event.target.id)
		}

		if(event.target.id == "on"){
			limpiarPantalla()
		}

		if(event.target.id == "punto"){
			agregarPunto()
		}

		if(event.target.id == "sign"){
			agregarSigno()
		}

		if(event.target.id == "mas"){
			sumarValores()
		}

		if(event.target.id == "menos"){
			restarValores()
		}

		if(event.target.id == "por"){ 
			multiplicarValores()
		}

		if(event.target.id == "dividido"){
			dividirValores()
		} 

		if(event.target.id == "igual"){
			mostrarResultado()
		}

		disminuirTamano(event.target)

	},

	eventoSoltoTecla: function(event){
		aumentarTamano(event.target)
	}

}

function sumarValores(){
	if(calculadora.valor == 'X'){
		calculadora.valor = ""
		calculadora.existeOpc = "no"
	}
	if(calculadora.existeOpc == "no"){
		calculadora.valor = document.getElementById('display').innerHTML
		calculadora.existeOpc = "+"
	} else {
		calculadora.valor = calculadora.valor + calculadora.existeOpc + document.getElementById('display').innerHTML
		calculadora.existeOpc = "+"
	}
	document.getElementById('display').innerHTML = ""
}

function restarValores(){
	if(calculadora.valor == 'X'){
		calculadora.valor = ""
		calculadora.existeOpc = "no"
	}
	if(calculadora.existeOpc == "no"){
		calculadora.valor = document.getElementById('display').innerHTML
		calculadora.existeOpc = "-"
	} else {
		calculadora.valor = calculadora.valor + calculadora.existeOpc + document.getElementById('display').innerHTML
		calculadora.existeOpc = "-"
	}
	document.getElementById('display').innerHTML = ""
}

function multiplicarValores(){
	if(calculadora.valor == 'X'){
		calculadora.valor = ""
		calculadora.existeOpc = "no"
	}
	if(calculadora.existeOpc == "no"){
		calculadora.valor = document.getElementById('display').innerHTML
		calculadora.existeOpc = "*"
	} else {
		calculadora.valor = calculadora.valor + calculadora.existeOpc + document.getElementById('display').innerHTML
		calculadora.existeOpc = "*"
	}
	document.getElementById('display').innerHTML = ""
}

function dividirValores(){
	if(calculadora.valor == 'X'){
		calculadora.valor = ""
		calculadora.existeOpc = "no"
	}
	if(calculadora.existeOpc == "no"){
		calculadora.valor = document.getElementById('display').innerHTML
		calculadora.existeOpc = "/"
	} else {
		calculadora.valor = calculadora.valor + calculadora.existeOpc + document.getElementById('display').innerHTML
		calculadora.existeOpc = "/"
	}
	document.getElementById('display').innerHTML = ""
}



function mostrarResultado(){
	if(calculadora.valor == "X"){
		document.getElementById('display').innerHTML = "0"
	} else if(calculadora.valor == ''){
			calculadora.valor = document.getElementById('display').innerHTML + calculadora.ultOpc
			document.getElementById('display').innerHTML = actualizarResultado()
			calculadora.valor = ''
	} else {
				calculadora.valor = calculadora.valor + calculadora.existeOpc + document.getElementById('display').innerHTML
				calculadora.ultOpc = calculadora.existeOpc + document.getElementById('display').innerHTML
				document.getElementById('display').innerHTML = actualizarResultado()
				calculadora.valor = ''
	}
}

function actualizarResultado(){
	resultado = 0
	resultado = eval(calculadora.valor)
	return resultado
}

function agregarSigno(){
	var pantalla = document.getElementById('display')
	if(pantalla.innerHTML[0] = "-"){
		pantalla.innerHTML[0] = ""
	}
	if(pantalla.innerHTML.length<7 && pantalla.innerHTML != "0"){
		pantalla.innerHTML = "-" + pantalla.innerHTML
	}
}

function agregarPunto(){
	var existe = "1"
	var pantalla = document.getElementById('display')
	for(i=0;i<pantalla.innerHTML.length;i++){
		if (pantalla.innerHTML[i] == "."){
			existe = "0"
		}
	}
	if(existe == "0" && pantalla.innerHTML.length < 6){
		pantalla.innerHTML = pantalla.innerHTML + "."
	}
}

function limpiarPantalla(){
	var pantalla = document.getElementById('display')
	pantalla.innerHTML = "0"
	calculadora.valor = ""
	calculadora.existeOpc = "no"
}

function mostrarNumero(numero){
	var pantalla = document.getElementById('display')
	if (pantalla.innerHTML.length < 8){
		if(pantalla.innerHTML == "0" && numero != "0"){
			pantalla.innerHTML = numero
		} else if(pantalla.innerHTML != "0"){
			pantalla.innerHTML = pantalla.innerHTML + numero
		}
	}
}

function aumentarTamano(elementoDOM){
	elementoDOM.style.padding = "0px"
}

function disminuirTamano(elementoDOM){
	elementoDOM.style.padding = "1px"
}

calculadora.init()
