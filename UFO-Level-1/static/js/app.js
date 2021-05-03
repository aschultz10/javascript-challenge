// from data.js
var tableData = data;

// Make columns
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"];

// Select table and body
var tbody = d3.select("tbody");
var table = d3.select("table");

// Select filter search and button
var filtersearch = d3.select("datetime");
var button = d3.select(".btn-default");

// Append table with for each code
data.forEach((alien) => {
    var row = tbody.append("tr");

    // Use link
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
    Object.entries(alien).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
});

//  Button loop for search bar

// YOUR CODE HERE
