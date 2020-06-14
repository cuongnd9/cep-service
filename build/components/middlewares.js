"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateSchema = exports.validateToken = exports.middleware = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _joi = _interopRequireDefault(require("joi"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _lodash = require("lodash");

var _config = _interopRequireDefault(require("./config"));

var _errors = require("./errors");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var middleware = function middleware() {
  for (var _len = arguments.length, parameters = new Array(_len), _key = 0; _key < _len; _key++) {
    parameters[_key] = arguments[_key];
  }

  return function (obj, args, context, info) {
    var resolver = parameters[parameters.length - 1];
    (0, _lodash.flow)((0, _toConsumableArray2["default"])(parameters.slice(0, parameters.length - 1)))(obj, args, context, info);
    return resolver(obj, args, context, info);
  };
};

exports.middleware = middleware;

var validateToken = function validateToken() {
  for (var _len2 = arguments.length, allowed = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    allowed[_key2] = arguments[_key2];
  }

  return function () {
    for (var _len3 = arguments.length, rest = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      rest[_key3] = arguments[_key3];
    }

    var flattenRest = (0, _lodash.flatten)(rest);
    var context = flattenRest[2];
    var token = context.token;

    if (!token) {
      throw new _errors.AuthenticationError('Không có token được cung cấp');
    }

    var secretKey = _config["default"].jwt.secretKey;

    _jsonwebtoken["default"].verify(token, secretKey, function (err, payload) {
      if (err) {
        throw new _errors.AuthenticationError('Token không hợp lệ');
      }

      if (allowed.indexOf(payload.role) > -1) {
        // eslint-disable-next-line no-param-reassign
        rest[2].payload = payload;
        return rest;
      }

      throw new _errors.AuthorizationError('Không có quyền truy cập tài nguyên');
    });
  };
};

exports.validateToken = validateToken;

var validateSchema = function validateSchema(schema) {
  return function () {
    for (var _len4 = arguments.length, rest = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      rest[_key4] = arguments[_key4];
    }

    var flattenRest = (0, _lodash.flatten)(rest);
    var root = flattenRest[0];
    var args = flattenRest[1];

    var value = _objectSpread(_objectSpread({}, root), args);

    var validateOptions = {
      allowUnknown: true,
      abortEarly: false
    };

    var validation = _joi["default"].validate(value, schema, validateOptions);

    if (validation.error) {
      throw new _errors.SchemaValidationError(validation.error);
    }

    return rest;
  };
};

exports.validateSchema = validateSchema;