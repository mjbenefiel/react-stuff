var pageCounter = 1;

var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open(
    "GET",
    "https://learnwebcode.github.io/json-example/animals-"+ pageCounter +".json"
  );
  ourRequest.onload = () => {
    // console.log(ourRequest.responseText);
    var ourData = JSON.parse(ourRequest.responseText);
    // console.log(ourData[0]);
    renderHTML(ourData);
  };

  ourRequest.send();
  pageCounter++
  if (pageCounter > 3) {
    btn.classList.add("hide-me")
  }
});

const renderHTML = (data) => {
  var htmlString = ""
  for (i = 0; i < data.length; i++) {
    htmlString += "<p>" + data[i].name + " is a " + data[i].species + ".</p>"
  }
  animalContainer.insertAdjacentHTML('beforeend', htmlString)
};
