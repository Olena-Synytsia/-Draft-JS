// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (element) {
//     totalPrice += element;
//   });

//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])); //повертає 138
// console.log(calculateTotalPrice([164, 48, 291])); // повертає 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // повертає 1116
// console.log(); // Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// console.log(calculateTotalPrice([10000, 1000, 100, 10, 1]));

// function filterArray(numbers, value) {
//   let newArray = [];
//   numbers.forEach(function (number) {
//     if (number > value) {
//       newArray.push(number);
//     }
//   });

//   return newArray;
// }

// // Функція filterArray(numbers, value) приймає першим параметром масив чисел numbers і повертає новий масив, в якому будуть тільки ті елементи оригінального масиву, які більші за значення другого параметра числа value. Якщо таких значень не буде знайдено, функція повертає порожній масив.

// // Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // повертає [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // повертає [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // повертає []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // повертає [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // повертає [24, 41, 76]
// console.log(filterArray([10, 2, 8, 41, 76, 100, 14, 32, 41, 0], 22)); //з випадковими, але валідними аргументами, повертає правильне значення [41, 76, 100, 32, 41]

// function changeEven(numbers, value) {
//   const newArray = [];
//   numbers.forEach((number) => {
//     number % 2 === 0 ? newArray.push(number + value) : newArray.push(number);
//   });
//   return newArray;
// }

// changeEven([2, 8, 3, 7, 4, 6], 10); // повертає новий масив `[12, 18, 3, 7, 14, 16]`
// changeEven([17, 24, 68, 31, 42], 100); // повертає новий масив `[17, 124, 168, 31, 142]`
// changeEven([44, 13, 81, 92, 36, 54], 100); // повертає новий масив `[144, 13, 81, 192, 136, 154]`
// changeEven([1, 2, 3, 4, 5], 10); // повертає новий масив `[1, 12, 3, 14, 5]`

// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
// console.log(changeEven([17, 24, 68, 31, 42], 100));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));

const arr = [2, 4, 6];
const result = arr.filter((el) => el * 3);
console.log(result);

const booksByAuthor = books.filter((book) => book.author === AUTHOR);
