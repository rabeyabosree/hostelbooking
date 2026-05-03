
// const express = require('express');
// const Hostel = require('../models/hostelMode');
// const router = express.Router();
// const upload = require("../utility/multer")





// // add hostel
// router.post("/", upload.array(5), async (req, res) => {
//     try {
//         const { name, location, address, description, contact } = req.body;

//         if (!name || !location || !address) {
//             return res.status(400).json({ message: "name location and address is required" });
//         }

//         const existHostel = await Hostel.findOne({
//             name: name.trim(),
//             address: address.trim()
//         })

//         if (existHostel) {
//             return res.status(400).json({
//                 message: "Hostel already exist"
//             })
//         }

//         const images = req.files.map((file) => file.path)

//         const hostel = await Hostel.create({
//             name: name,
//             location: location,
//             address: address,
//             description,
//             images,
//             contact,
//             rating
//         })

//         res.status(201).json({
//             message: "hostel created successfully",
//             success: true,
//             data: hostel

//         })

//     } catch (error) {

//     }
// })

// // get all hostels
// router.get("/all", async (req, res) => {
//     try {

//         const hostel = await Hostel.find();
//         if (!hostel) {
//             return res.status(404).json({
//                 success: false,
//                 message: "hostel not found"

//             })
//         }

//         const rooms = await Room.find({ hostelId: hostel._id }).sort({ createdAt: -1 });

//         return res.status(200).json({
//             success: true,
//             data: {
//                 hostel,
//                 rooms
//             }
//         })

//     } catch (error) {

//     }
// })

// // get single hostel
// router.get("/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         if (!isValidId(id)) {
//             return res.status(400).json({
//                 success: false,
//                 message: "invalid hostel Id"
//             })
//         }

//         const hostel = await Hostel.findById(id);
//         if (!hostel) {
//             return res.status(404).json({
//                 success: false,
//                 message: "hostel not found"

//             })
//         }

//         const rooms = await Room.find({ hostelId: id }).sort({ createdAt: -1 });
//         return res.status(200).json({
//             success: true,
//             data: {
//                 hostel,
//                 rooms
//             }
//         })

//     } catch (error) {

//     }
// })

// // edit hostel
// router.put("/edit/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         if (!isValidId(id)) {
//             return res.status(400).json({
//                 success: false,
//                 message: "invalid hostel Id"
//             })
//         }

//         const hostel = await Hostel.findById(id);
//         if (!hostel) {
//             return res.status(404).json({
//                 success: false,
//                 message: "hostel not found"

//             })
//         }

//         const updated = await Hostel.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });

//         res.status(200).json({
//             success: true,
//             message: "hostel updated successfully",
//             data: updated
//         })



//     } catch (error) {

//     }
// })

// // delete hostel
// router.get("/delete/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         if (!isValidId(id)) {
//             return res.status(400).json({
//                 success: false,
//                 message: "invalid hostel Id"
//             })
//         }

//         const hostel = await Hostel.findById(id);
//         if (!hostel) {
//             return res.status(404).json({
//                 success: false,
//                 message: "hostel not found"

//             })
//         }

//         await Hostel.findByIdAndDelete(id);
//         await Room.deleteManay({ hostelId: id });

//         res.status(200).json({
//             message: "hostel delete successfully"
//         })

//     } catch (error) {

//     }
// });


// module.exports = router;


const express = require('express');
const Hostel = require('../models/hostelMode');
const router = express.Router();
const upload = require("../utility/multer");
const Rooms = require("../models/roomModel");

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
