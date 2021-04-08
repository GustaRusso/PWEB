function maior(V1,V2,V3)
{
	if(V1>V2 && V1>V3)
		return V1;
	else if(V2>V1 && V2>V3)
		return V2;
	else
		return V3;
}

do{
	var v1 = prompt("Digite o primeiro numero");
}	while(isNaN(v1))
do{
	var v2 = prompt("Digite o segundo numero");
}	while(isNaN(v2))
do{
	var v3 = prompt("Digite o terceiro numero");
}	while(isNaN(v3))

prompt("O maior numero foi: " + maior(v1,v2,v3));