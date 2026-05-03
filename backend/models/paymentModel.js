const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    bookingId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Booking",
        required: true
    },
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
    userName: {
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
    amount: {
        type: Number,
        required: true
    },
    gateway: {
        type: String,
        default: "sslcommerz"
    },
    transactionId: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["pending", "paid", "failed", "cancelled"],
        default: "pending"
    },
    paidAt: {
        type: Date,
        default: null
    }

}, { timestamps: true });

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;