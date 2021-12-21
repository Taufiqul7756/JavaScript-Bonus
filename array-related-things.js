const numbers = [2, 3, 4, 5, 6];
const friends = ["Rafiq", " Jabbar", "Barkat"];
const products = [
  { id: 1, name: "laptop", price: 500 },
  { id: 2, name: "Phone", price: 1000 },
  { id: 3, name: "Watch", price: 300 },
  { id: 4, name: "Tablet", price: 800 },
  { id: 5, name: "home", price: 11500 },
];
//map
const names = products.map((product) => product.name);
const prices = products.map((pd) => pd.price);
//console.log(prices);

//forEach
//products.forEach((product) => console.log(product.name));

//filter
const cheaper = products.filter((pd) => pd.price < 1000);
//console.log(cheaper);

//remove an item using filter
const remaining = products.filter((pd) => pd.id != 3);
//console.log(remaining);
//find
const hasWatch = products.find((pd) => pd.name === "Watch");
console.log(hasWatch);

//reduce
//includes
//push
//pop
//length
//indexOf
