import Integrante from '../models/integrantesModel.js'

export const index = async (_, res) => {
    const integrante = await Integrante.findAll()

    if (!integrante.length) {
        res.status(404).json({
            status: false,
            message: 'No data found'
        })
    } else {
        res.status(201).json({
            status: true,
            integrante
        })
    }
}

export const show = async (req, res) => {
    const { rm } = req.params
    const integrante = await Integrante.findByPk(rm)

    console.log(integrante);

    if (!integrante) {
        res.status(404).json({
            status: false,
            message: 'No data found'
        })
    } else {
        res.status(201).json({
            status: true,
            integrante
        })
    }
}

export const create = async (req, res) => {
    const data = req.body
    
    try {
        await Integrante.create(data)

        res.status(201).json({
            status: 'success',
            message: 'Integrante criado com sucesso!',
        })
    } catch (error) {
        res.status(400).json({
            status: true,
            message: 'Integrante não pode ser criado, verifique as informações e tente novamente'
        })
    }
}

export const update = async (req, res) => {
    const { rm } = req.params
    const data = req.body
    const integrante = await Integrante.findByPk(rm)

    // console.log(integrante);

    try {
        await integrante.update({
            ...integrante,
            ...data
        })
        res.status(200).json({
            status: true,
            message: `Integrante de RM ${rm} atualizado com sucesso`
        })
    } catch (error) {
        res.status(400).json({
            status: false,
            message: 'nao deu certo'
        })
    }
}

export const destroy = async (req, res) => {
    const rm = req.params.rm
    const integrante = await Integrante.findByPk(rm)

    try {
        await integrante.destroy()

        res.status(200).json({
            status: 'success',
            message: `Integrante de RM ${rm} has been deleted`,
        })
    } catch (err) {
        res.status(400).json({
            status: 'error',
            message: 'Integrante nao pode ser deletado',
        })
    }
}