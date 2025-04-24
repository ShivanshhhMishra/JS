var h1Text = document.querySelector("#first1").textContent;

var splitedText = h1Text.split("");

var clutter = "";
splitedText.forEach(function (elem) {
  clutter += `<span>${elem}</span>`;
});

document.querySelector("#firsth1").innerHTML = clutter;
