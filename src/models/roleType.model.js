import { Model, DataTypes } from 'sequelize';

import sequelize from '.';
import Relationship from './relationship.model';

class RoleType extends Model {}

RoleType.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  description: {
    type: DataTypes.TEXT,
  },
}, {
  sequelize,
  modelName: 'RoleType'
});

RoleType.hasMany(Relationship, {
  as: 'relationshipRoleType1',
  foreignKey: 'roleType1'
});
RoleType.hasMany(Relationship, {
  as: 'relationshipRoleType2',
  foreignKey: 'roleType2'
});

export default RoleType
