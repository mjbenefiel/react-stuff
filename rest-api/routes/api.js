const express = require('express');
const router = express.Router();

//get a list of ninjas from DB 
router.get('/ninjas', function(req, res){
    res.send({type:"GET"});
});

// add a new ninja to db
router.post('/ninjas', function(req, res){
    res.send({type:"POST"});
});

// update ninja in db
router.put('/ninjas/:id', function(req, res){
    res.send({type:"PUT"});
});

// delete ninja from db
router.delete('/ninjas/:id', function(req, res){
    res.send({type:"DELETE"});
});

module.exports = router;