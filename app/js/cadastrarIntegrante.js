var rm
var nome
var responsabilidade

function validarRm() {
    rm = $('#rm').val();

    const isRmInvalid = !rm;
    if (isRmInvalid) {
        $('#rm').css({ boxShadow: '0 0 7px red' });

        return false;
    }

    $('#rm').css({ boxShadow: 'none' });

    return true;
}

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

$('#cadastrar-integrante').on('submit', function (e) {
    e.preventDefault()

    const rmValido = validarRm()
    const nomeVadlido = validarNome()
    const responsabilidadeValida = validarResponsabilidade()

    if (rmValido && nomeVadlido && responsabilidadeValida) {

        var integranteData = {
            rm,
            nome,
            responsabilidade
        }

        api.post('/integrantes', integranteData)
            .then(function (response) {
                alert(response.data.message);
            })
            .catch(function (error) {
                console.log(error);
            })
    }
})