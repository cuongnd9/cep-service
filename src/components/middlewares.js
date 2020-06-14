import joi from 'joi';
import jwt from 'jsonwebtoken';
import { flow, flatten } from 'lodash';

import config from './config';
import { SchemaValidationError, AuthenticationError, AuthorizationError } from './errors';

export const middleware = (...parameters) => (obj, args, context, info) => {
  const resolver = parameters[parameters.length - 1];
  flow([...parameters.slice(0, parameters.length - 1)])(obj, args, context, info);
  return resolver(obj, args, context, info);
};

export const validateToken = (...allowed) => (...rest) => {
  const flattenRest = flatten(rest);
  const context = flattenRest[2];
  const { token } = context;
  if (!token) {
    throw new AuthenticationError('Không có token được cung cấp');
  }
  const { secretKey } = config.jwt;
  jwt.verify(token, secretKey, (err, payload) => {
    if (err) {
      throw new AuthenticationError('Token không hợp lệ');
    }
    if (allowed.indexOf(payload.role) > -1) {
      // eslint-disable-next-line no-param-reassign
      rest[2].payload = payload;
      return rest;
    }
    throw new AuthorizationError('Không có quyền truy cập tài nguyên');
  });
};

export const validateSchema = (schema) => (...rest) => {
  const flattenRest = flatten(rest);
  const root = flattenRest[0];
  const args = flattenRest[1];
  const value = {
    ...root,
    ...args,
  };
  const validateOptions = { allowUnknown: true, abortEarly: false };
  const validation = joi.validate(value, schema, validateOptions);
  if (validation.error) {
    throw new SchemaValidationError(validation.error);
  }
  return rest;
};
