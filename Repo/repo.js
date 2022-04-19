class baseRepo {
  ModelItem;
  constructor(_ModelItem) {
    this.ModelItem = _ModelItem;
  }

  find(itemInfo) {
    return this.ModelItem.findOne(itemInfo);
  }

  findOne(itemInfo) {
    return this.ModelItem.findOne(itemInfo);
  }

  create(item) {
    const myItem = new this.ModelItem(item);
    return myItem.save();
  }

  update(id, newItem) {
    console.log(id, newItem);
    const foundItem = this.ModelItem.findOneAndUpdate(id, newItem, {
      new: true,
    });
    return foundItem;
  }

  delete(id) {
    return this.ModelItem.findByIdAndRemove(id);
  }
}

module.exports = baseRepo;
