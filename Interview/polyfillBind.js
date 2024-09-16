let name = {
  firstname: "Digbijaya",
  lastname: "Lenka",
};

let printname = function () {
  console.log(this.firstname + " " + this.lastname);
};

let printMyName = printname.bind(name);
printMyName();

Function.prototype.mybind = function (...args) {
  // this -> printname
  let obj = this;
  return function () {
    obj.call(args[0]);
  };
};

let printMyName2 = printname.mybind(name);
printMyName2();
