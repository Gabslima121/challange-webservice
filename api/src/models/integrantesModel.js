import database, { DataTypes } from '../database/index.js'

const TABLE_NAME = 'integrantes'
const MODEL_NAME = 'Integrantes'

const Integrantes = database.define(MODEL_NAME, {
    rm: {
        type: DataTypes.STRING,
        autoIncrement: false,
        allowNull: false,
        primaryKey: true,
        unique: true,
    },
    nome: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
    },
    responsabilidade: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
    },
},
    {
        tableName: TABLE_NAME,
    })

export default Integrantes