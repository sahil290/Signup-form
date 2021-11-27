const express = require("express");
const mongoose = require("mongoose");
const app = express();
const User  = require("./Routes/userRoute");
const cors = require("cors");
require("dotenv/config");
//Middle wares//
app.use(cors());
app.use(express.json());
app.use("/user", User);
mongoose.connect(process.env.MONGO_DB_URI, { useNewUrlParser: true }, () => {
  console.log("Connected to Data base successfully");
});
app.listen(process.env.PORT, () => {
  console.log("Server is running at port 8000");
});
