const { MongoClient } = require("mongodb");

// Connection URI
const uri =
  "mongodb+srv://user:12345@mern-cluster.xylyi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// Create a new MongoClient
const client = new MongoClient(uri);

async function run() {
  try {
    // Connect the client to the server
    await client.connect();

    // Establish and verify connection
    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to server");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
