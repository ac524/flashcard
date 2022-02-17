const withApiAuth = (req, res, next) => {
  // If the user is not logged in, redirect the request to the login route
  if (!req.session.logged_in) {
    res.status(401).json({ error: "Unauthorized" });
  } else {
    next();
  }
};

module.exports = withApiAuth;
