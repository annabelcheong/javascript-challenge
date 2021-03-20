// 1. Create a basic HTML web page or use the index.html file provided 
//    (we recommend building your own custom page!).
// 2. Using the UFO dataset provided in the form of an array of JavaScript objects, 
//    write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
// 3. Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.
// 4. Use a date form in your HTML document and write JavaScript code that will 
//    listen for events and search through the date/time column to find rows that match user input.

// YOUR CODE HERE!

///////////////////////////////////////////////////////
// APPEND TABLE TO WEBPAGE 
// (variable ufo_data from data.js' variable data)
///////////////////////////////////////////////////////

// Assign the variable 'data' from `data.js` to a descriptive variable 'ufo_data'
var ufo_data = data;
// TEST: console.log(ufo_data);

// Assign a variable reference to the table body
var tbody = d3.select("tbody");

// Loop through 'ufo_data' and console.log 'ufo_sighting' object
ufo_data.forEach((ufo_sighting) => {
    //TEST: console.log(ufo_sighting);
    // Append the 'tr' rows (only skeleton - no content in the <tr> yet)
    var row = tbody.append("tr");
    // Get the key and value, and for each key and value pair, 
    // Append <td> (only skeleton - no content in the <td> yet)
    Object.entries(ufo_sighting).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append("td");
        // Append the value into each 'td' cell
        cell.text(value);
    });
  });

///////////////////////////////////////////////////////
//  Filter by DATE/TIME Column and output corresponding user input.
///////////////////////////////////////////////////////
    
// Select the date_input field
var date_input = d3.select("#datetime");

// Create event handlers
date_input.on("submit", runEnter);

// Complete the event handler function
function runEnter(){



    
}
