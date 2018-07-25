// Event listener to trigger function when the user has typed in the main input form of the page
var starForm = document.getElementById("star-finder");
starForm.addEventListener("keyup", function() {
  fetchDataFromServer(starForm.value, appendDataFromServer);
}
);

// Function to send a request for data from the server

function fetchDataFromServer(userQuery, callback) {
  var xhr = new XMLHttpRequest();
  var url = "/search" + "?q=" + userQuery;
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      console.log(xhr.responseText);
      var response = JSON.parse(xhr.responseText);
      callback(response);
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}

// Function to add all of the user's suggestions to the DOM.

function appendDataFromServer(response) {
  console.log(response);
}
