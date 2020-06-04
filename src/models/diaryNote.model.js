import { Model, DataTypes } from 'sequelize'
import sequelize from '.'

class DiaryNote extends Model {}

DiaryNote.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  activityId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  imageId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  refId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  notes: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM,
    allowNull: false,
  },
  policy: {
    type: DataTypes.ENUM,
    allowNull: false,
  },
  createdBy: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  updatedBy: {
    type: DataTypes.UUID,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'DiaryNote'
})

export default DiaryNote
