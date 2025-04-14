//call aplly bind
//ye  teen tareeke hai fuction ko call krne k liye

//CALL
const obj = { name: "Shivansh" };
function abcd() {
  console.log(this);
}

abcd.call();

//APPLY
const obj2 = { name: "Shivansh" };
function abcd(a, b, c) {
  console.log(this, a, b, c);
}

abcd.call(obj2, [1, 2, 3]);

//BIND

const obj3 = { name: "Shivansh" };
function abcd() {
  console.log(this);
}
const baadmechalaanekeliyefnc = abcd.bind(obj);

baadmechalaanekeliyefnc();
