//jab bhi form ke saath deal karo yad rakho ki submit hone par forms page ko reload kar dete hai, aur tumhe khayaal rakhna hai ke pages reload naa ho, nahito agr page reload hua to js nahi chalegi,kyuki js chal paaye se phale he page reload ho chuka hoga

var form = document.querySelector("form");
var inps = document.querySelectorAll('input[type ="text"]');

var h4 = document.querySelector("h4");

form.addEventListener("submit", function (ev) {
  ev.preventDefault();
  for (var i = 0; i < inps.length; i++) {
    if (inps[i].value.trim() === "") {
      h4.textContent = "Error,some fields are blank";
      h4.style.color = "red";
      break;
    }
  }
});
