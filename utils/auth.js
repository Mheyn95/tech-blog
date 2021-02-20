const withAuth = (req, res, next) => {
  if (!req.session.user_id) {
    console.log(req.session.user_id);
    res.redirect("/login");
  } else {
    console.log("ID found");
    next();
  }
};

module.exports = withAuth;
