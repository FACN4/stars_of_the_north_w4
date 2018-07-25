// Event listener to trigger function when the user has typed in the main input form of the page
var starForm = document.getElementById("star-finder");
starForm.addEventListener(
  "keyup",
  fetchDataFromServer(appendDataFromServer)
  // fetchDataFromServer("Why", appendDataFromServer)
);

// Function to send a request for data from the server

function fetchDataFromServer() {
  console.log(starForm.value);
  var xhr = new XMLHttpRequest();
  var url = "/search" + "?q=" + starForm.value;
  xhr.onreadystatechange = function() {
    if (xhr.status === 200 && xhr.readyState == 4) {
      var response = JSON.parse(xhr.responseText);
    }
  };
  xhr.open("GET", url);
  xhr.send();
}

// Function to add all of the user's suggestions to the DOM.

function appendDataFromServer(response) {
  return response;
}
