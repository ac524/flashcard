const router = require("express").Router();

const setViewData = require("../utils/setViewData");

const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");

router.use("/", setViewData, homeRoutes);
router.use("/api", apiRoutes);

module.exports = router;
