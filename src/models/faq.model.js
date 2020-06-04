import { Model, DataTypes } from 'sequelize'
import sequelize from '.'

class Faq extends Model {}

Faq.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  categoryId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  refId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  question: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  answer: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  createdBy: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  updatedBy: {
    type: DataTypes.UUID,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Faq'
})

export default Faq
