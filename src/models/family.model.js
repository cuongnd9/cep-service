import { Model, DataTypes } from 'sequelize';

import sequelize from '.';
import User from './user.model';
import Relationship from './relationship.model';

class Family extends Model {}

Family.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  name: {
    type: DataTypes.TEXT,
  },
  headOfFamily: {
    type: DataTypes.UUID,
    references: {
      model: 'User',
      key: 'id'
    }
  },
}, {
  sequelize,
  modelName: 'Family'
});

Family.hasMany(FamilyActivity, {
  as: 'familyActivity',
  foreignKey: 'familyId'
})
Family.hasMany(Relationship, {
  as: 'relationship',
  foreignKey: 'familyId'
});
Family.belongsTo(User, {
  foreignKey: 'headOfFamily'
});

export default Family;
