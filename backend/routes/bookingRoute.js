const express = require("express");
const Bookings = require("../models/bookingModel");
const router = express.Router();
const authMiddleware = require("../middlware/authMiddleware");
const Hostel = require("../models/hostelMode");
const Rooms = require("../models/roomModel");
const isAdmin = require("../middlware/isAdmin");

// book now
router.post("/book", authMiddleware, async (req, res) => {
    try {
        const { hostelId, roomId, checkIn, checkOut, maxGuest, name, email, phone } = req.body;

        if (!hostelId || !roomId || !checkIn || !checkOut) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        if (new Date(checkOut) <= new Date(checkIn)) {
            return res.status(400).json({ message: "Invalid dates" });
        }

        const userId = req.user.userId;

        const room = await Rooms.findById(roomId);
        if (!room) {
            return res.status(404).json({ message: "Room not found" });
        }

        const overlapping = await Bookings.findOne({
            roomId,
            status: { $ne: "cancelled" },
            checkIn: { $lt: new Date(checkOut) },
            checkOut: { $gt: new Date(checkIn) }
        });

        if (overlapping) {
            return res.status(400).json({
                message: "Room not available"
            });
        }

        const days = Math.max(1, Math.ceil(
            (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24)
        ));

        const totalPrice = days * room.price;

        const booking = await Bookings.create({
            userId,
            hostelId,
            roomId,
            name,
            email,
            phone,
            checkIn,
            checkOut,
            maxGuest,
            totalPrice,
            totalDays: days,
            status: "pending",
            paymentStatus: "pending"
        });

        await Hostel.findByIdAndUpdate(hostelId, {
            $inc: {
                bookedRooms: 1,
                availableRooms: -1
            }
        });

        res.status(201).json({
            success: true,
            message: "Booking successful",
            data: booking
        });

    } catch (error) {
        console.log("BOOK ERROR:", error);
        res.status(500).json({
            message: error.message
        });
    }
});

// get my all booking
router.get("/my-Bookings", authMiddleware, async (req, res) => {
    try {
        const { userId } = req.user;

        const bookings = await Bookings.find({ userId })
            .populate("roomId")
            .populate("hostelId")
            .sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            message: "bookings all data fetched",
            data: bookings
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// get all admin booking
router.get("/all", authMiddleware, isAdmin, async (req, res) => {
    try {
        const bookings = await Bookings.find()
            .populate("roomId")
            .populate("hostelId")
            .sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            message: "bookings all data fetched",
            data: bookings
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// get single booking
router.get("/:id", authMiddleware, async (req, res) => {
    try {
        const booking = await Bookings.findById(req.params.id);

        if (!booking) {
            return res.status(404).json({
                message: "Booking not found"
            });
        }

        return res.status(200).json({
            message: "Booking details fetched successfully",
            data: booking
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// update booking payment status
router.put("/:bookingId", authMiddleware, async (req, res) => {
    try {
        const { bookingId } = req.params;
        const { paymentStatus } = req.body;

        const bookings = await Bookings.findByIdAndUpdate(
            bookingId,
            { paymentStatus },
            { new: true }
        );

        return res.status(200).json({
            success: true,
            message: "booking payment status updated",
            data: bookings
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// cancelled booking
router.post("/cancel/:id", authMiddleware, async (req, res) => {
    try {
        const bookings = await Bookings.findByIdAndUpdate(
            req.params.id,
            { status: "cancelled" },
            { new: true }
        );

        await Hostel.findByIdAndUpdate(bookings.hostelId, {
            $inc: {
                bookedRooms: -1,
                availableRoom: 1
            }
        });

        return res.status(200).json({
            success: true,
            message: "bookings cancelled successfully",
            data: bookings
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

module.exports = router;