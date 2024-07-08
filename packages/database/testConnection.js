const { MongoClient } = require('mongodb');
require('dotenv').config();

async function run() {
  try {
    const uri = process.env.DATABASE_URL;
    if (!uri) {
      throw new Error("DATABASE_URL não está definida");
    }

    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    await client.connect();
    console.log("Connected successfully to MongoDB");

    await client.close();
  } catch (err) {
    console.error("Connection failed", err);
  }
}

run();
