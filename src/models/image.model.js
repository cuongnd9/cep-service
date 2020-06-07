import { Model, DataTypes } from 'sequelize';

import sequelize from '.';
import User from './user.model';
import PostImage from './postImage.model';
import Activity from './activity.model';
import DiaryNote from './diaryNote.model';

class Image extends Model { }

Image.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  publicId: {
    type: DataTypes.TEXT,
  },
  url: {
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
  modelName: 'Image'
});

Image.hasMany(PostImage, {
  as: 'postImage',
  foreignKey: 'imageId'
});
Image.hasOne(User, {
  as: 'user',
  foreignKey: 'imageId'
});
Image.hasMany(Activity, {
  foreignKey: 'imageId'
});
Image.hasOne(DiaryNote, {
  foreignKey: 'imageId'
})
Image.belongsTo(User), {
  foreignKey: 'createdBy'
};
Image.belongsTo(User), {
  foreignKey: 'updatedBy'
};

export default Image
