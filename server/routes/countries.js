const express = require("express");
const Country = require("../models/Country");

const router = express.Router();

router.use((req, res, next) => {
  console.log("DEBUG routes/countries");
  next();
});

// Route to get all countries
router.get("/", (req, res, next) => {
  Country.find()
    .then(countries => {
      res.json(countries);
    })
    .catch(err => next(err));
});

// Get country details
router.get("/:id", (req, res, next) => {
  Country.findById(req.params.id)
    .then(country => {
      res.json(country);
    })
    .catch(next);
});

// Route to add a country
router.post("/", (req, res, next) => {
  let { name, capitals, area, description } = req.body;
  Country.create({ name, capitals, area, description })
    .then(country => {
      res.json({
        success: true,
        country
      });
    })
    .catch(err => next(err));
});

// Update a country
router.put("/:id", (req, res, next) => {
  Country.findByIdAndUpdate(req.params.id, { name, capitals, area, description })
    .then(country => {
      res.json({
        success: true,
        country
      });
    })
    .catch(next);
});

// Delete a country
router.delete("/:id", (req, res, next) => {
  Country.findByIdAndDelete(req.params.id)
    .then(country => {
      res.json({
        message: "The country was deleted",
        country
      });
    })
    .catch(next);
});

module.exports = router;
