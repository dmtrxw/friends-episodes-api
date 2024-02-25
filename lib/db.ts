import { MongoClient, ServerApiVersion } from 'mongodb'
const uri = process.env.MONGODB_URL

export const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
})

export const db = client.db(process.env.MONGODB_DB_NAME)
