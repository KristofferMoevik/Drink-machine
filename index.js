
var express = require('express');
var app = express();
  
// Set EJS as templating engine 
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
  
// Employees data
const drinks = [
    {
        name: "Mojito",
        image: "/img/mojito 500x500.png"
    },
    {
        name: "Mojito",
        image: "/img/mojito 500x500.png"
    },
    {
        name: "Mojito",
        image: "/img/mojito 500x500.png"
    }
]
  
app.get('', (req, res) => {
  
    // Render method takes two parameter
    // first parameter is the ejs file to 
    // render second parameter is an 
    // object to send to the ejs file
    res.render('index.ejs', { drinks: drinks });
})
  
// Server setup
app.listen(3000, function (req, res) {
    console.log("Connected on port:3000");
});