const { User } = require("../models");

const setViewData = async (req, res, next) => {
  // Deconstruct data from the user's session
  const { logged_in, user_id } = req.session;

  req.viewData = {
    logged_in,
  };

  if (logged_in && user_id) {
    // Add the current user data if we have a logged in user id to work with.
    const userRecord = await User.findByPk(user_id, {
      attributes: { exclude: ["password"] },
    });

    if (userRecord) {
      req.viewData.user = userRecord.toJSON();
    }
  }
  

  return next();
};

module.exports = setViewData;
