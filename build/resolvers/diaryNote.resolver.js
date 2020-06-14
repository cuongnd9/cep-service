"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _joi = _interopRequireDefault(require("joi"));

var _middlewares = require("../components/middlewares");

var _diaryNote = _interopRequireDefault(require("../services/diaryNote.service"));

var _constants = require("../components/constants");

var resolver = {
  Query: {
    diaryNotes: (0, _middlewares.middleware)((0, _middlewares.validateToken)(_constants.ROLE.admin), (0, _middlewares.validateSchema)({
      offset: _joi["default"].number()["default"](0),
      limit: _joi["default"].number()["default"](10)
    }), function (_, args) {
      return _diaryNote["default"].getDiaryNotes(args);
    })
  },
  Mutation: {
    createDiaryNote: (0, _middlewares.middleware)((0, _middlewares.validateSchema)({
      policy: _joi["default"].string().valid(_constants.POLICY["public"], _constants.POLICY["private"])
    }), function (_, args) {
      return _diaryNote["default"].createDiaryNote(args);
    })
  }
};
var _default = resolver;
exports["default"] = _default;