import cors from 'cors'
import express from 'express'
import { Db } from 'mongodb'
import next from 'next'
import api from './routes/index'
import { mongo } from './services/database'

const { BASE_PATH = '/' } = process.env

const dev = process.env.NODE_ENV !== 'production'
const PORT: string | number = process.env.PORT ?? 4000

const app = next({ dev })
const handle = app.getRequestHandler()

const main = async (): Promise<void> => {
  await mongo()
  await app.prepare()
    .then(() => {
      const server = express()
      server.use(`${BASE_PATH}/api`, api)
      server.use(cors())
      server.all('*', (req, res, next) => {
        handle(req, res).catch(e => next(e))
      })
      server.listen((PORT), () => {})
    }).catch((e) => {})
}

main().catch(e => {
  console.error('server startup error', e)
})
