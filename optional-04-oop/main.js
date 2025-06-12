const { Inventory } = require('./Inventory');
const { Item } = require('./Item');

const inventory = new Inventory();
inventory.addItem(new Item("Book", 10));
console.log(inventory.getItems());