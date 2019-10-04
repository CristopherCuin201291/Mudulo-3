const express = require('express')
const router = express.Router()
const User = require('../models/User')

isAuth = (req, res, next) => {
  if (req.isAuthenticated() && req.user.status === 'Activo') {
    next()
  } else {
    res.redirect('/auth/login')
  }
}

router.get('/perfil', isAuth,(req, res) => {

  const { user } = req
  if (user.role === 'User') {
    Asistencia.find({ solicitante: user._id })
      .populate('fixer')
      .then(asistencias => {
        res.status(201).json({ user, asistencias, isUser: 'isUser' })
      })
  } else if (user.role === 'Fixer') {
    Asistencia.find({ fixer: user._id })
      .populate('solicitante')
      .then(asistencias => {
        res.status(201).json('profile', { user, asistencias, isFixer: 'isFixer' })
      })
  }
})

router.get('/perfil/:id/editar', isAuth, (req, res) => {
  const { id } = req.params
  User.findById(id)
    .then(user => {
      res.status(201).json({ user })
    })
    .catch(err => {
      res.status(201).json({ err })
    })
})

router.post('/perfil/:id/editar', isAuth,(req, res) => {
  const { id: _id } = req.params
  const { email } = req.user
  const image = req.file ? req.file.url : undefined
  const user = image ? { ...req.body, image } : req.body
  User.findOneAndUpdate({ _id, email }, { $set: user })
    .then(() => {
      res.status(201).json()
    })
    .catch(err => {
      res.status(500).json({ err })
    })
})

module.exports = router
