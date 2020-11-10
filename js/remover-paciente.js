var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event){  //evento no pai
	//console.log(event.target);
	//poderia ser: var alvoDoEvento = event.target;
	// var paiDoAlvo = alvoEvento.parentNode;
	//paiDoAlvo.remove;

	event.target.parentNode.classList.add("fadeOut");

	setTimeout(function(){event.target.parentNode.remove();
	}, 800);
	
});


//remove somente elementos que já existiam.
//pacientes.forEach(function(paciente){	//evento em cada filho
//	paciente.addEventListener("dblclick", function(){
//		console.log("fui clicado com duplo clique");
//		this.remove();		//refere-se ao dono do evento
//	});
//})