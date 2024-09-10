import * as dotenv from 'dotenv'
dotenv.config()

export const envConfig = {
  dbUsername: process.env.DB_USERNAME,
  dbPassword: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME,
  PORT: process.env.PORT
}
