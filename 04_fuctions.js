//functions
//es5 and es6
//es5 - fucntion statements, fucntion expressions, anonymous function
// es6 - fat, arrow, function
//a) basic fat arrow
//b) fat arrow with one param
//c) fat arrow with implicit return

//What is function
// koi aisa code jo aapko baar baar use krna ho, ya fir koi aisa code jisko turant na chalana ho par kabhi chalana ho, usey fuction mein daal skte hai

//---exaples

//function abcd() {
//var i = 12;
//  console.log(i);
//  for (var b = 12; b < 22; b++) {
//    console.log("hello");
//  }
//}
//abcd();

//var dateofbirth = 7;
//var todaysdate = 7;
//function happybirthday() {
//  console.log("happy birthday");
//}

//if (dateofbirth === todaysdate) {
//  happybirthday();
//}

// why we need
// to reuse code and to wrap the code which we want to run in future at some point of time

//extras we should know
// parameters and arguments

//function abcd(val) {
//  console.log(12 + val);
//}

//abcd(12);

// prep for interview

function abcd() {
  //fuction statement
}

var abcd = function () {
  //function expression
};

//function(){
//anonymous function
//}

// fat arrow(basics)
var a = () => {};

//single var fat arrow

var g = (ab) => {};

g(12);

// return ka mtlb hua,jha par return lagegaa uske aage jo bhi likhoge wo jaayega jaha par function call hua tha, return fuction ke andar lagta hai

//aisa function jo kuch return nahi karta wo bhi undefined return krta hai
