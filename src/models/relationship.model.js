import { Model, DataTypes } from 'sequelize'
import sequelize from '.'

class Relationship extends Model {}

Relationship.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  familyId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  userId1: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  userId2: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  relationship: {
    type: DataTypes.ENUM(['']),
    allowNull: false,
  },
  roleType1: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  roleType2: {
    type: DataTypes.UUID,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Relationship'
})

export default Relationship
