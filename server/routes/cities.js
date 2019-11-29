const express = require('express');

const router = express.Router();

const cityModel = require('../model/cityModel');

router.get('/test', (req, res) => {
    console.log(req)
    res.send({ msg: 'Cities test route.' })
});

router.get('/city/:name', (req, res) => {
    let cityRequested = req.params.name
    cityModel.findOne({name:cityRequested})
        .then(city => {
            res.send(city)
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

router.post('/', (req, res) => {
    const newCity = new cityModel({
        name: req.body.name,
        country: req.body.country,
        image: req.body.image
    })
    
    cityModel.find({})
        .then(files => {
            let isUnique = true;
            for (i=0; i < files.length; i++) {
                if (files[i].name === newCity.name && files[i].country === newCity.country) {
                    isUnique = false;
                    console.log( "newCity name", newCity.name)
                    console.log( "duplicate city name", files[i].name)
                }
            }
            if (isUnique == true){
                newCity.save()
                    .then(city => {
                        res.send(city)
                    });
            }else {
                console.log("This city is already in the database.")
            }
        })
      .catch(err => {
      res.status(500).send("Server error")}) 
});


module.exports = router;