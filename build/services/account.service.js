"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _thinid = require("thinid");

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _models = _interopRequireDefault(require("../models"));

var _config = _interopRequireDefault(require("../components/config"));

var _errors = require("../components/errors");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var AccountService = /*#__PURE__*/function () {
  function AccountService() {
    (0, _classCallCheck2["default"])(this, AccountService);
  }

  (0, _createClass2["default"])(AccountService, null, [{
    key: "login",
    value: function () {
      var _login = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(data) {
        var phone, password, user, account, match, id, role, _config$jwt, secretKey, algorithm, payload, token;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                phone = data.phone, password = data.password;
                _context.next = 3;
                return _models["default"].User.findOne({
                  where: {
                    phone: phone
                  }
                });

              case 3:
                user = _context.sent;

                if (user) {
                  _context.next = 6;
                  break;
                }

                throw new _errors.AuthenticationError('Tài khoản không tồn tại');

              case 6:
                _context.next = 8;
                return _models["default"].Account.findOne({
                  where: {
                    userId: user.id
                  }
                });

              case 8:
                account = _context.sent;
                _context.next = 11;
                return _bcrypt["default"].compare(password, account.password);

              case 11:
                match = _context.sent;

                if (match) {
                  _context.next = 14;
                  break;
                }

                throw new _errors.AuthenticationError('Mật khẩu không chính xác');

              case 14:
                id = account.id, role = account.role;
                _config$jwt = _config["default"].jwt, secretKey = _config$jwt.secretKey, algorithm = _config$jwt.algorithm;
                payload = {
                  id: id,
                  role: role
                };
                token = _jsonwebtoken["default"].sign(payload, secretKey, {
                  algorithm: algorithm
                });
                return _context.abrupt("return", {
                  token: token,
                  phone: phone
                });

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function login(_x) {
        return _login.apply(this, arguments);
      }

      return login;
    }()
  }, {
    key: "register",
    value: function () {
      var _register = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(data) {
        var password, userData, existsUser, newUser, hashPassword, accountData, newAccount;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                password = data.password, userData = (0, _objectWithoutProperties2["default"])(data, ["password"]);
                _context2.next = 3;
                return _models["default"].User.findOne({
                  where: {
                    phone: userData.phone
                  }
                });

              case 3:
                existsUser = _context2.sent;

                if (!existsUser) {
                  _context2.next = 6;
                  break;
                }

                throw new _errors.ExistsError('Số điện thoại đã được đăng ký');

              case 6:
                _context2.next = 8;
                return _models["default"].User.create(_objectSpread({}, userData));

              case 8:
                newUser = _context2.sent;
                _context2.next = 11;
                return _bcrypt["default"].hash(password, 10);

              case 11:
                hashPassword = _context2.sent;
                accountData = {
                  username: (0, _thinid.thinid)(),
                  password: hashPassword,
                  userId: newUser.id
                };
                _context2.next = 15;
                return _models["default"].Account.create(_objectSpread({}, accountData));

              case 15:
                newAccount = _context2.sent;
                return _context2.abrupt("return", _objectSpread(_objectSpread({}, newUser.toJSON()), newAccount.toJSON()));

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function register(_x2) {
        return _register.apply(this, arguments);
      }

      return register;
    }()
  }]);
  return AccountService;
}();

var _default = AccountService;
exports["default"] = _default;