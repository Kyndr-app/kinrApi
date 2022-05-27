class baseRepo {
  ModelItem;
  constructor(_ModelItem) {
    this.ModelItem = _ModelItem;
  }

  find(select) {
    return this.ModelItem.find({}, select);
  }

  findOne(filter, select) {
    return this.ModelItem.findOne(filter, select);
  }

  create(item) {
    const myItem = new this.ModelItem(item);
    return myItem.save();
  }

  update(filter, newItem, changes, callback) {
    let options = {};
    options.new = true;
    options.fields = { _id: 0 };

    if (changes) options = changes;

    return this.ModelItem.findOneAndUpdate(filter, newItem, options, callback);
  }

  delete(filter, options) {
    return this.ModelItem.findOneAndDelete(filter, options);
  }
}

module.exports = baseRepo;
