// const object = {
//   message: "Hello, World",
//   getMessage() {
//     const message = "Hello, Earth";
//     return this.message;
//   },
// };
// console.log(object.getMessage());

// const person = { name: "Mango" };

// function sayHi(age) {
//   return `${this.name} is ${age}`;
// }

// console.log(sayHi.call(person, 18));
// // console.log(sayHi.bind(person, 18));

class User {
  constructor(params) {
    this.name = params.name;
    this.email = params.email;
  }

  getEmail() {
    return this.email;
  }

  changeEmail(newEmail) {
    this.email = newEmail;
  }
}

const mango = new User({ name: "Mango", email: "mango@mail.com" });

console.log(mango.getEmail()); // “mango@mail.com”
console.log(mango);
