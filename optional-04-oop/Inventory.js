class Inventory {
  constructor() {
    this.items = [];
  }
  addItem(item) {
    this.items.push(item);
  }
  getItems() {
    return this.items;
  }
};
module.exports = { Inventory };