function calcular() {
	var nome = document.getElementById('userName');
	var peso = document.getElementById('peso');
	var altura = document.getElementById('altura');
	var imcAtual = document.getElementById('imcAtual');
	var imcIdeal = document.getElementById('imcIdeal');
	var pesoIdeal = document.getElementById('pesoIdeal');
	var perder = document.getElementById('perder');
	var res = document.getElementById('resultado');

	Number(peso.value);
	Number(altura.value);
	var imcAt = peso.value / ((altura.value / 100) * (altura.value / 100));

	imcAtual.innerHTML = `Seu IMC atual é de ${imcAt.toFixed(2)}`;
	/* if (!nome.value || !peso.value || !altura.value) {
		alert('Por favor, preencha todos os dados acima');
	} else { */
		if (!imcAt || imcAt <= 0) {  
			alert('Verifique os dados e preencha corretamente');
		}	else {
				document.getElementById('resultScreen').style.display = 'block';
				var sau = document.getElementById('saudacoes');
				sau.innerHTML = `Hola, ${nome.value}!`;	
				imcAtual.innerHTML = `Seu IMC atual é de ${imcAt.toFixed(2)}`;
				if (imcAt < 18.5) {
					res.innerHTML = 'Você está abaixo do peso';
				} else if (imcAt < 24.9) {
						res.innerHTML = 'Você está com o peso normal :D';
					}
					else if (imcAt < 29.9) {
						res.innerHTML = 'Você está com sobrepeso';
					}
					else if (imcAt < 34.9) {
						res.innerHTML = 'Você está com obesidade grau 1';
					}
					else if (imcAt < 39.9) {
						res.innerHTML = 'Você está com obesidade grau 2';
					}
			imcIdeal.innerHTML = `O IMC Ideal é entre 18,5 e 24,9`;
				}
			/*}*/

}