function validarDados()
{
	if(document.getElementById("idSim").checked)
	{
		alert("Volte sempre a esta pagina!");
	}
	else{
		alert("Que bom que você voltou a visitar esta pagina!");
	}
	if (document.forms.formulario1.elements["idNome"].value == "" || document.forms.formulario1.elements[0].length < 10) {
		alert("Preencha campo NOME corretamente!");
		document.forms.formulario1.elements[0].focus();
		return false;
	};
	if (document.forms.formulario1.elements["idEmail"].value == "" || document.forms.formulario1.elements["idEmail"].value.indexOf('@') == -1 || document.forms.formulario1.elements["idEmail"].value.indexOf('.') == -1) {
		alert("Preencha campo E-MAIL corretamente!");
		document.forms.formulario1.elements.idEmail.focus();
	   return false;
	};
	
	if (document.forms.formulario1.elements["idComentario"].value == "" || document.forms.formulario1.elements["idComentario"].value.length < 20) {
		alert("É necessario preencher o campo MENSAGEM com mais de 20 caracteres!");
		document.getElementById("idComentario").focus();
		return false;
	};
}