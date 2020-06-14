"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var config = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 4000,
  pgHost: process.env.PG_HOST || 'db',
  pgPort: process.env.PG_PORT || 5432,
  pgDB: process.env.PG_DB || 'cep-service',
  pgUser: process.env.PG_USER || 'postgres',
  pgPassword: process.env.PG_PASSWORD || 'postgres',
  jwt: {
    secretKey: process.env.SECRET_KEY || 'csjhgt2gh',
    algorithm: process.env.ALGORITHM || 'HS256',
    expiresIn: process.env.EXPIRES_IN || '30m'
  }
};
var _default = config;
exports["default"] = _default;