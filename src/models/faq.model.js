import { Model, DataTypes } from 'sequelize';

import sequelize from '.';
import User from './user.model';
import Category from './category.model';

class Faq extends Model {}

Faq.init({
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
  refId: {
    type: DataTypes.UUID,
    references: {
      model: 'Faq',
      key: 'id'
    }
  },
  question: {
    type: DataTypes.TEXT,
  },
  answer: {
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
  modelName: 'Faq'
});

Faq.hasOne(Faq, {
  foreignKey: 'refId'
})
Faq.belongsTo(Category, {
  foreignKey: 'categoryId'
})
Faq.belongsTo(User), {
  foreignKey: 'createdBy'
};
Faq.belongsTo(User), {
  foreignKey: 'updatedBy'
};

export default Faq;
