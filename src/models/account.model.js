import { Model, DataTypes } from 'sequelize';

import sequelize from '.';
// import User from './user.model';

class Account extends Model {}

Account.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  username: {
    type: DataTypes.TEXT,
    unique: true,
    defaultValue: DataTypes.UUIDV4
  },
  password: {
    type: DataTypes.TEXT,
  },
  role: {
    type: DataTypes.ENUM('admin'),
    allowNull: true,
  },
  userId: {
    type: DataTypes.UUID,
    references: {
      model: 'User',
      key: 'id'
    }
  },
}, {
  sequelize,
  modelName: 'Account'
});

// Account.belongsTo(User, {
//   foreignKey: 'userId'
// });

export default Account
