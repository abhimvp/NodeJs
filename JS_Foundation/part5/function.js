function makeTea(typeOfTea) {
  return `Making ${typeOfTea}`;
}

let teaOrder = makeTea("Green Tea");
console.log(teaOrder);
// ----
function orderTea(teaType) {
  function confirmOrder() {
    return `Order confirmed for ${teaType}`;
  }
  return confirmOrder();
}
let order = orderTea("Black Tea");
console.log(order);
// 3. Write an arrow function named calculateTotal that takes two parameters: 
// `price` and `quantity`. The function should return the total cost by multiplying the `price` and `quantity`.
// Store the result in a variable named 'totalCost`.
const calculateTotal = (price, quantity) => price * quantity;
let totalCost = calculateTotal(5, 3);
console.log("Total cost:", totalCost);
