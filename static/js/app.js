// connecting to the datafile data.js
var tableData = data;

// reference to the html script for D3
var tbody = d3.select("tbody");

function table(data) {
  tbody.html("");

//looping through the data to setup the table on the site
  data.forEach((dRow) => {
    var row = tbody.append("tr");
    Object.values(dRow).forEach((val) => {
      var cell = row.append("td");
        cell.text(val);
      }
    );
  });
}

function clickFilter() {
  d3.event.preventDefault();
  // Get datetime from filter
  var date = d3.select("#datetime").property("value");
  let data = tableData;
  if (date) {
    data = filteredData.filter(row => row.datetime === date);
  }

  table(data);
}

// Setting the listener to click the filter button
d3.selectAll("#filter-btn").on("click", clickFilter);
// start the table function
table(tableData);
