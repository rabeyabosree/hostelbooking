// const express = require('express');

// const Bookings = require('../models/bookingModel');
// const router = express.Router();


// // pay
// router.post("/pay/:bookingId", async (req, res) => {
//     try {
//         const { bookingId } = req.params;
//         const booking = await Bookings.findById(bookingId);

//         if (!booking) {
//             return res.status(404).json({
//                 success: false,
//                 message: "Booking not found"
//             })
//         }

//         if (booking.paymentStatus === "paid") {
//             return res.status(400).json({
//                 success: false,
//                 message: "Already paid"
//             })
//         }

//         const transactionId = "TXN_" + Date.now() + "-" + booking._id;
//         const paymendData = {
//             store_id: process.env.store_id,
//             store_passwd: process.env.store_passwd,
//             totalAmout: booking.totalPrice,
//             currentcy: "BDT",
//             tran_id: transactionId,
//             success_url: "",
//             fail_url: "",
//             cancel_url: "",
//             ipn_url: "",
//             shippindMethod: "",
//             product_name: "",
//             product_category: "",
//             product_profile: "",

//             cus_name: booking.name,
//             cus_email: booking.email,
//             cus_add1: "",
//             cus_city: "",
//             cus_country: "",
//             cus_phone: booking.phone,
//         }

//         const response = await axios.post("", paymendData,
//             {
//                 headers: {
//                     "Content_Type": ""
//                 }
//             }
//         )

//         booking.transactionId = transactionId;
//         await booking.save();

//         return res.status(200).json({
//             success: true,
//             message: "payment successefully",
//             paymentURl: response.data.GatewayPageURL
//         })

//     } catch (error) {

//     }
// })

// // success
// router.post("/success/:bookingId", async (req, res) => {
//     try {
//         const { bookingId } = req.params;
//         const booking = await Bookings.findByIdAndUpdate(bookingId, { paymentStatus: "paid", status: "confirem" }, { new: true });

//         return res.redirect(`${process.env.ClIENT_URL}/payment-success/${booking._id}`);

//     } catch (error) {

//     }
// })

// // failed
// router.post("/failed/:bookingId", async (req, res) => {
//     try {
//         const { bookingId } = req.params;
//         const booking = await Bookings.findByIdAndUpdate(bookingId, {
//             paymentStatus: "failed"
//         });

//         return res.redirect(`${process.env.ClIENT_URL}/payment-failed/${booking._id}`)

//     } catch (error) {

//     }
// })

// // cancel
// router.post("/cancel/:bookingId", async (req, res) => {
//     try {
//         const { bookingId } = req.params;
//         const booking = await Bookings.findByIdAndUpdate(bookingId, {
//             paymentStatus: "cancelled"
//         });

//         return res.redirect(`${process.env.ClIENT_URL}/payment-cancel/${booking._id}`)
//     } catch (error) {

//     }
// })


// module.exports = router;


const express = require('express');
const Bookings = require('../models/bookingModel');
const Payment = require("../models/paymentModel");
const router = express.Router();
const authMiddleware = require("../middlware/authMiddleware")
const axios = require("axios");


// pay
router.post("/pay/:bookingId", authMiddleware,async (req, res) => {
    try {
        const { bookingId } = req.params;

        const booking = await Bookings.findById(bookingId);

        if (!booking) {
            return res.status(404).json({
                success: false,
                message: "Booking not found"
            });
        }

        if (booking.paymentStatus === "paid") {
            return res.status(400).json({
                success: false,
                message: "Already paid"
            });
        }

        const transactionId = "TXN_" + Date.now() + "-" + booking._id;

        const paymentData = {
            store_id: process.env.STORE_ID,
            store_passwd: process.env.STORE_PASSWORD,

            total_amount: booking.totalPrice,
            currency: "BDT",

            tran_id: transactionId,

            success_url: `${process.env.SERVER_URL}/api/payment/success/${booking._id}`,
            fail_url: `${process.env.SERVER_URL}/api/payment/failed/${booking._id}`,
            cancel_url: `${process.env.SERVER_URL}/api/payment/cancel/${booking._id}`,
            ipn_url: `${process.env.SERVER_URL}/api/payment/ipn`,

            shipping_method: "NO",
            product_name: "Hostel Booking",
            product_category: "Booking",
            product_profile: "general",

            cus_name: booking.name,
            cus_email: booking.email,
            cus_add1: "Dhaka",
            cus_city: "Dhaka",
            cus_country: "Bangladesh",
            cus_phone: booking.phone
        };

        const response = await axios.post(
            "https://sandbox.sslcommerz.com/gwprocess/v4/api.php",
            paymentData,
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }
        );

        booking.transactionId = transactionId;
        await booking.save();

        await Payment.create({
            bookingId: booking._id,
            userId: req.user.userId,
            hostelId: booking.hostelId,
            roomId: booking.roomId,
            userName: booking.name,
            email: booking.email,
            phone: booking.phone,
            transactionId: transactionId,
            amount: booking.totalPrice,
            status: "pending"
        });

        return res.status(200).json({
            success: true,
            message: "payment successfully",
            paymentURL: response.data.GatewayPageURL
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// success
router.post("/success/:bookingId", async (req, res) => {
    try {
        const { bookingId } = req.params;

        const booking = await Bookings.findByIdAndUpdate(
            bookingId,
            {
                paymentStatus: "paid",
                status: "confirmed"
            },
            { returnDocument: "after" }
        );

        await Payment.findOneAndUpdate(
            { bookingId },
            { status: "paid" }
        );

        return res.redirect(
            `${process.env.ClIENT_URL}/payment/success/${booking._id}`
        );

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// failed
router.post("/failed/:bookingId", async (req, res) => {
    try {
        const { bookingId } = req.params;

        const booking = await Bookings.findByIdAndUpdate(
            bookingId,
            {
                paymentStatus: "failed"
            },
            { returnDocument: "after" }
        );

        await Payment.findOneAndUpdate(
            { bookingId },
            { status: "failed" }
        );

        return res.redirect(
            `${process.env.ClIENT_URL}/payment/failed/${booking._id}`
        );

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// cancel
router.post("/cancel/:bookingId", async (req, res) => {
    try {
        const { bookingId } = req.params;

        const booking = await Bookings.findByIdAndUpdate(
            bookingId,
            {
                paymentStatus: "cancelled"
            },
            { returnDocument: "after" }
        );

        await Payment.findOneAndUpdate(
            { bookingId },
            { status: "cancelled" }
        );

        return res.redirect(
            `${process.env.CLIENT_URL}/payment/cancel/${booking._id}`
        );

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// get get payment by id
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const booking = await Bookings.findById(id);

        if (!booking) {
            return res.status(404).json({
                success: false,
                message: "Booking not found"
            });
        }

        const payment = await Payment.findOne({
            transactionId: booking.transactionId
        });

        if (!payment) {
            return res.status(404).json({
                success: false,
                message: "Payment not found"
            });
        }

        res.json({
            success: true,
            data: payment
        });

    } catch (error) {
        console.log("GET PAYMENT ERROR:", error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

module.exports = router;