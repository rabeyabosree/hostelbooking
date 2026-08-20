const express = require('express');
const Hostel = require('../models/hostelMode');
const router = express.Router();
const upload = require("../utility/multer");
const Rooms = require("../models/roomModel");
const Bookings = require('../models/bookingModel');

// add hostel
router.post("/", upload.array("images", 5), async (req, res) => {
    try {
        const { name, location, address, description, contact } = req.body;

        if (!name || !location || !address) {
            return res.status(400).json({
                message: "name location and address is required"
            });
        }

        const existHostel = await Hostel.findOne({
            name: name.trim(),
            address: address.trim()
        });

        if (existHostel) {
            return res.status(400).json({
                message: "Hostel already exist"
            });
        }

        const images = req.files ? req.files.map((file) => file.path) : [];

        const hostel = await Hostel.create({
            name,
            location,
            address,
            description,
            images,
            contact,
            rating: 0,
            totalReviews: 0
        });

        res.status(201).json({
            message: "hostel created successfully",
            success: true,
            data: hostel
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// get all hostels
router.get("/all", async (req, res) => {
    try {

        const hostels = await Hostel.find();

        if (!hostels || hostels.length === 0) {
            return res.status(404).json({
                success: false,
                message: "hostel not found"
            });
        }

        return res.status(200).json({
            success: true,
            data: hostels
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// search hostels
router.post("/search", async (req, res) => {
    try {
        const { destination, checkIn, checkOut, guests } = req.body;

        //  Clean destination
        const cleanDestination = destination?.trim();
        console.log(req.body)
        console.log("cleanDestination", cleanDestination)

        let query = {};

        if (cleanDestination) {
            const words = cleanDestination.split(" ");
            query.destinations = {
                $regex: `^${cleanDestination}`,
                $options: "i"
            };
        }
       

        //  Get hostels + rooms
        const hostels = await Hostel.find(query).populate("rooms");
       
       console.log("hostels", hostels)

        //  Get all bookings once 
        let bookingQuery = {
            paymentStatus: "paid",
            status: "confirmed"
        };

        if (checkIn && checkOut) {
            bookingQuery.checkIn = { $lte: new Date(checkOut) };
            bookingQuery.checkOut = { $gte: new Date(checkIn) };
        }

        const allBookings = await Bookings.find(bookingQuery);
        console.log("allBookings", allBookings)

        //  Group bookings by roomId for fast lookup
        const bookingMap = {};

        allBookings.forEach((booking) => {
            const roomId = booking.roomId.toString();
            if (!bookingMap[roomId]) {
                bookingMap[roomId] = [];
            }
            bookingMap[roomId].push(booking);
        });

        let availableHostels = [];

        for (let hostel of hostels) {
            let availableRooms = [];
           
            for (let room of hostel.rooms) {
                // Guest filter
                if (guests && room.maxGuest < Number(guests)) continue;

                const roomBookings = bookingMap[room._id.toString()] || [];
                //  available rooms
                if (roomBookings.length === 0) {
                    availableRooms.push(room);
                }
                console.log('availabe rooms')
            }

            if (availableRooms.length > 0) {
                availableHostels.push({
                    ...hostel.toObject(),
                    rooms: availableRooms
                });
            }
            
        }

        console.log("availableHostels", availableHostels)

        res.status(200).json({
            success: true,
            message: "Available hostels fetched",
            data: availableHostels
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// get single hostel
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({
                success: false,
                message: "invalid hostel Id"
            });
        }

        const hostel = await Hostel.findById(id);

        if (!hostel) {
            return res.status(404).json({
                success: false,
                message: "hostel not found"
            });
        }

        const rooms = await Rooms.find({ hostelId: id }).sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            data: {
                hostel,
                rooms
            }
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// edit hostel
router.put("/edit/:id", async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({
                success: false,
                message: "invalid hostel Id"
            });
        }

        const hostel = await Hostel.findById(id);

        if (!hostel) {
            return res.status(404).json({
                success: false,
                message: "hostel not found"
            });
        }

        const updated = await Hostel.findByIdAndUpdate(
            id,
            req.body,
            { new: true, runValidators: true }
        );

        res.status(200).json({
            success: true,
            message: "hostel updated successfully",
            data: updated
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// delete hostel
router.delete("/delete/:id", async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({
                success: false,
                message: "invalid hostel Id"
            });
        }

        const hostel = await Hostel.findById(id);

        if (!hostel) {
            return res.status(404).json({
                success: false,
                message: "hostel not found"
            });
        }

        await Hostel.findByIdAndDelete(id);

        await Rooms.deleteMany({ hostelId: id });

        res.status(200).json({
            message: "hostel delete successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});


module.exports = router;
