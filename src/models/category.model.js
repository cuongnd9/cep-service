import { Model, DataTypes } from 'sequelize'
import sequelize from '.'

class Category extends Model {}

Category.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  code: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  parentId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  count: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  orderBy: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  keyword: {
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
  modelName: 'Category'
})

export default Category
