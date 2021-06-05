import Sequelize from 'sequelize'
import path from 'path'
import sequelizeAssociate from 'sequelize-associate'

export const DataTypes = Sequelize.DataTypes

const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASS,
  {
    dialect: 'mysql',
    host: process.env.DATABASE_HOST,
    define: {
      freezeTableName: true,
      paranoid: true,
      timestamps: true,
      underscored: true,
    },
  }
)

sequelize.associate = () => {
  const modelsDir = path.join(path.dirname(__dirname), 'models')

  sequelizeAssociate(modelsDir, {
    pattern: /\.js$/,
    recursive: true
  })
}

export default sequelize