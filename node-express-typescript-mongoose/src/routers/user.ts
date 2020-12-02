import { Request, Response } from "express";

const express = require('express');
const router = new express.Router();
const User = require('../models/user');

router.get("/", (req: Request, res: Response) => {
    const user = new User({
        firstName: "CHRIS",
        lastName: "KIM",
        email: "007@example.com",
        age: 29
    })

    res.send(user)
})

module.exports = router;