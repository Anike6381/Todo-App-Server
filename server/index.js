const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
// const globalVariable = require("./nodemonConfig.js");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const todoRoutes = require("./routes/route.js");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: "50mb" }));

dotenv.config();

app.use(cors());

app.use("/todos", todoRoutes);

const port = process.env.PORT;

app.listen(port, () => {
  console.log("Server running on port " + port);
});

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(
      "mongodb+srv://admin:admin@stack-overflow-clone.5xudibm.mongodb.net/?retryWrites=true&w=majority&appName=stack-overflow-clone"
    );
    console.log("MongoDB Connected Successfully!");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

connectDB();
