const xhttp = new XMLHttpRequest();

// DOM ELEMENTS

const tab1 = document.querySelector("#tab-1");
const tab2 = document.querySelector("#tab-2");
const tab3 = document.querySelector("#tab-3");
const tab4 = document.querySelector("#tab-4");

// Event listeners

tab1.addEventListener("click", function(e) {
  e.target.value = 0;
  json(e);
});

tab2.addEventListener("click", function(e) {
  e.target.value = 1;
  json(e);
});

tab3.addEventListener("click", function(e) {
  e.target.value = 2;
  json(e);
});

tab4.addEventListener("click", function(e) {
  e.target.value = 3;
  json(e);
});

// READ JSON FILE function

function json(e) {
  if (xhttp.readyState == 4 && xhttp.status == 200) {
    let myObj = JSON.parse(xhttp.responseText);
    if (e.target.nextElementSibling.style.display == "") {
      for (let i = 0; i < myObj.length; i++) {
        // Display hidden Div
        e.target.nextElementSibling.style.display = "block";
        // Select the h1 inside of the target tab element
        e.target.nextElementSibling.firstElementChild.innerHTML =
          myObj[e.target.value].title;
        // Select the p element inside of the target tab element
        e.target.nextElementSibling.lastElementChild.innerHTML =
          myObj[e.target.value].content;
      }
    } else {
      e.target.nextElementSibling.style.display = "";
    }
  }
}

// Onload function

xhttp.onload = function() {
  let myObj = JSON.parse(xhttp.responseText);
  if (xhttp.readyState == 4 && xhttp.status == 200) {
    document.querySelector(".title-data").innerHTML = myObj[0].title;
    document.querySelector(".p-data").innerHTML = myObj[0].content;
  }
};

xhttp.open("GET", "../data.json", true);
xhttp.send();
