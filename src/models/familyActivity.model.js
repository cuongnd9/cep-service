import { Model, DataTypes } from 'sequelize'
import sequelize from '.'

class FamilyActivity extends Model {}

FamilyActivity.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  familyId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  activityId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'FamilyActivity'
})

export default FamilyActivity
