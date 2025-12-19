require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");

sequelize.sync()
  .then(() => console.log("Database synced"))
  .catch(err => console.error(err));



const app = express();

// ✅ MIDDLEWARE (VERY IMPORTANT ORDER)
app.use(cors({
  origin: "http://localhost:5173"   // frontend URL
}));
app.use(express.json());

// ✅ TEST ROUTE (fixes 404 + helps testing)
app.get("/", (req, res) => {
  res.send("Backend is working");
});

// ✅ AUTH ROUTES
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);
// ✅ BOOKING ROUTES
const bookingRoutes = require("./routes/bookingRoutes");
app.use("/api/bookings", bookingRoutes);


// ✅ SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
