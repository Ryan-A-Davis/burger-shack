class FakeDB {
  create(collection, body) {
    this[collection].push(body)
  }
  burgers = []
  cats = []
}

export const fakeDb = new FakeDB()