const router = require("express").Router();
const travellerRoutes = require("./travellerRoutes");
const locationsRoutes = require("./locationsRoutes");
const tripsRoutes = require("./tripsRoutes");

router.use("/traveller", travellerRoutes);
router.use("/locations", locationsRoutes);
router.use("/trips", tripsRoutes);

module.exports = router;
