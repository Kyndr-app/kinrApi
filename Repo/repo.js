class baseRepo {
  ModelItem;
  constructor(_ModelItem) {
    this.ModelItem = _ModelItem;
  }

  find() {
    return this.ModelItem.find();
  }

  findOne(itemInfo) {
    return this.ModelItem.findOne(itemInfo);
  }

  findPopulate(tag) {
    return this.ModelItem.find().populate(tag);
  }

  findOnePopulate(itemInfo, tag) {
    return this.ModelItem.findOne(itemInfo).populate(tag);
  }

  create(item) {
    const myItem = new this.ModelItem(item);
    return myItem.save();
  }

  update(id, newItem) {
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
