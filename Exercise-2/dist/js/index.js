const xhttp = new XMLHttpRequest();

// READ JSON FILE function

function json(e) {
  if (xhttp.readyState == 4 && xhttp.status == 200) {
    let myObj = JSON.parse(xhttp.responseText);
    for (let i = 0; i < myObj.length; i++) {
      document.querySelector(".title-data").innerHTML =
        myObj[e.target.value].title;
      document.querySelector(".p-data").innerHTML =
        myObj[e.target.value].content;
    }
  }
}

xhttp.open("GET", "../data.json", true);
xhttp.send();
