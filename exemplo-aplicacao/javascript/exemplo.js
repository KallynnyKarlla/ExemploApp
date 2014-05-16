function adicionaSerie() {

	$nome = $('#nome').val();
	$descricao = $('#descricao').val();
	$lancamento = $('#lancamento').val();

	$id = $nome.split(" ").join("");  // tira os espaços em branco do nome

	if ($('#' + $id).length) { // se ja existir uma div com esse id lança uma msm de erro
		alert("Seriado Já existe!");
	} else {
		$('#series').append('<div class="label label-danger col-sm-5"  id="' + $id + '"> </div>');
		$divSeriado = $('#' + $id);
		$divSeriado.append("<h3>" + $nome);
		$divSeriado.append("<br /> ");
		$divSeriado.append("<strong> Descrição: </strong>" + $descricao);
		$divSeriado.append("<br /> ");
		$divSeriado.append("<strong> Lancamento: </strong>" + $lancamento);
		$divSeriado.append("<br /> ");
		$divSeriado.hide().fadeIn();
	}
}

function removerSerie(){
	$nome = $('#nomeRem').val();
	$id = $nome.split(" ").join("");  // tira os espaços em branco do nome
	$('#'+ $id).fadeOut();	
}