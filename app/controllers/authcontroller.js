var exports = module.exports = {}


exports.signup = function(req,res){

	res.render('signup'); 

}

exports.signin = function(req,res){

	res.render('signin'); 

}

exports.dashboard = function(req,res){

	//res.render('dashboard'); 
  window.location.replace("https://desolate-springs-87096.herokuapp.com/");
}

exports.logout = function(req,res){

  req.session.destroy(function(err) {
  res.redirect('/');
  });

}