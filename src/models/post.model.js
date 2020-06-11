import { Model, DataTypes } from 'sequelize';

import sequelize from '.';
// import Category from './category.model';
// import Image from './image.model';
import PostImage from './postImage.model';
// import User from './user.model';

class Post extends Model {}

Post.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  categoryId: {
    type: DataTypes.UUID,
    references: {
      model: 'Category',
      key: 'id'
    }
  },
  title: {
    type: DataTypes.TEXT,
  },
  shortDescription: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  longDescription: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  thumbnail: {
    type: DataTypes.UUID,
    references: {
      model: 'Image',
      key: 'id'
    }
  },
  keyword: {
    type: DataTypes.TEXT,
  },
  createdBy: {
    type: DataTypes.UUID,
    references: {
      model: 'User',
      key: 'id'
    }
  },
  updatedBy: {
    type: DataTypes.UUID,
    references: {
      model: 'User',
      key: 'id'
    }
  },
}, {
  sequelize,
  modelName: 'Post'
});

Post.hasMany(PostImage, {
  as: 'postImage',
  foreignKey: 'postId'
});
// Post.belongsTo(Image, {
//   foreignKey: 'thumbnail'
// });
// Post.belongsTo(Category, {
//   foreignKey: 'categoryId'
// });
// Post.belongsTo(User), {
//   foreignKey: 'createdBy'
// };
// Post.belongsTo(User), {
//   foreignKey: 'updatedBy'
// };

export default Post
