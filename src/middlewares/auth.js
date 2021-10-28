module.exports = (req, res, next) => {
  const { user } = req.session;
  if (user.admin) {
    res.locals.user = user;
    return next();
  }
  return res.redirect("/");
};
