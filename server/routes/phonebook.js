var express = require('express');
var router = express.Router();
const Phonebook = require('../model/phonebook');

router.get('/', function(req, res) {
    Phonebook.find(function (err,response) {
        if (err) {
            res.status(400).json({'error':err})
        } else {
            res.status(200).json(response);
        }
    })
});

router.post('/', function(req, res) {
    let name = req.body.name;
    let phone = req.body.phone;
    try {
        const newPhone = new Phonebook({name,phone});
        newPhone.save().then(dataCreated => {
            res.status(201).json({status:'success',data:dataCreated})
        })
    } catch (error) {
        res.status(400).json({status:'failed',error});
    }
})

router.put('/:idPhonebook', function (req, res) {
    let idPhonebook = req.params.idPhonebook;
    let name = req.body.name;
    let phone = req.body.phone;
    Phonebook.findOneAndUpdate({_id:idPhonebook},{name,phone},function (err,response) {
        if (err) {
            res.status(400).json({status:'failed',error:err});
        } else {
            res.status(201).json({status:'success',data:response});
        }
    })
})

router.post('/search',function (req, res) {
    let filterSearch = {name:{$regex:req.body.name,$options:'i'},
                        phone:{$regex:req.body.phone,$options:'i'}}
    if (!req.body.name) {
        delete filterSearch['name'];
    }
    if (!req.body.phone) {
        delete filterSearch['phone'];
    }
    Phonebook.find(filterSearch, function(err, response) {
        if (err) {
            res.status(400).json({'error':err});
        } else {
            res.status(200).json(response);
        }
    })
})

router.delete('/:idPhonebook', function (req,res) {
    let idPhonebook = req.params.idPhonebook;
    Phonebook.findOneAndDelete({_id:idPhonebook},function (err,response) {
        if (err) {
            res.status(400).json({status:'failed',error:err});
        } else {
            res.status(201).json({status:'success',data:response});
        }
    })
})

module.exports = router;
