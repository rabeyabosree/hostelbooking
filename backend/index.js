const express = require("express");
const core = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const data = require("./data/data");
const Products = require("./models/roomModel")

// create app 
const app = express()

// file middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connection with frontend
app.use(core({
    origin: process.env.ClIENT_URL,
    credential: true
}));

const MONGO_URL = process.env.MONGO_URL;

//mongodb connection
mongoose.connect(MONGO_URL)
    .then(() => console.log("mongodb connected successfully"))
    .catch((err) => console.log("mongodb error", err))

// const seedProducts = async () => {
//   try {
//     await mongoose.connect(MONGO_URL);
//     console.log("MongoDB Connected");

//     // await Products.deleteMany();

//     await Products.insertMany(data.rooms);
//     console.log("Product list added");

//     process.exit();
//   } catch (error) {
//     console.log("MongoDB Error:", error);
//     process.exit(1);
//   }
// };
// seedProducts();



// routes
const authRoute = require("./routes/authRoute");
const hostelRoute = require("./routes/hosteRoute");
const roomRoute = require("./routes/roomRoute");
const reviewRoute = require("./routes/reviewRoute");
const paymentRoute = require("./routes/paymentRoute");
const bookingRoute = require("./routes/bookingRoute");

app.use("/api/users", authRoute);
app.use("/api/hostels", hostelRoute);
app.use("/api/rooms", roomRoute);
app.use("/api/reviews", reviewRoute);
app.use("/api/payment", paymentRoute);
app.use("/api/booking", bookingRoute);


// app listening
app.listen(process.env.PORT, () => {
    console.log(`server is listening at http://localhost:${process.env.PORT}`)
})

// server response
app.get("/", (req, res) => {
    res.send("hello im from server");
})
