const User = require("../Models/User");

module.exports.newUser = async function (req?: any, res?: any) {
  try {
    console.log("User request route created");
    res.status(200).json({ message: "chala jata hun kisi ki dfun mein" });
  } catch (error) {}
};
