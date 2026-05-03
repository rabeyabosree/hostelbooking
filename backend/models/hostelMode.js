const mongoose = require('mongoose');

const hostelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    destinations: {
        type: [String],
        default: []
    },

    bookedRooms: {
        type: Number,
        default: 0
    },

    availableRoom: {
        type: Number,
        default: 0
    },

    images: {
        type: [String],
        default: []
    },

    rating: {
        type: Number,
        default: 0
    },

    totalReviews: {
        type: Number,
        default: 0
    },

    contact: {
        phone: String,
        email: String
    },

    rooms: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Room"
        }
    ]

}, { timestamps: true });

const Hostel = mongoose.model("Hostel", hostelSchema);

module.exports = Hostel;





