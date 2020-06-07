import { Model, DataTypes } from 'sequelize';

import sequelize from '.';
import Family from './family.model';
import Activity from './activity.model';

class FamilyActivity extends Model {}

FamilyActivity.init({
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
  activityId: {
    type: DataTypes.UUID,
    references: {
      model: 'Activity',
      key: 'id'
    }
  },
}, {
  sequelize,
  modelName: 'FamilyActivity'
});

FamilyActivity.belongsTo(Family, {
  foreignKey: 'familyId'
});
FamilyActivity.belongsTo(Activity, {
  foreignKey: 'activityId'
});

export default FamilyActivity;
