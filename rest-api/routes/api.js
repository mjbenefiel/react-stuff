const express = require("express");
const router = express.Router();
const Ninja = require("../models/ninja");

//get a list of ninjas from DB
router.get("/ninjas", function(req, res, next) {
  // find all ninjas
  // Ninja.find({}).then(function(ninjas){
    // res.send(ninjas);
  // })
  Ninja.geoNear(
    {type: 'Point', coordinates:[parseFloat(req.query.lng), parseFloat(req.query.lat)]}
    {maxDistance: 1000, spherical: true}
  ).then(function(ninjas){
    res.send(ninjas);
  });
});

// add a new ninja to db
router.post("/ninjas", function(req, res, next) {
  //   console.log(req.body);
  Ninja.create(req.body)
    .then(function(ninja) {
      res.send(ninja);
    })
    .catch(next);
  //   var ninja = new Ninja(req.body);
  //   ninja.save();
});

// update ninja in db
router.put("/ninjas/:id", function(req, res, next) {
  Ninja.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function() {
    Ninja.findOne({ _id: req.params.id }).then(function(ninja) {
      res.send(ninja);
    });
  });
});

// delete ninja from db
router.delete("/ninjas/:id", function(req, res, next) {
  //    console.log(req.params.id);
  Ninja.findOneAndDelete({ _id: req.params.id }).then(function(ninja) {
    res.send(ninja);
  });
});

module.exports = router;
