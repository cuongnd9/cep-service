"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _sequelize = require("sequelize");

var _signale = _interopRequireDefault(require("signale"));

var _account = _interopRequireDefault(require("./account.model"));

var _activity = _interopRequireDefault(require("./activity.model"));

var _agent = _interopRequireDefault(require("./agent.model"));

var _category = _interopRequireDefault(require("./category.model"));

var _diaryNote = _interopRequireDefault(require("./diaryNote.model"));

var _family = _interopRequireDefault(require("./family.model"));

var _familyActivity = _interopRequireDefault(require("./familyActivity.model"));

var _faq = _interopRequireDefault(require("./faq.model"));

var _image = _interopRequireDefault(require("./image.model"));

var _post = _interopRequireDefault(require("./post.model"));

var _postImage = _interopRequireDefault(require("./postImage.model"));

var _relationship = _interopRequireDefault(require("./relationship.model"));

var _roleType = _interopRequireDefault(require("./roleType.model"));

var _user = _interopRequireDefault(require("./user.model"));

var _config = _interopRequireDefault(require("../components/config"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var sequelize = new _sequelize.Sequelize({
  dialect: 'postgres',
  username: _config["default"].pgUser,
  password: _config["default"].pgPassword,
  database: _config["default"].pgDB,
  host: _config["default"].pgHost,
  port: _config["default"].pgPort,
  logging: _config["default"].nodeEnv === 'development' ? console.log : false,
  define: {
    underscored: true
  }
});
sequelize.authenticate()["catch"](function (e) {
  _signale["default"].watch(e);

  process.exit(1);
});
var models = {
  Account: _account["default"],
  Activity: _activity["default"],
  Agent: _agent["default"],
  Category: _category["default"],
  DiaryNote: _diaryNote["default"],
  Family: _family["default"],
  FamilyActivity: _familyActivity["default"],
  Faq: _faq["default"],
  Image: _image["default"],
  Post: _post["default"],
  PostImage: _postImage["default"],
  Relationship: _relationship["default"],
  RoleType: _roleType["default"],
  User: _user["default"]
};
Object.values(models).forEach(function (model) {
  return model.init(sequelize);
});
Object.values(models).filter(function (model) {
  return typeof model.associate === 'function';
}).forEach(function (model) {
  return model.associate(models);
});

var db = _objectSpread({
  sequelize: sequelize
}, models);

var _default = db;
exports["default"] = _default;