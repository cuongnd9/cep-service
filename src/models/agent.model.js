import { Model, DataTypes } from 'sequelize'
import sequelize from '.'

class Agent extends Model {}

Agent.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  referenceId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  roles: {
    type: DataTypes.ENUM[''],
    allowNull: false,
  },
  official: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  room: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  officialAddress: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  officialPhone: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Agent'
})

export default Agent
