//array destructuring
const numbers = [54, 92, 34, 55];
// const x = numbers[0];
// const y = numbers[1];
//const [x, y] = [54, 92];
const [x, y] = numbers;
// console.log(x, y);

function boxify(num1) {
  return [num1, num1 + 5];
}
const [box1, box2] = boxify(3);
// console.log(box1, box2);

//Object Destructuring
const { name, age, id } = { id: 1, name: "rahim", age: 25 };
// console.log(name, age, id);
//create object shortcut
const one = 25;
const two = 35;
const obj = { x: x, y: y };
const obj2 = { one, two };
// console.log(obj2);

//new array using three dots
const newNumbers = [...numbers, 56]; //push
