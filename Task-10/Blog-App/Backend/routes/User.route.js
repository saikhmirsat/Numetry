const express = require('express')
const { UserModel } = require('../models/User.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const UserRoute = express.Router()

UserRoute.get('/', async (req, res) => {
    try {
        const data = await UserModel.find();
        if (!data || data.length === 0) {
            return res.status(404).json({ message: 'No user data found.' });
        }
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching user data:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});
UserRoute.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const user = await UserModel.findOne({ _id: id }); 

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error('Error fetching user data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

UserRoute.post('/register', async (req, res) => {
    const { firstName, lastName, email, mobile, gender, password } = req.body;
    const isValidEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    try {
        const existingUser = await UserModel.find({ email });
        if (!isValidEmail(email)) {
            return res.status(500).json({ message: 'Email is not valid. Please check.', status: false });
        }

        if (existingUser.length > 0) {
            return res.status(404).json({ message: 'User already exists. Please try again with a different email.', status: false });
        }

        bcrypt.hash(password, 10, async (err, hash) => {
            if (err) {
                return res.status(500).json({ status: false, message: err.message });
            }

            try {
                const newUser = await UserModel.create({
                    firstName,
                    lastName,
                    email,
                    mobile,
                    password: hash,
                });

                console.log(newUser)
                return res.status(200).json({ status: true, message: "User Register Successfully" });
            } catch (err) {
                return res.status(500).json({ status: false, message: err.message });
            }
        });
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ message: 'Internal server error.', status: false });
    }
});


UserRoute.post('/login', async (req, res) => {
    const { email, password } = req.body
    try {
        const finduser = await UserModel.find({ email })
        console.log(finduser.length)

        if (finduser.length < 1) {
            return res.status(404).json({ message: "Please Register first", status: false })
        } else {
            bcrypt.compare(password, finduser[0].password, async (err, result) => {
                if (result) {
                    const token = jwt.sign({ UserID: finduser[0]._id }, "saikhmirsat", {
                        expiresIn: "1d",
                    });

                    await UserModel.updateMany(
                        { _id: finduser[0]._id },
                        [{ $set: { loginToken: token } }, { $set: { isAuthUser: true } }]
                    );

                    const user = await UserModel.find({ email });



                    return res.status(200).json({ status: true, message: "User Login Successfully", user: user[0] });
                } else {
                    return res.send({ status: false, message: "Wrong creadencial" });
                }
            })
        }
    } catch {
        console.error('Error during registration:', error)
        res.status(500).json({ message: 'Internal server error.', status: false })
    }
})






module.exports = {
    UserRoute
}