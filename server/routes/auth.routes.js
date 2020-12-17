const express = require("express")
const router = express.Router()
const passport = require("passport")
const bcrypt = require("bcrypt")

const User = require("../models/user.model")


// USER SINGUP

router.post('/signup', (req, res) => {

    const { username, password, name, birthday, country, city } = req.body

    const area = {
        location: [city, country]
    }

    if (!username || !password || !name || !birthday || !country || !city) {
        res.status(400).json({ message: 'Please fill in all fields' })
        return
    }

    // if (!password.match(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/)) {
    //     res.status(400).json({ message: 'Password must contain between 8 and 16 characters, at least one lowercase, one uppercase and one special character' })
    //     return
    // }

    if (!username.match(/^([a-zA-Z0-9]+){2,15}$/)) {
        res.status(400).json({ message: 'Username must be between 2 and 15 characters with no special characters' })
        return
    }

    User
        .findOne({ username })
        .then(foundUser => {
            if (foundUser) {
                res.status(400).json({ message: 'The user already exists' })
                return
            }

            const salt = bcrypt.genSaltSync(10)
            const hashPass = bcrypt.hashSync(password, salt)

            User
                .create({ username, password: hashPass, name, birthday, area })
                .then(newUser => req.login(newUser, err => err ? res.status(500).json({ message: 'Login error' }) : res.status(200).json(newUser)))
                .catch(() => res.status(500).json({ message: 'Error saving user to DB' }))
        })
})


// USER LOGIN

router.post('/login', (req, res, next) => {

    passport.authenticate('local', (err, theUser, failureDetails) => {

        if (err) {
            res.status(500).json({ message: 'Error authenticating user' });
            return;
        }

        if (!theUser) {
            res.status(401).json(failureDetails);
            return;
        }

        req.login(theUser, err => err ? res.status(500).json({ message: 'Session error' }) : res.status(200).json(theUser))

    })(req, res, next)
})


// USER LOGOUT

router.post('/logout', (req, res) => {
    req.logout()
    res.status(200).json({ message: 'Log out success!' });
})


router.get('/loggedin', (req, res) => req.isAuthenticated() ? res.status(200).json(req.user) : res.status(403).json({ message: 'Unauthorized' }))


module.exports = router