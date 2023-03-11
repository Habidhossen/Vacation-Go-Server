const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./config/db_conn");
const port = process.env.PORT || 4000;
const app = express();
const serviceRouter = require("./routes/service.route");
const reviewRouter = require("./routes/review.route");
const blogRouter = require("./routes/blog.route");
const bookingRouter = require("./routes/booking.route");

// middleware
app.use(cors());
app.use(express.json());

/* 
// mongoDB drive code
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.3mjkw.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

// create API and connect with Database
async function run() {
  try {
    await client.connect();
    // const serviceCollection = client.db("Vacation-Go").collection("services");
    const reviewCollection = client.db("Vacation-Go").collection("reviews");
    const blogCollection = client.db("Vacation-Go").collection("blogs");
    const bookingServiceCollection = client
      .db("Vacation-Go")
      .collection("bookings");
    const adminCollection = client.db("Vacation-Go").collection("admin");

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
    app.delete("/service/:id", async (req, res) => {
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

    // POST (Blog)
    app.post("/blog", async (req, res) => {
      const data = req.body;
      const result = await blogCollection.insertOne(data);
      res.send(result);
    });

    // GET (Blog)
    app.get("/blog", async (req, res) => {
      const query = req.query;
      const result = await blogCollection.find(query).toArray();
      res.send(result);
    });

    // GET One Blog by ID
    app.get("/blog/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await blogCollection.findOne(query);
      res.send(result);
    });

    // DELETE (Service)
    app.delete("/blog/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await blogCollection.deleteOne(query);
      res.send(result);
    });

    // POST (Booking-Service)
    app.post("/booking", async (req, res) => {
      const data = req.body;
      const result = await bookingServiceCollection.insertOne(data);
      res.send(result);
    });

    // GET (Booking-Service)
    app.get("/booking", async (req, res) => {
      const query = req.query;
      const result = await bookingServiceCollection.find(query).toArray();
      res.send(result);
    });

    // GET One (Booking) by Email
    app.get("/booking/:email", async (req, res) => {
      const email = req.params.email;
      const filter = { email: email };
      const result = await bookingServiceCollection.find(filter).toArray();
      res.send(result);
    });

    // DELETE (Booking-Service)
    app.delete("/booking/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await bookingServiceCollection.deleteOne(query);
      res.send(result);
    });

    // GET (Admin-Role using Email)
    app.get("/admin/:email", async (req, res) => {
      const email = req.params.email;
      const user = await adminCollection.findOne({ email: email });
      const isAdmin = user?.role === "admin";
      res.send({ admin: isAdmin });
    });
  } finally {
  }
}
run().catch(console.dir); */

// running the server
// app.get("/", (req, res) => {
//   res.send("VacationGO server is running...");
// });

// listening port
app.listen(port, () => {
  console.log("Listening on port", port);
});

// Route
app.use("/api", serviceRouter);
app.use("/api", reviewRouter);
app.use("/api", blogRouter);
app.use("/api", bookingRouter);

// Home Route
app.get("/", (req, res) => {
  res.status(200).send("Welcome to Vacation Go Server");
});

// If Route not found
app.use((req, res, next) => {
  res.status(404).json({
    message: "Route Not Found!",
  });
});

// if Server Error
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "Something is broke!",
  });
});
