const express = require('express');
const router = express.Router();

const renter = require('../renters');
  

// POST 
router.post('/renters', async (req, res) => {
    const newRenter = await new Renter(
      {
        name: req.body.name,
        weakness: req.body.weakness,
        heroEnemy: req.body.heroEnemy,
        alive: req.body.alive
      }
    ).save();
  
    try {
      return res.json(newRenter)
    } catch (error) {
      return res.json({message: error})
    }
      
  })