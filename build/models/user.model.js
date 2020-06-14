"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _sequelize = require("sequelize");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var User = /*#__PURE__*/function (_Model) {
  (0, _inherits2["default"])(User, _Model);

  var _super = _createSuper(User);

  function User() {
    (0, _classCallCheck2["default"])(this, User);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(User, null, [{
    key: "init",
    value: function init(sequelize) {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(User), "init", this).call(this, {
        id: {
          type: _sequelize.DataTypes.UUID,
          primaryKey: true,
          defaultValue: _sequelize.DataTypes.UUIDV4
        },
        firstName: {
          type: _sequelize.DataTypes.TEXT,
          allowNull: true
        },
        lastName: {
          type: _sequelize.DataTypes.TEXT,
          allowNull: true
        },
        imageId: {
          type: _sequelize.DataTypes.UUID,
          allowNull: true,
          references: {
            model: 'images',
            key: 'id'
          }
        },
        phone: {
          type: _sequelize.DataTypes.TEXT,
          unique: true,
          allowNull: true
        },
        gender: {
          type: _sequelize.DataTypes.TEXT,
          allowNull: true
        },
        dob: {
          type: _sequelize.DataTypes.TEXT,
          allowNull: true
        },
        email: {
          type: _sequelize.DataTypes.TEXT,
          allowNull: true,
          unique: true
        },
        contactAddress: {
          type: _sequelize.DataTypes.JSONB,
          allowNull: true
        },
        permanentAddress: {
          type: _sequelize.DataTypes.JSONB,
          allowNull: true
        },
        nationalId: {
          type: _sequelize.DataTypes.TEXT,
          allowNull: true
        }
      }, {
        sequelize: sequelize,
        modelName: 'users'
      });
    }
  }, {
    key: "associate",
    value: function associate(models) {
      this.hasOne(models.Account, {
        as: 'account',
        foreignKey: 'userId'
      });
      this.hasOne(models.Agent, {
        as: 'agent',
        foreignKey: 'userId'
      });
      this.hasMany(models.Family, {
        as: 'family',
        foreignKey: 'headOfFamily'
      });
      this.hasMany(models.Relationship, {
        as: 'relationshipUserId1',
        foreignKey: 'userId1'
      });
      this.hasMany(models.Relationship, {
        as: 'relationshipUserId2',
        foreignKey: 'userId2'
      });
      this.hasMany(models.Category, {
        as: 'categoryCreatedBy',
        foreignKey: 'createdBy'
      });
      this.hasMany(models.Category, {
        as: 'categoryUpdatedBy',
        foreignKey: 'updatedBy'
      });
      this.hasMany(models.Post, {
        as: 'postCreatedBy',
        foreignKey: 'createdBy'
      });
      this.hasMany(models.Post, {
        as: 'postUpdatedBy',
        foreignKey: 'updatedBy'
      });
      this.hasMany(models.PostImage, {
        as: 'postImageCreatedBy',
        foreignKey: 'createdBy'
      });
      this.hasMany(models.PostImage, {
        as: 'postImageUpdatedBy',
        foreignKey: 'updatedBy'
      });
      this.hasMany(models.Image, {
        as: 'imageCreatedBy',
        foreignKey: 'createdBy'
      });
      this.hasMany(models.Image, {
        as: 'imageUpdatedBy',
        foreignKey: 'updatedBy'
      });
      this.hasMany(models.Faq, {
        as: 'faqCreatedBy',
        foreignKey: 'createdBy'
      });
      this.hasMany(models.Faq, {
        as: 'faqUpdatedBy',
        foreignKey: 'updatedBy'
      });
      this.hasMany(models.Activity, {
        as: 'activityCreatedBy',
        foreignKey: 'createdBy'
      });
      this.hasMany(models.Activity, {
        as: 'activityUpdatedBy',
        foreignKey: 'updatedBy'
      });
      this.hasMany(models.DiaryNote, {
        as: 'diaryNoteCreatedBy',
        foreignKey: 'createdBy'
      });
      this.hasMany(models.DiaryNote, {
        as: 'diaryNoteUpdatedBy',
        foreignKey: 'updatedBy'
      });
      this.belongsTo(models.Image, {
        foreignKey: 'imageId'
      });
    }
  }]);
  return User;
}(_sequelize.Model);

var _default = User;
exports["default"] = _default;