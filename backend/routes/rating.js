const express = require('express')
const router = express.Router()
const Rating = require('../models/Rating')
const User = require('../models/User')

router.get('/rating/:id/', (req, res, next) => {
  const { id } = req.params
  Rating.findById(id)
    .then(rating => {
      res.status(201).json({ rating })
    })
    .catch(err => {
      res.status(500).json({ err })
    })
})

router.post('/rating/:id', (req, res, next) => {
  const { id } = req.params
  Rating.findByIdAndUpdate(id, { rating: '5' }).then(() => res.status(201).json())
})

module.exports = router
