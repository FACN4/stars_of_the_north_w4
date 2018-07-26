// Event listener to trigger function when the user has typed in the main input form of the page

var starForm = document.getElementById("star-finder");
starForm.addEventListener("keyup", function() {
  fetchDataFromServer(starForm.value, appendDataFromServer);
});

// Function to send a request for data from the server

function fetchDataFromServer(userQuery, callback) {
  var xhr = new XMLHttpRequest();
  userQuery = userQuery.toLowerCase();
  var url = "/search" + "?q=" + userQuery;
  var encoded = encodeURI(url);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      console.log(xhr.responseText);
      var response = JSON.parse(xhr.responseText);
      callback(response);
    }
  };
  xhr.open("GET", encoded, true);
  xhr.send();
}

// Function to add all of the user's suggestions to the DOM.

function appendDataFromServer(response) {
  var searchResults = document.getElementById("search-results");
  removeChildren(searchResults);
  if (response.length === 0 && starForm.value !== "") {
    var newDiv = document.createElement("div");
    newDiv.textContent = "Sorry, no results found. Please try another search.";
    searchResults.appendChild(newDiv);
  } else {
    response.forEach(function(items) {
      var googleURL = "https://www.google.co.uk/search?q=" + items + " star";
      var anchorText = document.createElement("a");
      anchorText.text = items;
      anchorText.href = googleURL;
      searchResults.appendChild(anchorText);
    });
  }
}

// Helper function to removeChildren divs before populating search results again

function removeChildren(obj) {
  while (obj.hasChildNodes()) {
    obj.removeChild(obj.firstChild);
  }
}
