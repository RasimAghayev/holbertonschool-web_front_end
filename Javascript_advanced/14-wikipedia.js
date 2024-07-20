function createElement(data) {
  const paragraph = document.createElement("p");
  paragraph.textContent = data;
  document.body.appendChild(paragraph);
}

function queryWikipedia(callback) {
  const request = new XMLHttpRequest();
  const url =
    "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*";

  request.open("GET", url, true);
  request.onload = function () {
    if (request.status === 200) {
      const response = JSON.parse(request.responseText);
      const pageId = Object.keys(response.query.pages)[0];
      const extract = response.query.pages[pageId].extract;

      callback(extract);
    } else {
      console.error("Failed to fetch data from Wikipedia.");
    }
  };
  request.onerror = function () {
    console.error("Network error occurred.");
  };
  request.send();
}

queryWikipedia(createElement);
