import joi from 'joi';

import { middleware, validateSchema } from '../components/middlewares';
import AccountService from '../services/account.service';

const resolver = {
  Query: {
    login: middleware(
      validateSchema({
        // password: joi.string().min(8).max(30),
        phone: joi.string().min(10).max(11),
      }),
      (_, args) => AccountService.login(args),
    ),
  },
  Mutation: {
    register: middleware(
      validateSchema({
        // password: joi.string().min(8).max(30),
        phone: joi.string().min(10).max(11),
      }),
      (_, args) => AccountService.register(args),
    ),
  },
};

export default resolver;
