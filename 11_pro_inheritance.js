// Prototypal Inheritance

//hum object create karte hai and kisi ek parent constructor function k prototype mein kuchh add kr dete hai and jab bhi add hota hai to wo parent se banne wale sabhi children instances ko wo properties jo parent ko prototype mein di gayi thi wo milti hai saugaat mein

// ek function jo ki this ka upyog kar raha ho and new ke dwara naye naye objects bna kr deta ho aise function ko constructor function kahte hai

function makeHuman(name, age) {
  this.name = name;
  this.age = age;
}

makeHuman.prototype.printMyName = function () {
  console.log(this.name);
};

const human1 = new makeHuman("shiv", 14);
const human2 = new makeHuman("ansh", 18);
