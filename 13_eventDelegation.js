//event delegation = jb aap event listener se kai saare different elements ke events ko handle kr sake.

// event listener ko parent par lagao and unko id, class ya fir tag ke basis pr differentiate karke different task karao

var parent = document.querySelector("#parent");

parent.addEventListener("click", function (details) {
  if (details.target.id === "play") {
    console.log("play song");
  } else if (details.target.id == "pause") {
    console.log("pause song");
  }
});
