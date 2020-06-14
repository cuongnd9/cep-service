import joi from 'joi';

import { middleware, validateSchema, validateToken } from '../components/middlewares';
import DiaryNoteService from '../services/diaryNote.service';
import { POLICY, ROLE } from '../components/constants';

const resolver = {
  Query: {
    diaryNotes: middleware(
      validateToken(ROLE.admin),
      validateSchema({
        offset: joi.number().default(0),
        limit: joi.number().default(10),
      }),
      (_, args) => DiaryNoteService.getDiaryNotes(args),
    ),
  },
  Mutation: {
    createDiaryNote: middleware(
      validateSchema({
        policy: joi.string().valid(POLICY.public, POLICY.private),
      }),
      (_, args) => DiaryNoteService.createDiaryNote(args),
    ),
  },
};

export default resolver;
