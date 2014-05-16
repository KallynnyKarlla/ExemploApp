function adicionaSerie() {

	$nome = $('#nome').val();
	$descricao = $('#descricao').val();
	$lancamento = $('#lancamento').val();

	$id = $nome.split(" ").join("");  // tira os espaços em branco do nome

<<<<<<< HEAD:exemplo-aplicacao/javascript/exemplo.js
	if ($('#' + $id).length) { // se já existir uma div com esse id lança uma msm de erro
=======
	if ($('#' + $id).length) { // se já existir uma div com esse id lança uma msg de erro
>>>>>>> 5516c6826e7aea923e1cb802828095dbaca9e5f9:exemplo-aplicacao/exemplo.js
		alert("Seriado já existe!");
	} else {

		$('#series').append('<div class="label label-danger col-sm-5"  id="' + $id + '"> </div>');
		$divSeriado = $('#' + $id);
		$divSeriado.append("<h3>" + $nome);
		$divSeriado.append("<br /> ");
		$divSeriado.append("<strong> Descrição: </strong>" + $descricao);
		$divSeriado.append("<br /> ");
		$divSeriado.append("<strong> Lançamento: </strong>" + $lancamento);
		$divSeriado.append("<br /> ");
<<<<<<< HEAD:exemplo-aplicacao/javascript/exemplo.js

		limpaForms();
		$divSeriado.hide().fadeIn();
=======
		limpaForms();
		alert('Seriado Adicionado!');
		
>>>>>>> 5516c6826e7aea923e1cb802828095dbaca9e5f9:exemplo-aplicacao/exemplo.js
	}
}

function limpaForms() {
	$('#nome').val('');
	$('#descricao').val('');
	$('#lancamento').val('');
<<<<<<< HEAD:exemplo-aplicacao/javascript/exemplo.js
}

function removerSerie(){
	$nome = $('#nomeRem').val();
	$id = $nome.split(" ").join("");  // tira os espaços em branco do nome
	$('#'+ $id).fadeOut();	
}
=======
} 
>>>>>>> 5516c6826e7aea923e1cb802828095dbaca9e5f9:exemplo-aplicacao/exemplo.js
