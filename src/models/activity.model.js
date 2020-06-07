import { Model, DataTypes } from 'sequelize';

import sequelize from '.';
import Image from './image.model';
import User from './user.model';
import FamilyActivity from './familyActivity.model';
import DiaryNote from './diaryNote.model';

class Activity extends Model {}

Activity.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  imageId: {
    type: DataTypes.UUID,
    references: {
      model: 'Image',
      key: 'id'
    },
    allowNull: true
  },
  name: {
    type: DataTypes.TEXT,
  },
  type: {
    type: DataTypes.TEXT, // FIXME: ENUM
    allowNull: true,
  },
  shortDescription: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  longDescription: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  keyword: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  source: {
    type: DataTypes.TEXT,
    allowNull: true,
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
  modelName: 'Activity'
});

Activity.hasMany(FamilyActivity, {
  as: 'familyActivity',
  foreignKey: 'activityId'
})
Activity.hasMany(DiaryNote, {
  foreignKey: 'activityId'
})
Activity.belongsTo(Image, {
  foreignKey: 'imageId'
})
Activity.belongsTo(User), {
  foreignKey: 'createdBy'
};
Activity.belongsTo(User), {
  foreignKey: 'updatedBy'
};

export default Activity
