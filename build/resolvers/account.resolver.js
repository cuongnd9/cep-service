"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _joi = _interopRequireDefault(require("joi"));

var _middlewares = require("../components/middlewares");

var _account = _interopRequireDefault(require("../services/account.service"));

var resolver = {
  Query: {
    login: (0, _middlewares.middleware)((0, _middlewares.validateSchema)({
      password: _joi["default"].string().min(8).max(30),
      phone: _joi["default"].string().min(10).max(11)
    }), function (_, args) {
      return _account["default"].login(args);
    })
  },
  Mutation: {
    register: (0, _middlewares.middleware)((0, _middlewares.validateSchema)({
      password: _joi["default"].string().min(8).max(30),
      phone: _joi["default"].string().min(10).max(11)
    }), function (_, args) {
      return _account["default"].register(args);
    })
  }
};
var _default = resolver;
exports["default"] = _default;