import db from '../models';

class DiaryNoteService {
  static getDiaryNotes(data) {
    const { offset, limit } = data;
    return db.DiaryNote.findAll({ offset, limit });
  }

  static createDiaryNote(data) {
    return db.DiaryNote.create({ ...data });
  }
}

export default DiaryNoteService;
