const express = require('express');

const router = express.Router();

const userModel = require('../model/userModel');

router.get('/:name', (req, res) => {
    let userRequested = req.params.name
    userModel.findOne({name:userRequested})
        .then(user => {
            res.send(user)
        })
        .catch(err => console.log(err));
    }
);


router.post('/newUser', (req, res) => {
    const newUser = new userModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        image: req.body.image
    })
    
    userModel.find({})
        .then(users => {
            let isUnique = true;
            for (i=0; i < users.length; i++) {
                if (users[i].email === newUser.email) {
                    isUnique = false;
                }
            }
            if (isUnique == true){
                newUser.save()
                    .then(user => {
                        res.send(user)
                    });
            }else {
                console.log("An account linked to this email address already exists")
            }
        })
      .catch(err => {
      res.status(500).send("Server error")}) 
});


module.exports = router;