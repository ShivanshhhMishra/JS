var input = document.querySelector("input");

var data = [
  {
    name: "shivansh",
    src: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "subham",
    src: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww",
  },
  {
    name: "sonu",
    src: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "shuyash",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
];

var pers = "";
data.forEach(function (elem) {
  pers += `<div class="person">
            <div class="img">
              <img
                src="${elem.src}"
                alt=""
              />
            </div>
            <h4>${elem.name}</h4>
          </div>
`;
});

document.querySelector(".people").innerHTML = pers;

input.addEventListener("input", function () {
  var matching = data.filter(function (e) {
    return e.name.startsWith(input.value);
  });

  var newusers = "";
  matching.forEach(function (elem) {
    newusers += `<div class="person">
              <div class="img">
                <img
                  src="${elem.src}"
                  alt=""
                />
              </div>
              <h4>${elem.name}</h4>
            </div>
  `;
  });

  document.querySelector(".people").innerHTML = newusers;
});
