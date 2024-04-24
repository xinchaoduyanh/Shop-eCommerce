import { MongoClient, Db, Collection } from 'mongodb'
import { envConfig } from '~/constants/config'
const uri = `mongodb+srv://${envConfig.dbUsername}:${envConfig.dbPassword}@twitter.ksyhz00.mongodb.net/?retryWrites=true&w=majority`

class DatabaseService {
  private client: MongoClient
  private db: Db
  constructor() {
    this.client = new MongoClient(uri)
    this.db = this.client.db(envConfig.dbName)
  }

  async connect() {
    try {
      await this.db.command({ ping: 1 })
      console.log('Pinged your deployment. You successfully connected to MongoDB!')
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}
const databaseService = new DatabaseService()
export default databaseService
