"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = require("sequelize");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var User = /*#__PURE__*/function (_Model) {
  _inherits(User, _Model);

  var _super = _createSuper(User);

  function User() {
    _classCallCheck(this, User);

    return _super.apply(this, arguments);
  }

  _createClass(User, null, [{
    key: "init",
    value: function init(sequelize) {
      _get(_getPrototypeOf(User), "init", this).call(this, {
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
          type: _sequelize.DataTypes.TEXT,
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
        as: 'diaryNoteUserId',
        foreignKey: 'userId'
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