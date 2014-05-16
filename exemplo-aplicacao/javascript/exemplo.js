function adicionaSerie() {
	$nome = $('#nome').val();
	$descricao = $('#descricao').val();
	$lancamento = $('#lancamento').val();

	$id = $nome.split(" ").join("");  // tira os espaços em branco do nome

	if ($('#' + $id).length) { // se já existir uma div com esse id lança uma msg de erro
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

		limpaForms();
		$divSeriado.hide().fadeIn();
	}
}

function limpaForms() {
	$('#nome').val('');
	$('#descricao').val('');
	$('#lancamento').val('');
}

function removerSerie(){
	$nome = $('#nomeRem').val();
	$id = $nome.split(" ").join("");  // tira os espaços em branco do nome
	$('#'+ $id).fadeOut();	
} 
