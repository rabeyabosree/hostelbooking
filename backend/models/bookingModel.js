const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    hostelId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hostel",
        required: true
    },
    roomId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Room",
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    transactionId: {
        type: String,
        default: null
    },
    checkIn: {
        type: Date,
        required: true
    },
    checkOut: {
        type: Date,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    maxGuest: {
        type: Number,
        required: true
    },
    totalDays: {
        type: Number,
        required: true
    },
    paymentStatus: {
        type: String,
        enum: ["pending", "paid", "failed", "cancelled"],
        default: "pending"
    },
    status: {
        type: String,
        enum: ["pending", "confirmed", "completed", "cancelled"],
        default: "pending"
    }

}, { timestamps: true });

const Bookings = mongoose.model("Booking", bookingSchema);

module.exports = Bookings;