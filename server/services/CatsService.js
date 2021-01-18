import { fakeDb } from "../db/FakeDb"

function generateId() {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 10; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};


class CatsService {
  getAll() {
    return fakeDb.cats
  }
  getOne(id) {
    let cat = fakeDb.cats.find(c => c.id == id)
    if (!cat) {
      throw new Error("Invalid id")
    }
    return cat
  }
  create(newCat) {
    newCat.id = generateId()
    fakeDb.create("cats", newCat)
    return newCat
  }
  edit(update) {
    let cat = this.getOne(update.id)


    // dont stress here this will be done in the DB
    for (let key in update) {
      cat[key] = update[key]
    }
    return cat
  }

  delete(id) {
    let cat = this.getOne(id)
    fakeDb.cats = fakeDb.cats.filter(c => c.id != id)
    return { result: "Deleted Successfully" }
  }

}

export const catsService = new CatsService();
