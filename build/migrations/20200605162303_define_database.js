"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var migration = {
  up: function up(queryInterface, Sequelize) {
    var sql = '';
    return queryInterface.sequelize.query(sql, {
      type: Sequelize.QueryTypes.RAW
    });
  }
};
var _default = migration;
exports["default"] = _default;