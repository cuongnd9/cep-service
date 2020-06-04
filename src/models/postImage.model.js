import { Model, DataTypes } from 'sequelize'
import sequelize from '.'

class PostImage extends Model { }

PostImage.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  postId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  imageId: {
    type: DataTypes.UUID,
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
  modelName: 'PostImage'
})

export default PostImage
