"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var migration = {
  up: function up(queryInterface, Sequelize) {
    var scriptPath = _path["default"].join(__dirname, './script.sql');

    var sql = _fs["default"].readFileSync(scriptPath, {
      encoding: 'utf8'
    });

    return queryInterface.sequelize.query(sql, {
      type: Sequelize.QueryTypes.RAW
    });
  }
};
var _default = migration;
exports["default"] = _default;