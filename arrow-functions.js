const sayHello = function() {
  console.log("Hello");
};
sayHello();

const sayHelloArrow = () => {
  console.log("Hello Arrow");
};
sayHelloArrow();

//one line function
const oneLine = () => console.log("one Line");
oneLine();

//One line returns
const oneReturn = () => "Hello one return";
console.log(oneReturn());

//return Object
const returnObject = () => ({ msg: "Hello Object" });
console.log(returnObject());

//one parameter
const onePara = name => console.log(`Hello ${name}`);
onePara("Sarah");

//multi Para
const multiPara = (firstName, lastName) =>
  console.log(`Hello ${firstName} ${lastName}`);
multiPara("sarah", "Elhwarii");

const users = ["sarah", "OMAR", "YOMN"];
// const nameLengths = users.map(function(name) {
//     return name.length;
//   });

// const nameLengths = users.map(name => {
//   return name.length;
// });

//SHORTEST
const nameLengths = users.map(name => name.length);

console.log(nameLengths);
