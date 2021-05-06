function Tamanho()
{
	if(document.forms.formulario1.elements["Maiusculo"].checked)
	{
		document.forms.formulario1.elements["idTexo"].value = document.forms.formulario1.elements["idTexo"].value.toUpperCase();
	}
	else{
		document.forms.formulario1.elements["idTexo"].value = document.forms.formulario1.elements["idTexo"].value.toLowerCase();
	}
}