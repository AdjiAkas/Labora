var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++) {

	var tdPeso = pacientes[i].querySelector(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura = pacientes[i].querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var tdImc = pacientes[i].querySelector(".info-imc");

	var pesoEhValido = validaPeso(peso);
	var alturaEhValida = validaAltura(altura);

	if(!pesoEhValido)	{
		console.log("peso inválido");
		tdPeso.textContent = "Peso inválido!";
		pesoEhValido = false;
	}

	if (!alturaEhValida)	{
		console.log("altura inválida");
		tdAltura.textContent = "Altura inválida!";
		alturaEhValida = false;
	}

	if (pesoEhValido && alturaEhValida)	{
		var imc = calculaImc(peso, altura);
		tdImc.textContent = imc;

	} else {
		tdImc.textContent = "Peso e/ou Altura Inválida";
		//pacientes[i].style.backgroundColor = "lightcoral";  EVITAR MODIFICAR STYLE NO JAVASCRIPT
		pacientes[i].classList.add("paciente-invalido");	//MELHOR ADICIONAR UMA CLASSE
	}
}

function validaPeso(peso)	{
	if(peso >= 0 && peso < 500)	{
		return true;

	}else{
		return false;
	}
}


function validaAltura(altura)	{
	if(altura >= 0 && altura <= 3.0)	{
		return true;

	}else{
		return false;
	}
}

function calculaImc(peso, altura)	{
	var imc = 0;
	imc = peso / (altura * altura);
	return imc.toFixed(2);
}

/*titulo.addEventListener("click", mostraMensagem);

function mostraMensagem() {
	console.log("Olá, eu fui clicado!");

}*/

/*titulo.addEventListener("click", function(){	//função anônima
	console.log("Olá, eu fui clicado!");
});*/



//titulo.addEventListener("click", function()	{
//	console.log("fui clicado");


