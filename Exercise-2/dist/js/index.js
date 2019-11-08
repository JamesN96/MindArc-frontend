const xhttp = new XMLHttpRequest();

// DOM ELEMENTS

const tab1 = document.querySelector("#tab-1");
const tab2 = document.querySelector("#tab-2");
const tab3 = document.querySelector("#tab-3");
const tab4 = document.querySelector("#tab-4");
const divs = document.querySelectorAll(".data");

// Event listeners

tab1.addEventListener("click", function(e) {
  e.target.value = 0;
  // Hide other divs
  tab2.nextElementSibling.style.display = "";
  tab3.nextElementSibling.style.display = "";
  tab4.nextElementSibling.style.display = "";
  json(e);
});

tab2.addEventListener("click", function(e) {
  e.target.value = 1;
  // Hide other divs
  tab1.nextElementSibling.style.display = "";
  tab3.nextElementSibling.style.display = "";
  tab4.nextElementSibling.style.display = "";
  json(e);
});

tab3.addEventListener("click", function(e) {
  e.target.value = 2;
  // Hide other divs
  tab1.nextElementSibling.style.display = "";
  tab2.nextElementSibling.style.display = "";
  tab4.nextElementSibling.style.display = "";
  json(e);
});

tab4.addEventListener("click", function(e) {
  e.target.value = 3;
  // Hide other divs
  tab1.nextElementSibling.style.display = "";
  tab2.nextElementSibling.style.display = "";
  tab3.nextElementSibling.style.display = "";
  json(e);
});

// READ JSON FILE function

function json(e) {
  if (xhttp.readyState == 4 && xhttp.status == 200) {
    // Create an object
    let myObj = JSON.parse(xhttp.responseText);
    if (e.target.nextElementSibling.style.display == "") {
      // Loop through object
      for (let i = 0; i < myObj.length; i++) {
        // Display hidden Div
        e.target.nextElementSibling.style.display = "block";
        // Select the h1 inside of the target tab element and display title data
        e.target.nextElementSibling.firstElementChild.innerHTML =
          myObj[e.target.value].title;
        // Select the p element inside of the target tab element and display content data
        e.target.nextElementSibling.lastElementChild.innerHTML =
          myObj[e.target.value].content;
      }
    } else {
      // Hide div
      e.target.nextElementSibling.style.display = "";
    }
  }
}

// Onload function

xhttp.onload = function() {
  let myObj = JSON.parse(xhttp.responseText);
  if (xhttp.readyState == 4 && xhttp.status == 200) {
    tab1.nextElementSibling.style.display = "block";
    document.querySelector(".title-data").innerHTML = myObj[0].title;
    document.querySelector(".p-data").innerHTML = myObj[0].content;
  }
};

xhttp.open("GET", "../data.json", true);
xhttp.send();
