module.exports = (req, res, next) => {
  const { user } = req.session;
  if (typeof user != "undefined") {
    res.locals.user = user;
    return next();
  }
  return res.redirect("/login");
};
