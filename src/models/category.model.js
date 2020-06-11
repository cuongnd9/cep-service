import { Model, DataTypes } from 'sequelize';

import sequelize from '.';
import Post from './post.model';
import Faq from './faq.model';
// import User from './user.model';

class Category extends Model {}

Category.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  code: {
    type: DataTypes.STRING,
  },
  parentId: {
    type: DataTypes.UUID,
    references: {
      model: 'Category',
      key: 'id'
    }
  },
  count: {
    type: DataTypes.NUMBER,
  },
  orderBy: {
    type: DataTypes.NUMBER,
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
  modelName: 'Category'
});

Category.hasMany(Post, {
  as: 'post',
  foreignKey: 'categoryId',
});
Category.hasMany(Faq, {
  as: 'faq',
  foreignKey: 'categoryId'
})
Category.hasOne(Category, {
  as: 'category',
  foreignKey: 'parentId'
});
// Category.belongsTo(User), {
//   foreignKey: 'createdBy'
// };
// Category.belongsTo(User), {
//   foreignKey: 'updatedBy'
// };

export default Category;
