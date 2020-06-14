"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _models = _interopRequireDefault(require("../models"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var DiaryNoteService = /*#__PURE__*/function () {
  function DiaryNoteService() {
    (0, _classCallCheck2["default"])(this, DiaryNoteService);
  }

  (0, _createClass2["default"])(DiaryNoteService, null, [{
    key: "getDiaryNotes",
    value: function getDiaryNotes(data) {
      var offset = data.offset,
          limit = data.limit;
      return _models["default"].DiaryNote.findAll({
        offset: offset,
        limit: limit
      });
    }
  }, {
    key: "createDiaryNote",
    value: function createDiaryNote(data) {
      return _models["default"].DiaryNote.create(_objectSpread({}, data));
    }
  }]);
  return DiaryNoteService;
}();

var _default = DiaryNoteService;
exports["default"] = _default;