var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
   extended: true
}));
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());

app.set('view engine', 'pug');

app.use(express.static('public'));
app.use(cookieParser());

app.get('/', function(req, res){
   res.render('login')
});

app.post('/', function(req, res){
   res.cookie('user', req.body).render('login');
});

app.post('/userDetails', function(req,res) {
   console.log('Cookies: ', req.cookies);
   res.render('UserDetails', {user: req.cookies.user});
});
app.listen(PORT, function(){
   console.log("Listening to port 3000")
});
