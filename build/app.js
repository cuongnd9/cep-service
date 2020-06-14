"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _graphqlYoga = require("graphql-yoga");

var _graphqlTools = require("graphql-tools");

var _signale = _interopRequireDefault(require("signale"));

var _utils = require("./components/utils");

var _typeDefs = _interopRequireDefault(require("./typeDefs"));

var _resolvers = _interopRequireDefault(require("./resolvers"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var app = function app() {
  var schema = (0, _graphqlTools.makeExecutableSchema)({
    typeDefs: _typeDefs["default"],
    resolvers: _resolvers["default"]
  });
  var server = new _graphqlYoga.GraphQLServer({
    schema: schema,
    context: function context(params) {
      var token = params.request.headers.token;
      return _objectSpread(_objectSpread({}, params), {}, {
        token: token
      });
    }
  });
  var options = {
    formatError: _utils.formatError,
    debug: false
  };
  server.start(options, function (_ref) {
    var port = _ref.port;
    return _signale["default"].watch("Server is running on http://127.0.0.1:".concat(port));
  });
};

var _default = app;
exports["default"] = _default;