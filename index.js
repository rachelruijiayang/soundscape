/* index.js is the entry point for running the web application */

var express = require("express");
var wagner = require("wagner-core");

/* bootstrap Mongoose models */
require("./models")(wagner);

var app = express();

/* bootstrap the application using the api.js file 
app.use() is for Express subrouter functionality
*/
app.use("/api/v1", require("./api")(wagner));

app.listen(3000);
console.log("Listening on port 3000!");