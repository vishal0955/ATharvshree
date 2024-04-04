const express = require("express");
const router = express.Router();
const banner = require("../controller/index");

router.post("/addBanner", banner.addBanner);
router.get("/getBanners", banner.getBanners);
router.post("/deleteBanner", banner.deleteBanner)

router.post("/addTredningHouse", banner.addTrendingHouse);
router.post("/getTrendingHouses", banner.getTrendingHouse);
router.post("/deleteTrendingHouse", banner.deleteTrendingHouse)

// router.post("/addHouseElevation", banner.addHouseElevation);
// router.get("/getHouseElevation", banner.getHouseElevation)

module.exports = router;