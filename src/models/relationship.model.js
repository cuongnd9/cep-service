import { Model, DataTypes } from 'sequelize';

import sequelize from '.';
import User from './user.model';
import Family from './family.model';
import RoleType from './roleType.model';

class Relationship extends Model {}

Relationship.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  familyId: {
    type: DataTypes.UUID,
    references: {
      model: 'Family',
      key: 'id'
    }
  },
  userId1: {
    type: DataTypes.UUID,
    references: {
      model: 'User',
      key: 'id'
    }
  },
  userId2: {
    type: DataTypes.UUID,
    references: {
      model: 'User',
      key: 'id'
    }
  },
  relationship: {
    type: DataTypes.TEXT, // FIXME: ENUM
    allowNull: true,
  },
  roleType1: {
    type: DataTypes.UUID,
    references: {
      model: 'RoleType',
      key: 'id'
    }
  },
  roleType2: {
    type: DataTypes.UUID,
    references: {
      model: 'RoleType',
      key: 'id'
    }
  },
}, {
  sequelize,
  modelName: 'Relationship'
});

Relationship.belongsTo(Family, {
  foreignKey: 'familyId'
})
Relationship.belongsTo(User, {
  foreignKey: 'userId1'
});
Relationship.belongsTo(User, {
  foreignKey: 'userId2'
});
Relationship.belongsTo(RoleType, {
  foreignKey: 'roleType1'
});
Relationship.belongsTo(RoleType, {
  foreignKey: 'roleType2'
});

export default Relationship;
