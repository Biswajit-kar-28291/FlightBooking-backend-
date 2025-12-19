const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");
const auth = require("../middleware/authMiddleware");

/**
 * CREATE BOOKING (LOGGED-IN USER)
 */
router.post("/", auth, async (req, res) => {
  try {
    const { from, to, date } = req.body;
    if (!from || !to || !date) return res.status(400).json({ message: "All fields required" });

    // Auto seat number
    const lastBooking = await Booking.findOne({
      where: { userId: req.user.id },
      order: [["createdAt", "DESC"]]
    });
    const seatNumber = lastBooking ? lastBooking.seatNumber + 1 : 1;

    const booking = await Booking.create({
      fromCity: from,
      toCity: to,
      travelDate: date,
      seatNumber,
      userId: req.user.id
    });

    // ✅ Important: send proper response
    res.status(201).json({ booking });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Booking failed" });
  }
});


/**
 * GET BOOKINGS OF LOGGED-IN USER
 */
router.get("/", auth, async (req, res) => {
  try {
    const bookings = await Booking.findAll({
      where: { userId: req.user.id }
    });

    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch bookings" });
  }
});


// DELETE booking by id
router.delete("/:id", auth, async (req, res) => {
  try {
    const booking = await Booking.findOne({
      where: { id: req.params.id, userId: req.user.id }
    });

    if (!booking) return res.status(404).json({ message: "Ticket not found" });

    await booking.destroy();
    res.json({ message: "Ticket deleted" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete ticket" });
  }
});


module.exports = router;

