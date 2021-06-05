var rm
var nome
var responsabilidade

function validarNome() {
    nome = $('#nome').val();

    const isNomeInvalid = !nome;
    if (isNomeInvalid) {
        $('#nome').css({ boxShadow: '0 0 7px red' });
        return false;
    }

    $('#nome').css({ boxShadow: 'none' });
    return true;
}

function validarResponsabilidade() {
    responsabilidade = $('#responsabilidade').val();

    const isResponsabilidadeInvalid = !responsabilidade;
    if (isResponsabilidadeInvalid) {
        $('#responsabilidade').css({ boxShadow: '0 0 7px red' });
        return false;
    }

    $('#responsabilidade').css({ boxShadow: 'none' });
    return true;
}

$('#editar-integrante').on('submit', function (e) {
    e.preventDefault();
    const nomeVadlido = validarNome()
    const responsabilidadeValida = validarResponsabilidade()


    rm = window.location.href.split('=')[1]

    var integranteData = {
        nome,
        responsabilidade
    }
    if(nomeVadlido && responsabilidadeValida){
        api.put(`/integrantes/${rm}`, integranteData)
        .then(function (response) {
            alert(response.data.message)
        })
        .catch(function (error) {
            console.log(error);
        })
    }
})