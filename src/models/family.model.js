import { Model, DataTypes } from 'sequelize'
import sequelize from '.'

class Family extends Model {}

Family.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  headOfFamily: {
    type: DataTypes.UUID,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Family'
})

export default Family
