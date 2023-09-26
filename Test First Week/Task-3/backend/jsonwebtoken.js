
const express = require('express')
const { UserModel } = require('../Models/User.model')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt');


UserRoute.post('/login', async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await UserModel.find({ email })
        if (user.length > 0) {
            bcrypt.compare(password, user[0].password, (err, result) => {
                if (result) {
                    const token = jwt.sign({ userID: user[0]._id }, "caloriecalculator")
                    res.send({ "msg": "Login sucessful", "success": true, token, user })
                } else {
                    res.send({ "msg": "Wrong crediential", "success": false })
                }
            });
        } else {
            res.send({ "msg": "Wrong crediential", "success": false })
        }
    } catch (err) {
        res.send({ "msg": "Something Wrong", "success": false })
    }
})

module.exports = {
    UserRoute
}