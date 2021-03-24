// Level 2: Multiple Search Categories (Optional Activity)
// 1. Complete all of Level 1 criteria.
// 2. Using multiple input tags and/or select dropdowns, write JavaScript code 
// so the user can to set multiple filters and search for UFO sightings using the 
// following criteria based on the table columns:
// - date/time
// - city
// - state
// - country
// - shape

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
    
// Select the button and form
var button = d3.select("#filter-btn");

// Create event handlers
button.on("click",runEnter);

// Complete the event handler function
function runEnter(){

    // Prevent the page from refreshing
    d3.event.preventDefault();
    // DATETIME INPUT
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    //CITY INPUT
     // Select the input element and get the raw HTML node
     var inputCityElement = d3.select("#city");
     // Get the value property of the input element
     var inputCityValue = inputCityElement.property("value");

    //STATE INPUT
     // Select the input element and get the raw HTML node
     var inputStateElement = d3.select("#state");
     // Get the value property of the input element
     var inputStateValue = inputStateElement.property("value");

    //COUNTRY INPUT
     // Select the input element and get the raw HTML node
     var inputCountryElement = d3.select("#country");
     // Get the value property of the input element
     var inputCountryValue = inputCountryElement.property("value");

    //SHAPE INPUT
     // Select the input element and get the raw HTML node
     var inputShapeElement = d3.select("#shape");
     // Get the value property of the input element
     var inputShapeValue = inputShapeElement.property("value");

    //TEST:
    console.log(inputValue);
    console.log(inputCityValue);
    console.log(inputStateValue);
    console.log(inputCountryValue);
    console.log(inputShapeValue);

    date_len = inputValue.length;  
    console.log(date_len);

    /////////////////////////////////////////////////////////////////////////
    // OPTION 1
        // THIS OPTION MUST INCLUDE ALL INPUT VALUES TO MATCH DATA SET.
        // Filtered data to include input values of the date/time, city, state, country, shape.
        // var filteredData = ufo_data.filter(ufo_sighting => 
        //   
        //     ufo_sighting.datetime === inputValue && 
        //     ufo_sighting.city === inputCityValue && 
        //     ufo_sighting.state === inputStateValue &&
        //     ufo_sighting.country === inputCountryValue &&
        //     ufo_sighting.shape === inputShapeValue
        // );

    /////////////////////////////////////////////////////////////////////////
    // OPTION 2
        //THIS OPTION ALLOWS USER TO LEAVE FIELDS BLANK AND ONLY ENTER IN ONE OR MORE FIELDS TO SUCCESSFULLY FILTER.
        //Filter in ufo_data variable: For each key (date, city, state, country or shape), assign a value to it. 
        //The value assigned depends on the input value. If input value is nothing ie. '', leave as per the date, city,state, country or shape OBJECT, 
        // and if it is equal to the user input value, assign input value to the object key.`
    var filteredData = ufo_data.filter(ufo_sighting => ufo_sighting.datetime == (inputValue===''?ufo_sighting.datetime:inputValue))
                        .filter(ufo_sighting => ufo_sighting.city == (inputCityValue===''?ufo_sighting.city:inputCityValue))
                        .filter(ufo_sighting => ufo_sighting.state == (inputStateValue===''?ufo_sighting.state:inputStateValue))
                        .filter(ufo_sighting => ufo_sighting.country == (inputCountryValue===''?ufo_sighting.country:inputCountryValue))
                        .filter(ufo_sighting => ufo_sighting.shape == (inputShapeValue===''?ufo_sighting.shape:inputShapeValue));
                
    console.log(filteredData);

    /////////////////////////////////////////////////////////////////////////

    // Assign variable to tbody to edit section
    ufo_table = d3.select("tbody");

    // remove everything in tbody section
    ufo_table.html("");

    //Append the data into created table rows and table datas given the variable filteredData.
    filteredData.forEach((f_ufo_sighting) => {

        // Append the 'tr' rows (only skeleton - no content in the <tr> yet)
        var row = tbody.append("tr");
        // Get the key and value, and for each key and value pair, 
        // Append <td> (only skeleton - no content in the <td> yet)
        Object.entries(f_ufo_sighting).forEach(([key, value]) => {
            console.log(key, value);
            var cell = row.append("td");
            // Append the value into each 'td' cell
            cell.text(value);
        });

    });

};