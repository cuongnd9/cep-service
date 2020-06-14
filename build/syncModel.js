"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _signale = _interopRequireDefault(require("signale"));

var _models = _interopRequireDefault(require("./models"));

var syncModel = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _models["default"].User.sync({
              force: true
            })["catch"](_signale["default"].debug);

          case 2:
            _context.next = 4;
            return _models["default"].Image.sync({
              force: true
            })["catch"](_signale["default"].debug);

          case 4:
            _context.next = 6;
            return _models["default"].Account.sync({
              force: true
            })["catch"](_signale["default"].debug);

          case 6:
            _context.next = 8;
            return _models["default"].Agent.sync({
              force: true
            })["catch"](_signale["default"].debug);

          case 8:
            _context.next = 10;
            return _models["default"].Activity.sync({
              force: true
            })["catch"](_signale["default"].debug);

          case 10:
            _context.next = 12;
            return _models["default"].Category.sync({
              force: true
            })["catch"](_signale["default"].debug);

          case 12:
            _context.next = 14;
            return _models["default"].DiaryNote.sync({
              force: true
            })["catch"](_signale["default"].debug);

          case 14:
            _context.next = 16;
            return _models["default"].Family.sync({
              force: true
            })["catch"](_signale["default"].debug);

          case 16:
            _context.next = 18;
            return _models["default"].FamilyActivity.sync({
              force: true
            })["catch"](_signale["default"].debug);

          case 18:
            _context.next = 20;
            return _models["default"].Faq.sync({
              force: true
            })["catch"](_signale["default"].debug);

          case 20:
            _context.next = 22;
            return _models["default"].Post.sync({
              force: true
            })["catch"](_signale["default"].debug);

          case 22:
            _context.next = 24;
            return _models["default"].PostImage.sync({
              force: true
            })["catch"](_signale["default"].debug);

          case 24:
            _context.next = 26;
            return _models["default"].RoleType.sync({
              force: true
            })["catch"](_signale["default"].debug);

          case 26:
            _context.next = 28;
            return _models["default"].Relationship.sync({
              force: true
            })["catch"](_signale["default"].debug);

          case 28:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function syncModel() {
    return _ref.apply(this, arguments);
  };
}();

var _default = syncModel;
exports["default"] = _default;