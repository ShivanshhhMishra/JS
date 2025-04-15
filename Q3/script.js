//jab bhi form ke saath deal karo yad rakho ki submit hone par forms page ko reload kar dete hai, aur tumhe khayaal rakhna hai ke pages reload naa ho, nahito agr page reload hua to js nahi chalegi,kyuki js chal paaye se phale he page reload ho chuka hoga

var form = document.querySelector("form");

form.addEventListener("submit", function (ev) {
  ev.preventDefault();
});
