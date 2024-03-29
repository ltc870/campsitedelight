const asyncHandler = require("express-async-handler");
const Campsite = require("../model/campsiteModel");

const getCampsites = asyncHandler(async (req, res) => {
  const campsites = await Campsite.find({ user: req.user.id });
  res.status(200).json(campsites);
});

const setCampsite = asyncHandler(async (req, res) => {
  if (!req.body.url || !req.body.name || !req.body.description) {
    res.status(400);
    throw new Error("All fields are required");
  }

  const campsite = await Campsite.create({
    //@ this is where I need to make changes for the app to work
    text: req.body.text,
    user: req.user.id,
  });
  res.status(200).json(campsite);
});

const User = require("../model/userModel");

// const updateCampsite = asyncHandler(async (req, res) => {
//   res.status(200).json({ message: `Updated campsite ${req.params.id}` });
// });

const deleteCampsite = asyncHandler(async (req, res) => {
  const campsite = await Campsite.findById(req.params.id);

  if (!campsite) {
    res.status(400);
    throw new Error("Campsite not found");
  }

  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("No such user found");
  }

  if (campsite.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User is not authorized to delete");
  }

  await Campsite.findByIdAndDelete(req.params.id);

  res.status(200).json({ id: req.params.id });
});

module.exports = { getCampsites, setCampsite, deleteCampsite };
