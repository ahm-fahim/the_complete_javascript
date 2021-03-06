/*
The const keyword was introduced in ES6 (2015).

Variables defined with const cannot be Redeclared.

Variables defined with const cannot be Reassigned.

Variables defined with const have Block Scope.
*/

// const PI = 3.141592653589793;
// PI = 3.14; // This will give an error
// PI = PI + 10; // This also give an error


//JavaScript const variables must be assigned a value when they are declared

// const PI_value = 3.14159265359;

// incorret 
// const Pi;
// pi = 3.1416

//const array

const FullName = ["A", "Haque", "Md.", "Fahim"];

FullName[0] = "Abdul";

FullName.push("Morshed");

console.log(FullName)

// But you can NOT reassign the array


//const object 

const car = {type:"Fiat", model:"500",color:"white"};
car.color = "red";

car.owner ="Johnson";
console.log(car);

// But you can NOT reassign the object:

// Example
// const car = {type:"Fiat", model:"500", color:"white"};

// car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR


// const x = 2;       // Allowed

// {
//   const x = 3;   // Allowed
// }

// {
//   const x = 4;   // Allowed
// }