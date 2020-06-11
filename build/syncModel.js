"use strict";

var _signale = _interopRequireDefault(require("signale"));

var _models = _interopRequireDefault(require("./models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _models["default"].Account.sync({
            force: true
          })["catch"](_signale["default"].watch);

        case 2:
          _context.next = 4;
          return _models["default"].Activity.sync({
            force: true
          })["catch"](_signale["default"].watch);

        case 4:
          _context.next = 6;
          return _models["default"].Agent.sync({
            force: true
          })["catch"](_signale["default"].watch);

        case 6:
          _context.next = 8;
          return _models["default"].Category.sync({
            force: true
          })["catch"](_signale["default"].watch);

        case 8:
          _context.next = 10;
          return _models["default"].DiaryNote.sync({
            force: true
          })["catch"](_signale["default"].watch);

        case 10:
          _context.next = 12;
          return _models["default"].Family.sync({
            force: true
          })["catch"](_signale["default"].watch);

        case 12:
          _context.next = 14;
          return _models["default"].FamilyActivity.sync({
            force: true
          })["catch"](_signale["default"].watch);

        case 14:
          _context.next = 16;
          return _models["default"].Faq.sync({
            force: true
          })["catch"](_signale["default"].watch);

        case 16:
          _context.next = 18;
          return _models["default"].Image.sync({
            force: true
          })["catch"](_signale["default"].watch);

        case 18:
          _context.next = 20;
          return _models["default"].Post.sync({
            force: true
          })["catch"](_signale["default"].watch);

        case 20:
          _context.next = 22;
          return _models["default"].PostImage.sync({
            force: true
          })["catch"](_signale["default"].watch);

        case 22:
          _context.next = 24;
          return _models["default"].Relationship.sync({
            force: true
          })["catch"](_signale["default"].watch);

        case 24:
          _context.next = 26;
          return _models["default"].RoleType.sync({
            force: true
          })["catch"](_signale["default"].watch);

        case 26:
          _context.next = 28;
          return _models["default"].User.sync({
            force: true
          })["catch"](_signale["default"].watch);

        case 28:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}))();