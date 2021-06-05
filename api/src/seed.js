import Integrantes from './models/integrantesModel.js'

export const grow = async () => {
    const integrantes = [
        {
            rm: 83004,
            nome: 'Gabriel Oliveira Lima',
            responsabilidade: 'Desevolvimento web'
        },
        {
            rm: 83005,
            nome: 'Pedro Lima',
            responsabilidade: "Desevolvimento web"
        },
        {
            rm: 83006,
            nome: 'Lucas Oliveira',
            responsabilidade: "Desevolvimento web"
        }
    ]

    for (let i = 0; i < integrantes.length; i++) {
        await Integrantes.create(integrantes[i]);
    }
}