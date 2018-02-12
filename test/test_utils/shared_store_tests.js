
const expect = require('chai').expect

module.exports = function shouldBehaveLikeAStore(entityName) {
  it('supports find on empty collection', async function () {
    const collection = this.store.collection(entityName)
    const entries = (await collection.find()).entities
    expect(entries).to.have.lengthOf(0)
  })


  it('supports finding an entry', async function () {
    const collection = this.store.collection(entityName)
    const savedEntry = await collection.save({ name: "My name", data: "Some data of sorts" })
    const entry = await collection.findOne(savedEntry.key)
    expect(entry).to.be.eql(savedEntry)
  })


}
