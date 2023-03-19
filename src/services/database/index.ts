import { MongoClient, Db, Collection } from 'mongodb'

const MONGO_URL = process.env.MONGO_URL ?? 'mongodb://localhost:27017'
const MONGO_DB = process.env.MONGO_DB ?? ''

export const mongo = async (): Promise<Db> => {
  const client: MongoClient = await MongoClient.connect(MONGO_URL)
  return client.db(MONGO_DB)
}

export const collection = (db: Db): Collection => {
  return db.collection('Collection')
}
