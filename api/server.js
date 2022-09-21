import* as dotenv from 'dotenv'
import express from 'express'
import { MongoClient, ServerApiVersion } from 'mongodb'

// Import environment variable
dotenv.config()
// Create express instance
const app = express()

const uri = `mongodb+srv://${process.env.DB_NODE}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1
})

client.connect(err => {
  if(err) return console.log('Connection error' + err)
  console.log('Mongo is connected')
})

client.close();
