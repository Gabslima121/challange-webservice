var rm
var nome
var responsabilidade

function fillFields(data) {
    $('#nome').val(data['nome'] || '')
    $('#responsabilidade').val(data['responsabilidade'] || '')
}

function fetchData() {
    rm = window.location.href.split('=')[1]

    api.get(`/integrantes/${rm}`)
        .then(function (response){
            fillFields(response.data.integrante)
        })
        .catch(function (error){
            log(error)
        })
}

fetchData()