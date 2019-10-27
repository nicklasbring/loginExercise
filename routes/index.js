var express = require('express');
var router = express.Router();
var cookieParser = require('cookie-parser');
var app = express();
app.use(cookieParser());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/loginY", (req, res) => {
  console.log("Nogen prøver at logge ind på systemet!");
  if(req.body.Brugernavn == "andras" && req.body.Password == "acs"){
    //res.cookie("yourUsername:", req.cookies.yourUsername);
    //console.log('Cookies: ', req.cookies.yourUsername);
    res.end("Du er logget ind som: " + req.cookies.yourUsername);
  }
  else{
    res.end("Brugernavn eller Password er inkorrekt!");
  }
});

module.exports = router;
