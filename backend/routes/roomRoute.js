// const express = require('express');
// const router = express.Router();
// const multer = require("../utility/multer");
// const Hostel = require('../models/hostelMode');
// const Rooms = require('../models/roomModel');

// // add room at hostel
// router.post("/:hostelId", multer.array(5), async (req, res) => {
//     try {
//         const { hostelId } = req.params();
//         const { title, type, price, maxGuest, description, facilities } = req.body;

//         if (!isValidId(hostelId)) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Invalid hostel id"
//             })
//         }

//         const hostel = await Hostel.findById(id);
//         if (!hostel) {
//             return res.status(404).json({
//                 success: false,
//                 message: "hostel not found"
//             })
//         }

//         const images = req.files.map((img) => img.path);

//         const room = await Room.create({
//             hostelId,
//             title,
//             type,
//             price,
//             maxGuest,
//             description,
//             facilities,
//             images
//         });

//         res.status(201).json({
//             success: false,
//             message: "room created successfully",
//             room: room
//         })
//     } catch (error) {

//     }
// })

// // get all room
// router.get("/:hostelId", async (req, res) => {
//     try {
//         const { hostelId } = req.params();

//         if (!isValidId(hostelId)) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Invalid hostel id"
//             })
//         }

//         const hostel = await Hostel.findById(hostelId);
//         if (!hostel) {
//             return res.status(404).json({
//                 success: false,
//                 message: "hostel not found"
//             })
//         }

//         const rooms = await Rooms.find({ hostelId }).sort({ createdAt: -1 });

//         res.status(200).json({
//             success: true,
//             message: "rooms fetched successfully",
//             data: rooms
//         })
//     } catch (error) {

//     }
// })

// // get single room
// router.get("/:roomId", async (req, res) => {
//     try {
//         const { roomId } = req.params();

//         if (!isValidId(roomId)) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Invalid hostel Id"
//             })
//         }

//         const hostel = await Hostel.findById(hostelId);
//         if (!hostel) {
//             return res.status(404).json({
//                 success: false,
//                 message: "hostel not found"

//             })
//         }

//         const rooms = await Room.find({ hostelId }).sort({ createdAt: -1 });

//         res.status(200).json({
//             success: true,
//             message: "rooms fetched successfully",
//             data: rooms
//         })
//     } catch (error) {

//     }
// })

// // edit room
// router.put("/:roomId", async (req, res) => {
//     try {
//         const { roomId } = req.params();

//         if (!isValidId(roomId)) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Invalid hostel id"
//             })
//         }


//         const rooms = await Rooms.findByIdAndUpdate(roomId, req.body, { new: true });

//         return res.status(200).json({
//             message: "room updated successfully",
//             data: rooms
//         })

//     } catch (error) {

//     }
// })

// // delete room
// router.delete("/:roomId", async (req, res) => {
//     try {
//         const { roomId } = req.params;
//         const room = await Rooms.findById(roomId);
//         if (!room) {
//             return res.status(404).json({
//                 message: "room not found"
//             })
//         }

//         await Rooms.findByIdAndDelete(roomId);

//         res.status(200).json({
//             message: "room deleted successfully"
//         })

//     } catch (error) {

//     }
// })

// module.exports = router;


const express = require('express');
const router = express.Router();
const multer = require("../utility/multer");
const Hostel = require('../models/hostelMode');
const Rooms = require('../models/roomModel');

// add room at hostel
router.post("/:hostelId", multer.array("images", 5), async (req, res) => {
    try {
        const { hostelId } = req.params;
        const { title, type, price, maxGuest, description, facilities } = req.body;

        if (!hostelId) {
            return res.status(400).json({
                success: false,
                message: "Invalid hostel id"
            });
        }

        const hostel = await Hostel.findById(hostelId);

        if (!hostel) {
            return res.status(404).json({
                success: false,
                message: "hostel not found"
            });
        }

        const images = req.files ? req.files.map((img) => img.path) : [];

        const room = await Rooms.create({
            hostelId,
            title,
            type,
            price,
            maxGuest,
            description,
            facilities,
            images
        });

        res.status(201).json({
            success: true,
            message: "room created successfully",
            room: room
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// get all room
router.get("/hostel/:hostelId", async (req, res) => {
    try {
        const { hostelId } = req.params;

        if (!hostelId) {
            return res.status(400).json({
                success: false,
                message: "Invalid hostel id"
            });
        }

        const hostel = await Hostel.findById(hostelId);

        if (!hostel) {
            return res.status(404).json({
                success: false,
                message: "hostel not found"
            });
        }

        const rooms = await Rooms.find({ hostelId }).sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            message: "rooms fetched successfully",
            data: rooms
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// get single room
router.get("/single/:roomId", async (req, res) => {
    try {
        const { roomId } = req.params;

        if (!roomId) {
            return res.status(400).json({
                success: false,
                message: "Invalid room id"
            });
        }

        const room = await Rooms.findById(roomId);

        if (!room) {
            return res.status(404).json({
                success: false,
                message: "room not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "room fetched successfully",
            data: room
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// edit room
router.put("/:roomId", async (req, res) => {
    try {
        const { roomId } = req.params;

        if (!roomId) {
            return res.status(400).json({
                success: false,
                message: "Invalid room id"
            });
        }

        const room = await Rooms.findByIdAndUpdate(
            roomId,
            req.body,
            { new: true }
        );

        if (!room) {
            return res.status(404).json({
                success: false,
                message: "room not found"
            });
        }

        return res.status(200).json({
            message: "room updated successfully",
            data: room
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// delete room
router.delete("/:roomId", async (req, res) => {
    try {
        const { roomId } = req.params;

        const room = await Rooms.findById(roomId);

        if (!room) {
            return res.status(404).json({
                message: "room not found"
            });
        }

        await Rooms.findByIdAndDelete(roomId);

        res.status(200).json({
            message: "room deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

module.exports = router;