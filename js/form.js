var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
	event.preventDefault();

	var form = document.querySelector("#form-adiciona");
	//extraindo informaço~es do paciente do form

	//var nome = form.nome.value;
	//var peso = form.peso.value;
	//var altura = form.altura.value;
	//var gordura = form.gordura.value;
	
	var paciente = obtemPacienteDoFormulario(form);

	//cria a tr e a td do paciente
	
	// var pacienteTr = document.createElement("tr");

	//var nomeTd = document.createElement("td");
	//var pesoTd = document.createElement("td");
	//var alturaTd = document.createElement("td");
	//var gorduraTd = document.createElement("td");
	//var imcTd = document.createElement("td");

	//nomeTd.textContent = nome;
	//pesoTd.textContent = peso;
	//alturaTd.textContent = altura;
	//gorduraTd.textContent = gordura;
	//imcTd.textContent = imc;

	//pacienteTr.appendChild(nomeTd);
	//pacienteTr.appendChild(pesoTd);
	//pacienteTr.appendChild(alturaTd);
	//pacienteTr.appendChild(gorduraTd);
	//pacienteTr.appendChild(imcTd);


	//var pacienteTr = montaTr(paciente); FOI PRA FUNCTION
	
	var erros = validaPaciente(paciente);

	if(erros.length > 0) {
		exibeMensagensDeErro(erros);
		return;
	}

	//adicionando paciente na tabela

	//var tabela = document.querySelector("#tabela-pacientes"); FOI PRA FUNCTION

	//tabela.appendChild(pacienteTr); FOI PRA FUNCTION

	form.reset();		//limpa os campos
	var mensagensErro = document.querySelector("#mensagens-erro");
	mensagensErro.innerHTML = "";
});


function adicionaPacienteNaTabela(paciente){
	var pacienteTr = montaTr(paciente);
	var tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(pacienteTr);

}

function exibeMensagensDeErro(erros) {
	var ul = document.querySelector("#mensagens-erro");
	ul.innerHTML = "";

	erros.forEach(function(erro){
		var li = document.createElement("li");
		li.textContent = erro;
		ul.appendChild(li);
	});
}


function obtemPacienteDoFormulario(form) {s
	var paciente = {				//{}cria objeto com propriedades
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaImc(form.peso.value, form.altura.value)

	}

	return paciente;

}


function montaTr(paciente)	{
	var pacienteTr = document.createElement("tr");
	pacienteTr.classList.add("paciente");

	/*var nomeTd = document.createElement("td");
	nomeTd.classList.add("info-nome");
	nomeTd.textContenx = paciente.nome*/ //substituir por função montaTd
	
	//var nomeTd = montaTd(paciente.nome, "info-nome"); // montaTr

	//adiciona o paciente na tabela
	pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
	pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
	pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
	pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
	pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

	return pacienteTr;

}


function montaTd(dado, classe)	{
	var td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);

	return td;

}


function validaPaciente(paciente)	{

	var erros = [];

	if(paciente.nome.length == 0) erros.push("O nome não pode ficar em branco.");

	if(!validaPeso(paciente.peso)) erros.push("Peso é inválido!");

	if(!validaAltura(paciente.altura)) erros.push("Altura é inválida!");

	if(paciente.gordura.length == 0) erros.push("Gordura não pode ficar em branco.");

	if(paciente.peso.length == 0) erros.push("O peso não pode ficar em branco.");

	if(paciente.altura.length == 0) erros.push("A altura não pode ficar em branco.");

	return erros
}