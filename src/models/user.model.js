import { Model, DataTypes } from 'sequelize'
import sequelize from '.'

class User extends Model {}

User.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  firstName: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  avatar: {
    type: DataTypes.UUID,
    allowNull: true,
  },
  phone: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  gender: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  dob: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  email: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  contactAddress: {
    type: DataTypes.JSONB,
    allowNull: true,
  },
  permanentAddress: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  nationalId: {
    type: DataTypes.TEXT,
    allowNull: true,
  }
}, {
  sequelize,
  modelName: 'User'
})

export default User
