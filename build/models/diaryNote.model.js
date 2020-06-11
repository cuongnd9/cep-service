"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = require("sequelize");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var DiaryNote = /*#__PURE__*/function (_Model) {
  _inherits(DiaryNote, _Model);

  var _super = _createSuper(DiaryNote);

  function DiaryNote() {
    _classCallCheck(this, DiaryNote);

    return _super.apply(this, arguments);
  }

  _createClass(DiaryNote, null, [{
    key: "init",
    value: function init(sequelize) {
      var _get$call;

      _get(_getPrototypeOf(DiaryNote), "init", this).call(this, (_get$call = {
        id: {
          type: _sequelize.DataTypes.UUID,
          primaryKey: true,
          defaultValue: _sequelize.DataTypes.UUIDV4
        },
        title: {
          type: _sequelize.DataTypes.TEXT,
          allowNull: true
        },
        notes: {
          type: _sequelize.DataTypes.TEXT,
          allowNull: true
        },
        userId: {
          type: _sequelize.DataTypes.UUID,
          references: {
            model: 'users',
            key: 'id'
          }
        },
        activityId: {
          type: _sequelize.DataTypes.UUID,
          references: {
            model: 'activities',
            key: 'id'
          }
        },
        imageId: {
          type: _sequelize.DataTypes.UUID,
          references: {
            model: 'images',
            key: 'id'
          }
        },
        refId: {
          type: _sequelize.DataTypes.UUID,
          references: {
            model: 'diaryNotes',
            key: 'id'
          }
        }
      }, _defineProperty(_get$call, "notes", {
        type: _sequelize.DataTypes.TEXT,
        allowNull: true
      }), _defineProperty(_get$call, "status", {
        type: _sequelize.DataTypes.TEXT,
        // FIXME: ENUM
        allowNull: true
      }), _defineProperty(_get$call, "policy", {
        type: _sequelize.DataTypes.TEXT,
        // FIXME: ENUM
        allowNull: true
      }), _defineProperty(_get$call, "createdBy", {
        type: _sequelize.DataTypes.UUID,
        references: {
          model: 'users',
          key: 'id'
        }
      }), _defineProperty(_get$call, "updatedBy", {
        type: _sequelize.DataTypes.UUID,
        references: {
          model: 'users',
          key: 'id'
        }
      }), _get$call), {
        sequelize: sequelize,
        modelName: 'diaryNotes'
      });
    }
  }, {
    key: "associate",
    value: function associate(models) {
      this.hasOne(models.DiaryNote, {
        foreignKey: 'refId'
      });
      this.belongsTo(models.Image, {
        foreignKey: 'imageId'
      });
      this.belongsTo(models.User), {
        as: 'user',
        foreignKey: 'userId'
      };
      this.belongsTo(models.Activity, {
        foreignKey: 'activityId'
      });
      this.belongsTo(models.User), {
        as: 'createdBy',
        foreignKey: 'createdBy'
      };
      this.belongsTo(models.User), {
        as: 'updatedBy',
        foreignKey: 'updatedBy'
      };
    }
  }]);

  return DiaryNote;
}(_sequelize.Model);

var _default = DiaryNote;
exports["default"] = _default;