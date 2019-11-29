const express = require('express');

const router = express.Router();

const itineraryModel = require('../model/itineraryModel');

const cityModel = require('../model/cityModel');


router.get('/:name', (req, res) => {
    let cityRequested = req.params.name
    itineraryModel.find({city:cityRequested})
        .then(itineraries => {
            res.send(itineraries)
        })
        .catch(err => console.log(err));
    }
);

router.get('/all',
    (req, res) => {
    cityModel.find({})
        .then(files => {
            res.send(files)
        })
        .catch(err => console.log(err));
    }
);


module.exports = router;