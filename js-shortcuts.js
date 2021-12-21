const money = 250;
const active = false;
let food;
if (money > 100) {
  food = "biriyani";
} else {
  food = "Alor vorta";
}
//condition ? true valye : false value
let food2 = money > 100 ? "biriyani" : "Alur vorta";

//active inactive shortCut
let cssClass;
if (active === true) {
  cssClass = "active";
} else {
  cssClass = "inactive";
}
const cssClass2 = active ? "active" : "inactive";
// function call shortcut
// active ? displayUser() : hideUser();

// for one function
// active && displayUser(); //active true hoilei displayUser execute hbe
// active && displayUser(); //active false hoilei displayUser execute hbe

const x = active && 5; // active true holei execute hbe
const y = active || 5; // active false holei execute hbe
// console.log(y);

//string to number by using +
const number = +"45";
// console.log(number);

// number to string
const numText = 45 + "";
// console.log(numText);

//
function add(num1, num2) {
  num2 = num2 || 5;
  return num1 + num2;
}
const result = add(45);
// const result = add(45, 15);
console.log(result);
