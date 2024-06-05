const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};

const keys = Object.keys(apartment);
const values = [];

for (const key of keys) {
  values.push(apartment[key]);
}

console.log(keys); // ["descr", "rating", "price"]
console.log(values);
