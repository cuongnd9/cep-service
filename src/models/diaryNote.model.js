import { Model, DataTypes } from 'sequelize';

import sequelize from '.';
// import User from './user.model';
// import Image from './image.model';
// import Activity from './activity.model';

class DiaryNote extends Model {}

DiaryNote.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  title: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  notes: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  userId: {
    type: DataTypes.UUID,
    references: {
      model: 'User',
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
  imageId: {
    type: DataTypes.UUID,
    references: {
      model: 'Image',
      key: 'id'
    }
  },
  refId: {
    type: DataTypes.UUID,
    references: {
      model: 'DiaryNote',
      key: 'id'
    }
  },
  notes: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  status: {
    type: DataTypes.TEXT, // FIXME: ENUM
    allowNull: true,
  },
  policy: {
    type: DataTypes.TEXT, // FIXME: ENUM
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
  modelName: 'DiaryNote'
});

DiaryNote.hasOne(DiaryNote, {
  foreignKey: 'refId'
})
// DiaryNote.belongsTo(Image, {
//   foreignKey: 'imageId'
// })
// DiaryNote.belongsTo(User), {
//   foreignKey: 'userId'
// };
// DiaryNote.belongsTo(Activity, {
//   foreignKey: 'activityId'
// })
// DiaryNote.belongsTo(User), {
//   foreignKey: 'createdBy'
// };
// DiaryNote.belongsTo(User), {
//   foreignKey: 'updatedBy'
// };

export default DiaryNote;
