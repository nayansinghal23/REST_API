require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;
const products_routes = require("./routes/products");
const connectDB = require("./db/connect");

app.get("/", (req, res) => {
  res.send("Hi I am Nayan Singhal");
});

// middleware so that we don't use app.get() in future
app.use("/api/products", products_routes);

// run your database
const db = async () => {
  await connectDB(process.env.MONGO_URI);
  console.log("Done");
};
db();

app.listen(PORT, () => {
  console.log(`${PORT} yes I am connected`);
});
