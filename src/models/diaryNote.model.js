import { Model, DataTypes } from 'sequelize';

class DiaryNote extends Model {
  static init(sequelize) {
    super.init({
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
          model: 'users',
          key: 'id'
        }
      },
      activityId: {
        type: DataTypes.UUID,
        references: {
          model: 'activities',
          key: 'id'
        }
      },
      imageId: {
        type: DataTypes.UUID,
        references: {
          model: 'images',
          key: 'id'
        }
      },
      refId: {
        type: DataTypes.UUID,
        references: {
          model: 'diary_notes',
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
          model: 'users',
          key: 'id'
        }
      },
      updatedBy: {
        type: DataTypes.UUID,
        references: {
          model: 'users',
          key: 'id'
        }
      },
    }, {
      sequelize,
      modelName: 'diary_notes'
    });
  }

  static associate(models) {
    this.hasOne(models.DiaryNote, {
      foreignKey: 'refId'
    })
    this.belongsTo(models.Image, {
      foreignKey: 'imageId'
    })
    this.belongsTo(models.User), {
      as: 'user',
      foreignKey: 'userId'
    };
    this.belongsTo(models.Activity, {
      foreignKey: 'activityId'
    })
    this.belongsTo(models.User), {
      as: 'createdBy',
      foreignKey: 'createdBy'
    };
    this.belongsTo(models.User), {
      as: 'updatedBy',
      foreignKey: 'updatedBy'
    };
  }
}

export default DiaryNote;
