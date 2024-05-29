// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   return total;
// }

// console.log(calculateTotalPrice);

// function getEvenNumbers(start, end) {
//   let evenNumbers = [];

//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       evenNumbers.push(i);
//     }
//   }
//   return evenNumbers;
// }

// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));

// function checkStorage(storage, item) {
//   if (storage.includes(item.toLowerCase())) {
//     return `${item.toLowerCase()} is available to order!`;
//   } else {
//     return `Sorry! We are out of stock!`;
//   }
// }

// console.log(checkStorage(["apple", "plum", "pear"], "plum")); // повертає "plum is available to order!"
// console.log(checkStorage(["apple", "plum", "pear"], "pLuM")); // повертає "plum is available to order!"
// console.log(checkStorage(["apple", "plum", "pear"], "pear")); // повертає "pear is available to order!"
// console.log(checkStorage(["apple", "plum", "pear"], "pEAr")); // повертає "pear is available to order!"
// console.log(checkStorage(["apple", "plum", "pear"], "orange")); // повертає "Sorry! We are out of stock!"
// console.log(checkStorage(["apple", "plum", "pear"], "carrot")); // повертає "Sorry! We are out of stock!"

// function getCommonElements(array1, array2) {
//   let array = [];
//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       array.push(array1[i]);
//     }
//   }
//   return array;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4])); // повертає [2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // повертає [1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // повертає [12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); // повертає [10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // повертає []
// console.log(getCommonElements()); // з випадковими двома масивами повертає правильний масив

function calculateTotalPrice(order) {
  let totalPrice = 0;
  for (const total of order) {
    totalPrice += total;
  }
  return totalPrice;
}

console.log(calculateTotalPrice([12, 85, 37, 4])); // повертає 138
console.log(calculateTotalPrice([164, 48, 291])); // повертає 503
console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // повертає 1116
console.log(calculateTotalPrice([])); // повертає 0
console.log(calculateTotalPrice([2, 4, 8])); //
