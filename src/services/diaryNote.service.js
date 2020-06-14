import { Op } from 'sequelize';
import { uniq, flatten } from 'lodash';

import db from '../models';
import { DIARY_FILTER } from '../components/constants';

class DiaryNoteService {
  static async getDiaryNotes(data) {
    const {
      offset, limit, userId, filter,
    } = data;
    if (filter === DIARY_FILTER.byAccount) {
      return db.DiaryNote.findAndCountAll({
        where: {
          createdBy: userId,
        },
        limit,
        offset,
      });
    }
    const relationships = await db.Relationship.findAll({
      where: {
        [Op.or]: [
          {
            userId1: userId,
          },
          {
            userId2: userId,
          },
        ],
      },
      attributes: ['userId1', 'userId2'],
    });
    const relativeIds = uniq(
      flatten(
        relationships.map((item) => [item.userId1, item.userId2]),
      ),
    ).map((item) => item !== userId);
    if (filter === DIARY_FILTER.byRelative) {
      return db.DiaryNote.findAndCountAll({
        where: {
          createdBy: {
            [Op.in]: relativeIds,
          },
        },
        limit,
        offset,
      });
    }
    return db.DiaryNote.findAndCountAll({
      where: {
        createdBy: {
          [Op.in]: [
            ...relativeIds,
            userId,
          ],
        },
      },
      limit,
      offset,
    });
  }

  static createDiaryNote(data) {
    return db.DiaryNote.create({ ...data });
  }
}

export default DiaryNoteService;
