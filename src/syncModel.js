import signale from 'signale';

import db from './models';

const syncModel = async () => {
  await db.User.sync({ force: true }).catch(signale.watch);
  // await db.Image.sync({ force: true }).catch(signale.watch);
  // await db.Account.sync({ force: true }).catch(signale.watch);
  // await db.Agent.sync({ force: true }).catch(signale.watch);
  // await db.Activity.sync({ force: true }).catch(signale.watch);
  // await db.Category.sync({ force: true }).catch(signale.watch);
  // await db.DiaryNote.sync({ force: true }).catch(signale.watch);
  // await db.Family.sync({ force: true }).catch(signale.watch);
  // await db.FamilyActivity.sync({ force: true }).catch(signale.watch);
  // await db.Faq.sync({ force: true }).catch(signale.watch);
  // await db.Post.sync({ force: true }).catch(signale.watch);
  // await db.PostImage.sync({ force: true }).catch(signale.watch);
  // await db.RoleType.sync({ force: true }).catch(signale.watch);
  // await db.Relationship.sync({ force: true }).catch(signale.watch);
};

export default syncModel;
