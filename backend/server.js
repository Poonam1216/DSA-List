const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require("./config/bd");
const app = express();
// here we have to connect to MongoD
connectDB();

//middleware
app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
