const express = require('express')
const router = express.Router()
const Asistencia = require('../models/Asistencia')

isAuth = (req, res, next) => {
  if (req.isAuthenticated() && req.user.status === 'Activo') {
    next()
  } else {
    res.redirect('/auth/login')
  }
}

router.get('/asistencias', isAuth, (req, res) => {
  const { user } = req
  Asistencia.find({ status: 'Confirmación pendiente' })
    .populate('solicitante')
    .then(asistencias => {
      res.status(201).json({ user, asistencias, isFixer: 'isFixer' })
    })
})

router.get('/asistencias/nueva', isAuth, (req, res) => {
  const { user } = req
  res.status(201).json({ user, isUser: 'isUser' })
})

router.post('/asistencias/nueva', isAuth, (req, res, next) => {
  let images = req.files.map(file => file.url)
  let { _id: solicitante } = req.user
  let { lat, lng, address, ...asistencia } = req.body
  let location = { address, coordinates: [lat, lng] }
  asistencia = { ...asistencia, images, solicitante, location }
  Asistencia.create(asistencia)
    .then(() => {
      res.status(201).json()
    })
    .catch(err => {
      res.status(500).json({ err })
    })
})

router.get('/asistencias/:id/editar', isAuth, (req, res, next) => {
  const { id } = req.params
  Asistencia.findById(id)
    .then(asistencia => {
      res.status(201).json({ asistencia })
    })
    .catch(err => {
      res.status(500).json({ err })
    })
})

router.post('/asistencias/:id/editar', isAuth, (req, res) => {
  const { id: _id } = req.params
  let { lat, lng, address, ...asistencia } = req.body
  let location = { address, coordinates: [lat, lng] }
  asistencia = { ...asistencia, location }
  Asistencia.findOneAndUpdate({ _id }, { $set: user })
    .then(() => {
      res.status(201).json()
    })
    .catch(err => {
      res.status(500).json({ err })
    })
})

router.post('/asistencias', isAuth, (req, res) => {
  let { _id: fixer } = req.user
  let { id } = req.body
  Asistencia.findByIdAndUpdate(id, { status: 'Aceptada', fixer: fixer }).then(() => res.status(201).json())
})

router.post('/asistencias/cancelar', isAuth, (req, res) => {
  let { id } = req.body
  Asistencia.findByIdAndUpdate(id, { status: 'Cancelada' }).then(() => res.status(201).json())
})

router.get('/asistencias/:id', isAuth, (req, res) => {
  const { id } = req.params
  const { user } = req
  Asistencia.findById(id)
    .populate('solicitante')
    .then(asistencia => {
      res.status(201).json({
        user,
        asistencia,
        isFixer: 'isFixer'
      })
    })
})

module.exports = router
