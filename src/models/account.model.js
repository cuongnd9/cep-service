import { Model, DataTypes } from 'sequelize'
import sequelize from '.'

class Account extends Model {}

Account.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  username: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  roles: {
    type: DataTypes.ENUM(['admin']),
    allowNull: false,
  },
  userId: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Account'
})

export default Account
