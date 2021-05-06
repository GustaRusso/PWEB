function confirmacao()
{
	var resultado = confirm("Deseja abrir a pagina do curso?");
	if(resultado == true)
	{
		if(document.getElementById("cboCursos").value == "ads")
		{
			window.open("ads.html", "Análise e Desenvolvimento de Sistemas");
		}
		else if(document.getElementById("cboCursos").value == "ea")
		{
			window.open("ea.html", "Eletrônica Automotiva");
		}
		else if(document.getElementById("cboCursos").value == "fm")
		{
			window.open("fm.html", "Fabricação Mecânica");
		}
		else if(document.getElementById("cboCursos").value == "ge")
		{
			window.open("ge.html", "Gestão Empresarial");
		}
		else if(document.getElementById("cboCursos").value == "gq")
		{
			window.open("gq.html", "Gestão da Qualidade");
		}
	}
}