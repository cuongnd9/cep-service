import path from 'path';
import signale from 'signale';
import { migrateDB } from './components/utils';
import sequelize from './models';
import app from './app';

const main = async () => {
  // await sequelize.sync({ force: true }).catch(signale.watch);
  const pathToMigration = path.join(__dirname, 'migrations');
  await migrateDB(sequelize, pathToMigration).catch(signale.watch);
  app();
};

main();
