import { Model, DataTypes } from 'sequelize'
import sequelize from '.'

class RoleType extends Model {}

RoleType.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'RoleType'
})

export default RoleType
