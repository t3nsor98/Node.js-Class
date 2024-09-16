let name = {
  firstName: "Digbijaya",
  lastname: "Lenka",
  // printFullName: function() {
  //     console.log(this.firstName + " " + this.lastname);
};

let printFullName = function (hometown) {
  console.log(this.firstName + " " + this.lastname + " from " + hometown);
};

// name.printFullName();

printFullName.call(name, "Odisha");

let name2 = {
  firstName: "Virat",
  lastname: "Kohli",
};

//function borrowing

// name.printFullName.call(name2);
printFullName.call(name2, "Delhi");

// in apply we give arrray of arguments

//bind

const person = {
  name: "M S Dhoni",
};

function greet(greeting, punctuation) {
  console.log(greeting + " " + this.name + punctuation);
}

const greetPerson = greet.bind(person);

greetPerson("!", " Hello");
