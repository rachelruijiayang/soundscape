/* index.js is the entry point for running the web application */
var express = require("express");
var wagner = require("wagner-core");

require("./models")(wagner) // what does the wagner in parentheses mean?

var app = express();

/* app.use():
bind middleware functions to an instance of the app object by using
the app.use() and app.METHOD() functions
*/
app.use("/api/", require("./api")(wagner));

// see AngularJS Services and HTTP
app.use(express.static("../"));

app.listen(8080);
console.log("Server listening on port 8080!");
