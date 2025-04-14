//Event Handling

//jb bhi  aap kisi elemnt pr kisi bhi prakar ka koi action krte ho to waha par event by default automatically raise hoto hai ab agar aapne koi event listener banaya hai us event par to wo event ignore bahi kiya jaayega balki uska listener chalega

var btn = document.querySelector("button");
//clcik,dblclick, mouseover mouseleave
btn.addEventListener("mouseover", function () {
  btn.textContent = "starting...";
  btn.style.backgroundColor = "red";
});
btn.addEventListener("mouseleave", function () {
  btn.textContent = "make new card";
  btn.style.backgroundColor = "red";
});
