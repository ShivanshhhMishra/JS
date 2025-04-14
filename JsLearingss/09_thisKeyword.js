// this call apply bind
// this keyword js mein  one of the most suspenseful keyord hai
//keywords ka matlb hota hai aisa word jiska koi mtlb ho programming lang. mein

// this ki value bar bar  badal skti hai alg alg conditions mein, sari conditions ko seekh jao to this ko smjh jaaoge

//THIS (Where we use this)

//global- window

console.log(this);

//function - window
function abcd() {
  console.log(this);
}
abcd();

//method - object
var obj = {
  name: function () {
    console.log(this);
  },
  age: 25,
  email: "ajkcinwivcs",
};

obj.name();

//fnc inside method (es5) - window
var obj2 = {
  sayName: function () {
    console.log(this);
    function childfnc() {
      console.log(this);
    }
    childfnc();
  },
  age: 25,
};

obj2.sayName();

//fnc inside method (es6) - object
var obj3 = {
  sayName: function () {
    console.log(this);
  },
};
obj3.sayName();

//constructor fnc mein this ki value - new blank object

function add() {
  console.log(this);
}

const ans = new add();

// event listener mein this ki value - that element jispar event lis. laga ho

document.querySelector("button").addEventListener("click", function () {
  console.log(this);
});
