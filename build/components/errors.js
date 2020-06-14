"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExistsError = exports.NotFoundError = exports.AuthorizationError = exports.AuthenticationError = exports.SchemaValidationError = exports.DatabaseValidationError = exports.DatabaseError = exports.BusinessError = exports.AppError = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _apolloServerErrors = require("apollo-server-errors");

var _lodash = require("lodash");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var AppError = /*#__PURE__*/function (_ApolloError) {
  (0, _inherits2["default"])(AppError, _ApolloError);

  var _super = _createSuper(AppError);

  function AppError() {
    var _this;

    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Internal Service Error';
    (0, _classCallCheck2["default"])(this, AppError);
    _this = _super.call(this, message);
    _this.extensions.code = (0, _lodash.snakeCase)(_this.constructor.name).toUpperCase();
    return _this;
  }

  return AppError;
}(_apolloServerErrors.ApolloError);

exports.AppError = AppError;

var BusinessError = /*#__PURE__*/function (_ApolloError2) {
  (0, _inherits2["default"])(BusinessError, _ApolloError2);

  var _super2 = _createSuper(BusinessError);

  function BusinessError() {
    var _this2;

    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'There is business error happened';
    (0, _classCallCheck2["default"])(this, BusinessError);
    _this2 = _super2.call(this, message);
    _this2.extensions.code = (0, _lodash.snakeCase)(_this2.constructor.name).toUpperCase();
    return _this2;
  }

  return BusinessError;
}(_apolloServerErrors.ApolloError);

exports.BusinessError = BusinessError;

var DatabaseError = /*#__PURE__*/function (_AppError) {
  (0, _inherits2["default"])(DatabaseError, _AppError);

  var _super3 = _createSuper(DatabaseError);

  function DatabaseError() {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'There is database error happened';
    (0, _classCallCheck2["default"])(this, DatabaseError);
    return _super3.call(this, message);
  }

  return DatabaseError;
}(AppError);

exports.DatabaseError = DatabaseError;

var DatabaseValidationError = /*#__PURE__*/function (_AppError2) {
  (0, _inherits2["default"])(DatabaseValidationError, _AppError2);

  var _super4 = _createSuper(DatabaseValidationError);

  function DatabaseValidationError() {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'There is database validation error happened';
    (0, _classCallCheck2["default"])(this, DatabaseValidationError);
    return _super4.call(this, message);
  }

  return DatabaseValidationError;
}(AppError);

exports.DatabaseValidationError = DatabaseValidationError;

var SchemaValidationError = /*#__PURE__*/function (_BusinessError) {
  (0, _inherits2["default"])(SchemaValidationError, _BusinessError);

  var _super5 = _createSuper(SchemaValidationError);

  function SchemaValidationError(error) {
    var _this3;

    (0, _classCallCheck2["default"])(this, SchemaValidationError);
    _this3 = _super5.call(this, error.message);
    var payload = {};
    error.details.forEach(function (item) {
      var path = item.path,
          type = item.type,
          message = item.message,
          context = item.context;
      payload = _objectSpread(_objectSpread({}, payload), {}, (0, _defineProperty2["default"])({}, path.toString(), {
        message: message,
        type: type,
        context: context
      }));
    });
    _this3.extensions.payload = payload;
    return _this3;
  }

  return SchemaValidationError;
}(BusinessError);

exports.SchemaValidationError = SchemaValidationError;

var AuthenticationError = /*#__PURE__*/function (_BusinessError2) {
  (0, _inherits2["default"])(AuthenticationError, _BusinessError2);

  var _super6 = _createSuper(AuthenticationError);

  function AuthenticationError() {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'There is authentication error happened';
    (0, _classCallCheck2["default"])(this, AuthenticationError);
    return _super6.call(this, message);
  }

  return AuthenticationError;
}(BusinessError);

exports.AuthenticationError = AuthenticationError;

var AuthorizationError = /*#__PURE__*/function (_BusinessError3) {
  (0, _inherits2["default"])(AuthorizationError, _BusinessError3);

  var _super7 = _createSuper(AuthorizationError);

  function AuthorizationError() {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'There is authorization error happened';
    (0, _classCallCheck2["default"])(this, AuthorizationError);
    return _super7.call(this, message);
  }

  return AuthorizationError;
}(BusinessError);

exports.AuthorizationError = AuthorizationError;

var NotFoundError = /*#__PURE__*/function (_BusinessError4) {
  (0, _inherits2["default"])(NotFoundError, _BusinessError4);

  var _super8 = _createSuper(NotFoundError);

  function NotFoundError() {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'There is not found error happened';
    (0, _classCallCheck2["default"])(this, NotFoundError);
    return _super8.call(this, message);
  }

  return NotFoundError;
}(BusinessError);

exports.NotFoundError = NotFoundError;

var ExistsError = /*#__PURE__*/function (_BusinessError5) {
  (0, _inherits2["default"])(ExistsError, _BusinessError5);

  var _super9 = _createSuper(ExistsError);

  function ExistsError() {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'There is exists error happened';
    (0, _classCallCheck2["default"])(this, ExistsError);
    return _super9.call(this, message);
  }

  return ExistsError;
}(BusinessError);

exports.ExistsError = ExistsError;