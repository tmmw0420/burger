var express = require('require');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();
var exphbs = require('express-handlebars');
var routes = require('./controllers/burgers_controller.js');
var port = 3000;


app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(methodOverride('_method'));

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

app.use ('/', routes);

app.listen(port);

























