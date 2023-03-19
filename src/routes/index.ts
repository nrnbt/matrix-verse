import express from 'express'
import multer from 'multer'

const upload = multer({
  dest: '/tmp'
})

const api = express.Router()
api.use(express.json())
api
  .use('/', express.Router()
    .get('/', (req, res, next) => res.send('api'))
  )

export default api
