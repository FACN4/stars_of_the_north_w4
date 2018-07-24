// Event listener to trigger function when the user has typed in the main input form of the page

var starForm = document.getElementById("star-finder");
starForm.addEventListener(
  "keyup",
  fetchDataFromServer(starForm.input, appendData)
);

// Function to send a request for data from the server

function fetchDataFromServer(searchValue, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.status === 200 && xhr.readyState == 4) {
      var response = JSON.parse(xhr.responseText);
      return callback(response);
    }
  };
  xhr.open("GET", searchValue);
  xhr.send();
}

// Function to add all of the user's suggestions to the DOM.

function appendDataFromServer(response) {}