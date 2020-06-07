import { Model, DataTypes } from 'sequelize';

import sequelize from '.';
import User from './user.model';

class Agent extends Model { }

Agent.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  userId: {
    type: DataTypes.UUID,
    references: {
      model: 'User',
      key: 'id'
    }
  },
  referenceId: {
    type: DataTypes.UUID,
    references: {
      model: 'Agent',
      key: 'id'
    }
  },
  roles: {
    type: DataTypes.TEXT, // FIXME: ENUM
    allowNull: true,
  },
  official: {
    type: DataTypes.TEXT,
  },
  room: {
    type: DataTypes.TEXT,
  },
  officialAddress: {
    type: DataTypes.TEXT,
  },
  officialPhone: {
    type: DataTypes.TEXT,
  },
}, {
  sequelize,
  modelName: 'Agent'
});

Agent.belongsTo(User, {
  foreignKey: 'userId'
});
Agent.hasOne(Agent, {
  as: 'agent',
  foreignKey: 'referenceId',
});

export default Agent;
