const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja')


// list of ninjas
router.get('/ninjas',function(req,res,next){

    res.send({type: 'GET'})

})

router.post('/ninjas',function(req,res,next){
    // var ninja = new Ninja(req.body);
    // ninja.save();
    Ninja.create(req.body).then(function(ninja){
        res.send(ninja)
    }).catch(next)


})

router.put('/ninjas/:id',function(req,res,next){

    res.send({type: 'PUT'})

})

router.delete('/ninjas/:id',function(req,res,next){
    Ninja.findOneAndRemove({_id: req.param.id}).then(function(ninja){
        res.send(ninja)
    });

})

module.exports = router;