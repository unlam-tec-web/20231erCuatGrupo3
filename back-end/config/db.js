require('./env');
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = process.env.CONNECTION;
let db;

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  async function connect() {
    try {
      await client.connect();
      db = client.db();
      console.log('Conexión exitosa a la base de datos');
    } catch (error) {
      console.error('Error de conexión a la base de datos:', error);
    }
  }

  const connectionPromise = connect();

  module.exports = connectionPromise.then(() => db);