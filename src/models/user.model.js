import { Model, DataTypes } from 'sequelize';

import sequelize from '.';
import Account from './account.model';
import Agent from './agent.model';
import Image from './image.model';
import Category from './category.model';
import Post from './post.model';
import PostImage from './postImage.model';
import Faq from './faq.model';
import Family from './family.model';
import Relationship from './relationship.model';
import Activity from './activity.model';
import DiaryNote from './diaryNote.model';

class User extends Model {}

User.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  firstName: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  lastName: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  imageId: {
    type: DataTypes.UUID,
    allowNull: true,
    references: {
      model: 'Image',
      key: 'id'
    }
  },
  phone: {
    type: DataTypes.TEXT,
    unique: true,
    allowNull: true,
  },
  gender: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  dob: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  email: {
    type: DataTypes.TEXT,
    allowNull: true,
    unique: true
  },
  contactAddress: {
    type: DataTypes.JSONB,
    allowNull: true,
  },
  permanentAddress: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  nationalId: {
    type: DataTypes.TEXT,
    allowNull: true,
  }
}, {
  sequelize,
  modelName: 'User'
});

User.hasOne(Account, {
  as: 'account',
  foreignKey: 'userId'
});
User.hasOne(Agent, {
  as: 'agent',
  foreignKey: 'userId'
});
User.hasMany(Family, {
  as: 'family',
  foreignKey: 'headOfFamily'
})
User.hasMany(Relationship, {
  as: 'relationshipUserId1',
  foreignKey: 'userId1'
});
User.hasMany(Relationship, {
  as: 'relationshipUserId2',
  foreignKey: 'userId2'
});
User.hasMany(Category, {
  as: 'categoryCreatedBy',
  foreignKey: 'createdBy'
});
User.hasMany(Category, {
  as: 'categoryUpdatedBy',
  foreignKey: 'updatedBy'
});
User.hasMany(Post, {
  as: 'postCreatedBy',
  foreignKey: 'createdBy'
});
User.hasMany(Post, {
  as: 'postUpdatedBy',
  foreignKey: 'updatedBy'
});
User.hasMany(PostImage, {
  as: 'postImageCreatedBy',
  foreignKey: 'createdBy'
});
User.hasMany(PostImage, {
  as: 'postImageUpdatedBy',
  foreignKey: 'updatedBy'
});
User.hasMany(Image, {
  as: 'imageCreatedBy',
  foreignKey: 'createdBy'
});
User.hasMany(Image, {
  as: 'imageUpdatedBy',
  foreignKey: 'updatedBy'
});
User.hasMany(Faq, {
  as: 'faqCreatedBy',
  foreignKey: 'createdBy'
});
User.hasMany(Faq, {
  as: 'faqUpdatedBy',
  foreignKey: 'updatedBy'
});
User.hasMany(Activity, {
  as: 'activityCreatedBy',
  foreignKey: 'createdBy'
});
User.hasMany(Activity, {
  as: 'activityUpdatedBy',
  foreignKey: 'updatedBy'
});
User.hasMany(DiaryNote, {
  as: 'diaryNoteUserId',
  foreignKey: 'userId'
});
User.hasMany(DiaryNote, {
  as: 'diaryNoteCreatedBy',
  foreignKey: 'createdBy'
});
User.hasMany(DiaryNote, {
  as: 'ddiaryNoteUpdatedBy',
  foreignKey: 'updatedBy'
});
// User.belongsTo(Image, {
//   foreignKey: 'imageId'
// });

export default User;
