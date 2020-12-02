const express = require('express');
const router = express.Router();
const members = require('../models/Members');
const logger = require('../middleware/logger');

// Gets All Members
router.get('/api/members', logger, (req, res) => {
    res.json(members);
})

// Get Single Member
router.get('/api/members/:id', logger, (req, res) => {

    const found = members.filter(item => item.id === parseInt(req.params.id))

    if(found.length > 0){
        res.json(found)
    }else{
        res.status(400).send("Member not found")
    }
})

// Create Member
router.post('/api/members', logger, (req, res) => {

    const newMember = {
        name: req.body.name,
        email: req.body.email,
        id: 4,
        status: 'active'
    }

    if(!newMember.name || !newMember.email){
        return res.status(400).send("Include name and email...")
    }

    members.push(newMember)
    res.redirect('/');
})

router.put('/api/members/:id', logger, (req, res) => {

    const found = members.filter(member => member.id === parseInt(req.params.id));
    console.log(found, req.body)

    if(found.length > 0){
        members.forEach(member => {
            if(member.id === parseInt(req.params.id)){
                member.name = req.body.name ? req.body.name : member.name
                member.email = req.body.email ? req.body.email : member.email
                
                res.send(member);
            }
        })
    } else{
        res.status(400).send("member no found...")
    }
})

router.delete('/api/members/:id', (req, res) => {

    const deleted = members.filter(member => member.id !== parseInt(req.params.id))

    console.log(deleted);
    res.send(deleted);
})

module.exports = router;