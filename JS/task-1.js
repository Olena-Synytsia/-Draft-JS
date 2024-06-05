// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = Object.keys(apartment);
// const values = [];

// for (const key of keys) {
//   values.push(apartment[key]);
// }

// console.log(keys); // ["descr", "rating", "price"]
// console.log(values);

// function countProps(object) {
//   return Object.keys(object).length;
// }

// console.log(countProps({})); // повертає 0
// console.log(countProps({ name: "Mango", age: 2 })); // повертає 2
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // повертає 3

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys);
// console.log(values);

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
// ];

// console.log(books);

// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   const nameProducts = products.name;

//   for (const product of products) {
//     if (nameProducts === product.name) {
//       return price;
//     }
//     return null;
//   }
// }

// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

  //   for (const product of products) {
  //     if (product.name === productName) {
  //       return products.price;
  //     }
  //     return null;
  //   }
  // }

  // function getProductPrice(productName) {
  for (const product of products) {
    if (product.name === productName) {
      return product.price;
    }
  }
  return null;
}

console.log(getProductPrice("Grip")); // повертає `1200`
console.log(getProductPrice("Scanner")); // повертає `2700`
console.log(getProductPrice("Droid")); // повертає `400`
console.log(getProductPrice("Radar")); // повертає`1300`
console.log(getProductPrice("Engine")); // повертає `null`
