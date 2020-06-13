import { thinid } from 'thinid';
import bcrypt from 'bcrypt';

import db from '../models';
import { ExistsError } from '../components/errors';

class AccountService {
  static async register(data) {
    const { password, ...userData } = data;
    const existsUser = await db.User.findOne({ where: { phone: userData.phone } });
    if (existsUser) {
      throw new ExistsError('Số điện thoại đã được đăng ký');
    }
    const newUser = await db.User.create({ ...userData });
    const hashPassword = await bcrypt.hash(password, 10);
    const accountData = {
      username: thinid(),
      password: hashPassword,
      userId: newUser.id,
    };
    const newAccount = await db.Account.create({ ...accountData });
    return {
      ...newUser.toJSON(),
      ...newAccount.toJSON(),
    };
  }
}

export default AccountService;
