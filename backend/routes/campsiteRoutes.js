const express = require("express");
const router = express.Router();
const {
  getCampsites,
  setCampsite,
  // updateCampsite,
  deleteCampsite,
} = require("../controllers/campsiteController");

const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, getCampsites);
router.post("/", protect, setCampsite);
// router.put("/:id", updateCampsite);
router.delete("/:id", protect, deleteCampsite);

module.exports = router;
