const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');




//middleware
/*static folder to serve html, css and imgs*/
app.use(express.static(__dirname + '/public'));
/*ejs*/
app.use(expressLayouts);
app.set('view engine', 'ejs');
/*body parser*/
app.use(express.urlencoded({ extended: false }));

app.use('/', require('./routes/index.js'));







const PORT = process.env.PORT || 8000;
app.listen
    (
        PORT,
        () => {

            console.log(`Server started on PORT ${PORT}...`);
        }
    );