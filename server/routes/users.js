const express = require('express');
const router = express.Router();
const userModel = require('../model/userModel');
const bcrypt = require('bcryptjs')
const config = require ('config')
const jwt = require ('jsonwebtoken')
const { check, validationResult } = require('express-validator');

//post new user
router.post('/newUser',
    [
    check('email').isEmail(),
    check('password').isLength({ min: 8 })
    ], (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(422).json({ msg: "Your email address must be valid and your password must be a minumum of 8 characters."});
        }
    const {name, email, password} = req.body
    if (!name || !email || !password){
        return res.status(400).json({msg: 'Please enter all fields'})
    }
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
            if (isUnique === true){
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if(err) throw err;
                        newUser.password = hash;
                        newUser.save()
                            .then(user=>{
                                jwt.sign(
                                    { id: user.id },
                                    config.get('jwtSecret'),
                                    {expiresIn: 3600 },
                                    (err, token) => {
                                        if(err) throw err;
                                        res.json({
                                            token: token,
                                            user: {
                                                id: user.id,
                                                name: user.name,
                                                email: user.email,
                                                image: user.image
                                            }
                                        });
                                    }
                                )                              
                            })
                    })
                })
                return res.status(200).json({msg: 'Account Created'});
            }else {
                return res.status(400).json({ msg: 'An account linked to this email address already exists'})
            }
        })
      .catch(err => {
      res.status(500).send("Server error")}) 
});
module.exports = router;