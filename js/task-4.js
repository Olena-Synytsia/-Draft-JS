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

// const arr = [2, 4, 6];
// const result = arr.filter((el) => el * 3);
// console.log(result);

// const booksByAuthor = books.filter((book) => book.author === AUTHOR);

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
// ];

// const inAscendingScoreOrder = students.toSorted(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );

// const inDescendingScoreOrder = students.toSorted(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );

// const inAlphabeticalOrder = students.toSorted((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );

// console.log(inAscendingScoreOrder);
// console.log(inDescendingScoreOrder);
// console.log(inAlphabeticalOrder);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     rating: 7.94,
//   },
//   {
//     title: "Enemy of God",
//     author: "Bernard Cornwell",
//     rating: 8.67,
//   },
// ];

// const sortedByAuthorName = books.toSorted((a, b) => a.author - b.author);

// const sortedByReversedAuthorName = books.toSorted(
//   (a, b) => b.author - a.author
// );

// const sortedByAscendingRating = books.toSorted((a, b) => a.rating - b.rating);

// const sortedByDescentingRating = books.toSorted((a, b) => b.rating - a.rating);

// console.log(sortedByAuthorName);
// console.log(sortedByReversedAuthorName);
// console.log(sortedByAscendingRating);
// console.log(sortedByDescentingRating);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;

// const names = books
//   .filter((book) => book.rating > MIN_BOOK_RATING)
//   .map((book) => book.author)
//   .toSorted((a, b) => a.localeCompare(b));

// console.log(names);

const products = [
  { name: "Apple", category: "fruits", price: 1.2, stock: 50 },
  { name: "Banana", category: "fruits", price: 0.8, stock: 100 },
  { name: "Carrot", category: "vegetables", price: 0.5, stock: 200 },
  { name: "Broccoli", category: "vegetables", price: 1.0, stock: 150 },
  { name: "Milk", category: "dairy", price: 1.5, stock: 20 },
  { name: "Cheese", category: "dairy", price: 2.5, stock: 5 },
  { name: "Chicken", category: "meat", price: 5.0, stock: 30 },
  { name: "Beef", category: "meat", price: 7.0, stock: 25 },
];

function areAllDairyStockAboveTen(products) {
  return products
    .filter((product) => product.category === "dairy")
    .every((product) => product.stock > 10);
}

console.log(areAllDairyStockAboveTen(products));
