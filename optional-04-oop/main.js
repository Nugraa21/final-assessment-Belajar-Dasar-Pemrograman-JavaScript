import { Inventory } from './Inventory.js';
import { Item } from './Item.js';

const inventory = new Inventory();
inventory.addItem(new Item("Book", 10));
console.log(inventory.getItems());