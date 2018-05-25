var express    = require('express')
var app        = express()
var passport   = require('passport')
var session    = require('express-session')
var RedisStore = require('connect-redis')(session)
var bodyParser = require('body-parser')
var env        = require('dotenv').load()
var exphbs     = require('express-handlebars')
var mysql      = require('mysql')


//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


 // For Passport
app.use(session({ store: new'RedisStore(options)',secret: 'keyboard cat',resave: false, saveUninitialized:true})); // session secret
app.use(function (req, res, next) {
  if (!req.session) {
    return next(new Error('oh no')) // handle error
  }
  next() // otherwise continue
});
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions



 //For Handlebars
app.set('views', './app/views')
app.engine('hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');


app.get('/', function(req, res){
  res.send('Welcome to Passport with Sequelize');
});


//Models
var models = require("./app/models");


//Routes
var authRoute = require('./app/routes/auth.js')(app,passport);


//load passport strategies
require('./app/config/passport/passport.js')(passport,models.user);


//Sync Database
models.sequelize.sync().then(function(){
console.log('Nice! Database looks fine')

}).catch(function(err){
console.log(err,"Something went wrong with the Database Update!")
});



app.listen(process.env.PORT || 5000, function(err){
    if(!err)
    console.log("Site is live"); else console.log(err)

});
