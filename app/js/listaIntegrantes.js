function buildList(list) {
    $('tbody').empty()

    for (var i = 0; i < list.length; i++) {
        const rm = list[i]['rm']
        const nome = list[i]['nome']
        const responsabilidade = list[i]['responsabilidade']

        $('tbody').append(`
            <tr>
                <td>${rm}</td>
                <td>${nome}</td>
                <td>${responsabilidade}</td>
                <td>
                    <a class="edit" href="editarIntegrante.html?id=${rm}">Editar</a>
                    <button type="button" data-rm="${rm}" data-nome="${nome}" id="excluir" class="excluir btn btn-danger">Excluir</button>
                </td>
            </tr>
        `)
    }
    $('#excluir').on('click', function (e) {
        e.preventDefault()

        const rm = $(e.currentTarget).data('rm')
        const nome = $(e.currentTarget).data('nome')

        const isRemovalConfirmed = confirm(`Tem certeza que deseja remover o integrande ${nome} de RM ${rm}?`)

        if (isRemovalConfirmed) {
            api.delete(`/integrantes/${rm}`)
                .then(function (response) {
                    fetchList();
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    })
}

function fetchList() {
    api.get('/integrantes')
        .then(function (response) {
            buildList(response.data.integrante)
        })
        .catch(function (error) {
            console.log(error);
        })
}



fetchList()