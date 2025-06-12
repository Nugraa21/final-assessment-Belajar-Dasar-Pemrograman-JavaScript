const orders = [];

function placeOrder(item, quantity) {
  const order = { item, quantity, timestamp: new Date() };
  orders.push(order);
  return `Order for ${quantity} ${item}(s) placed at ${order.timestamp}`;
};

module.exports = { placeOrder };