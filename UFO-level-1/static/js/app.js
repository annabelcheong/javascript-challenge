// 1. Create a basic HTML web page or use the index.html file provided 
//    (we recommend building your own custom page!).
// 2. Using the UFO dataset provided in the form of an array of JavaScript objects, 
//    write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
// 3. Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.
// 4. Use a date form in your HTML document and write JavaScript code that will 
//    listen for events and search through the date/time column to find rows that match user input.

// YOUR CODE HERE!
// Assign the data from `data.js` to a descriptive variable
var ufo_data = data;
// console.log(ufo_data);

// Get a reference to the table body
var tbody = d3.select("tbody");

// Use d3 to append one table row `tr` for each 'ufo_sighting' object
// // Don't worry about adding cells or text yet, just try appending the `tr` elements.

// Loop through 'ufo_data' and console.log 'ufo_sighting' object
ufo_data.forEach((ufo_sighting) => {
    // console.log(ufo_sighting);
    var row = tbody.append("tr");

    Object.entries(ufo_sighting).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
  });

  
    


