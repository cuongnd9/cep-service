import { Model, DataTypes } from 'sequelize';

import sequelize from '.';
import Post from './post.model';
import Image from './image.model';
import User from './user.model';

class PostImage extends Model { }

PostImage.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  postId: {
    type: DataTypes.UUID,
    references: {
      model: 'Post',
      key: 'id'
    }
  },
  imageId: {
    type: DataTypes.UUID,
    references: {
      model: 'Image',
      key: 'id'
    }
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
  modelName: 'PostImage'
});

PostImage.belongsTo(Post, {
  foreignKey: 'postId'
});
PostImage.belongsTo(Image, {
  foreignKey: 'imageId'
});
PostImage.belongsTo(User), {
  foreignKey: 'createdBy'
};
PostImage.belongsTo(User), {
  foreignKey: 'updatedBy'
};

export default PostImage;
