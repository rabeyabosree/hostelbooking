const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    hostelId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hostel",
        required: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    maxGuest: {
        type: Number,
        required: true
    },

    // totalRooms: {
    //     type: Number,
    //     required: true,
    //     default: 1
    // },

    images: {
        type: [String],
        default: []
    },

    description: {
        type: String,
        required: true
    },

    facilities: {
        type: [
            {
                name: String,
                icon: String
            }
        ],
        default: []
    },

    status: {
        type: String,
        enum: ["available", "booked"],
        default: "available"
    }

}, { timestamps: true });

const Rooms = mongoose.model("Room", roomSchema);

module.exports = Rooms;