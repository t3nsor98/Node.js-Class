// polyfill bind
function greet() {
  console.log(this.name + " " + this.surname);
}

let person = {
  name: "John",
  surname: "Doe",
};

let newFunction = greet.bind(person);

newFunction();
