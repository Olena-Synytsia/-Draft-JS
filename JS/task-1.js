// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//     return total;
//   }
// }

console.log(calculateTotalPrice);

function calculateTotalPrice(order) {
  let totalPrice = 0;
  for (let i = 0; i < order.length; i++) {
    totalPrice += order[i];
  }
  return totalPrice;
}

function getSlice(array, value) {
  if (array.indexOf(value) === -1) {
    return [];
  } else {
    return array.slice(0, array.indexOf(value) + 1);
  }
}
