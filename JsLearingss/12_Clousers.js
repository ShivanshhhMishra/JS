// Closures

// ek function jo return kare doosra function, aur use kare parent function ka koi variable

function abcd() {
  var a = 12;
  return function () {
    console.log(a);
  };
}

function timer() {
  var a = 12;
  return setTimeout(function () {
    console.log(a);
  }, 2000);
}

var ans = timer();
