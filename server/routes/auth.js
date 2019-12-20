const express = require('express');
const router = express.Router();
const userModel = require('../model/userModel');
const bcrypt = require('bcryptjs')
const config = require ('config')
const jwt = require ('jsonwebtoken')
const passport = require('passport');
const passportGoogle = require('../passportGoogle')


//login
router.post('/', (req, res) => {
    const {email, password} = req.body
    if (!email || !password){
        return res.status(400).json({msg: 'Please enter all fields'})
    }
    userModel.findOne({ email })
        .then(user => {
            if(!user) return res.status(400).json({msg: "No account exists with this email address"});

            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(!isMatch){return res.status(400).json({msg: 'invalid credentials'});
                    }
                const payload = {
                        id: user.id,
                        name: user.name,
                        image: user.image
            };
                jwt.sign(
                    payload,
                    config.get('jwtSecret'),
                    {expiresIn: 3600 },
                    (err, token) => {
                        if(err) {
                            res.json({
                                msg: 'An error occured. Please reset the universe and try again.',
                                success: false,
                                token: "There was an error"
                            });
                        } else {
                        res.json({
                            msg: 'Login successful',
                            token,
                            success: true,
                            user: {
                                id: user.id,
                                name: user.name,
                                image: user.image
                            }
                        });
                        }
                    }
                )
            })
        })
      .catch(err => {
      res.status(500).send("Server error")}) 
});

router.get('/user', (req, res) => {
    userModel.findById(req.user.id)
        .select('-password')
        .then(user => res.json(user));
});

router.get('/google', 
passport.authenticate('google', { scope: ['profile', 'email'] })
);


router.get('/redirect',  
passport.authenticate('google', { failureRedirect: 'http://localhost:3000/' }),
function(req, res) {
userModel.findById(req.user.id)
    .then(user => {
        const payload = {
                id: user.id,
                name: user.name,
                image: user.image
        };
        jwt.sign(
            payload,
            config.get('jwtSecret'),
            {expiresIn: 3600 },
            (err, token) => {
                if(err) {
                    res.json({
                        msg: 'An error occured. Please reset the universe and try again.',
                        success: false,
                        token: "There was an error"
                    });
                } else { 
                res.redirect('http://localhost:3000/landing/'+ token);
                }
            }
        )   
    })
        .catch(err => {
            res.status(500).send("Server error")})
})


module.exports = router;