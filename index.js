const express = require("express");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// MongoDB Drive Code
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zwgebdo.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

// create API and connect with Database
async function run() {
  try {
    await client.connect();
    const serviceCollection = client.db("Vacation-Go").collection("services");
    const reviewCollection = client.db("Vacation-Go").collection("reviews");

    // POST (Service)
    app.post("/service", async (req, res) => {
      const data = req.body;
      const result = await serviceCollection.insertOne(data);
      res.send(result);
    });

    // GET (Service)
    app.get("/service", async (req, res) => {
      const query = req.query;
      const result = await serviceCollection.find(query).toArray();
      res.send(result);
    });

    // GET One Service by ID
    app.get("/service/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await serviceCollection.findOne(query);
      res.send(result);
    });

    // DELETE (Service)
    app.delete("/product/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await serviceCollection.deleteOne(query);
      res.send(result);
    });

    // POST (Review)
    app.post("/review", async (req, res) => {
      const data = req.body;
      const result = await reviewCollection.insertOne(data);
      res.send(result);
    });

    // GET (Review)
    app.get("/review", async (req, res) => {
      const query = req.query;
      const result = await reviewCollection.find(query).toArray();
      res.send(result);
    });
  } finally {
  }
}
run().catch(console.dir);

// running the server
app.get("/", (req, res) => {
  res.send("VacationGO server is running...");
});

// listening port
app.listen(port, () => {
  console.log("Listening to port", port);
});