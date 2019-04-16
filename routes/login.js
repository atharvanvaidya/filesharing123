global.post_login = function(passport) {
  console.log("pre-return");
  return  passport.authenticate('login', {
        successRedirect: '/upload.html',
        failureRedirect: '/login'
    });
};

global.get_signup = function(req,res) {
 res.sendfile('views/signup.html');
};

global.post_signup = function(passport) {
  return passport.authenticate('signup', {
        successRedirect: '/upload.html',
        failureRedirect: '/signup'
    });
};

global.get_login = function(req,res,next) {
   res.sendfile('views/login.html');
};

global.get_signout = function(req, res) {
        req.logout();
        res.redirect('/');
    };



