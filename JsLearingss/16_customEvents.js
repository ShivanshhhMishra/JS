//Event, click,dbclick, mouseover, input

//we can make our own event, ex: chacha

//How?
const yourevent = new Event("gharjaao");
document.querySelector("button").addEventListener("gharjaao", function () {
  alert("jaa rha hu");
});

document.querySelector("button").dispatchEvent(yourevent);

//make event
//attach event to some dom element
//dispatch that event from that dom element in which you attached the event.
