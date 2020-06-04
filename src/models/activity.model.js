import { Model, DataTypes } from 'sequelize'
import sequelize from '.'

class Activity extends Model {}

Activity.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  imageId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM(['']),
    allowNull: false,
  },
  shortDescription: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  longDescription: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  keyword: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  source: {
    type: DataTypes.TEXT,
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
  modelName: 'Activity'
})

export default Activity
