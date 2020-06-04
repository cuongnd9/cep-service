import Cat from '../models/user.model';

class CatService {
  static getCats() {
    return Cat.findAll();
  }

  static createCat({ name, color }) {
    return Cat.create({
      name,
      color,
    });
  }
}

export default CatService;
