// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   const newArray = [];
//   for (let key of products) {
//     if (key[propName]) {
//       newArray.push(key[propName]);
//     }
//   }
//   return newArray;
// }

// console.log(getAllPropValues); // повертає [4, 3, 7, 9]
// console.log(getAllPropValues("name")); // повертає ["Radar", "Scanner", "Droid", "Grip"]
// console.log(getAllPropValues("quantity")); // повертає [4, 3, 7, 9]
// console.log(getAllPropValues("price")); // повертає [1300, 2700, 400, 1200]
// console.log(getAllPropValues("category")); // повертає []

// function calculateTotalPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price * product.quantity;
//     }
//   }

//   return `Product ${productName} not found!`;
// }

// console.log(calculateTotalPrice("Blaster")); // повертає "Product Blaster not found!"
// console.log(calculateTotalPrice("Radar")); // повертає 5200
// console.log(calculateTotalPrice("Droid")); // повертає 2800
// console.log(calculateTotalPrice("Grip")); // повертає 10800
// console.log(calculateTotalPrice("Scanner")); // повертає 8100

// let totalRating = 0;

// for (const book of books) {
//   totalRating += book.rating;
// }

// const averageRating = totalRating / books.length;
// console.log(averageRating); // 8

// const atTheOldToad = {
//   potions: [],
//   getPotions() {
//     return "List of all available potions";
//   },
//   addPotion(potionName) {
//     this.potions.push(potionName);
//     return `Adding ${potionName}`;
//   },
// };

// console.log(`atTheOldToad.addPotion("Power potion")`); // повертає рядок `"Adding Power potion"`
// console.log(`atTheOldToad.addPotion("Invisibility")`); // повертає рядок `"Adding Invisibility"`
// console.log(`atTheOldToad.getPotions()`); // повертає рядок `"List of all available potions"`

const bookShelf = {
  books: [
    { title: "The Last Kingdom", rating: 8 },
    { title: "The Mist", rating: 6 },
  ],
  getAvarageRating() {
    let totalRating = 0;

    for (const book of this.books) {
      totalRating += book.rating;
    }

    return totalRating / this.books.length;
  },
};

console.log(bookShelf.getAvarageRating()); // 7
