// const express = require('express');
// const router = express.Router();
// const authMiddleware = require("../middlware/authMiddleware");
// const Review = require('../models/reviewModel');
// const Hostel = require('../models/hostelMode');
// const { it } = require('node:test');


// // add review
// router.post("/add", authMiddleware, async (req, res) => {
//     try {
//         const { rating, userName, comment, hostelId } = req.body;
//         const { userId } = req.user;

//         if (!userId) {
//             return res.status(400).json({
//                 success: false,
//                 message: "not authorized. please login "
//             })
//         }
//         const addReview = await Review.create({
//             userId,
//             hostelId,
//             userName,
//             rating,
//             comment
//         });

//         const reviewes = await Review.find(hostelId);
//         const totalReviews = reviewes.length;
//         const avgReview = reviewes.reduce((sum, item) => sum + item.rating, 0) / totalReviews;
//         await Hostel.findByIdAndUpdate(hostelId, {
//             rating: avgReview,
//             totalReviews: totalReviews
//         })

//         res.status(201).json({
//             success: true,
//             message: "Review added",
//             data: addReview
//         })

//     } catch (error) {

//     }
// })

// // get single review
// router.get("/:id", authMiddleware, async (req, res) => {
//     try {
//         const review = await Review.findById(req.params.id, req.user.userId).sort({ createdAt: -1 });
//         return res.status(200).json({
//             message: "reivew fetched successfully",
//             data: review
//         })

//     } catch (error) {

//     }
// })

// // edit review
// router.put("/edit/:id", authMiddleware, async (req, res) => {
//     try {
//         const { rating, comment } = req.body;
//         const review = await Review.findById(req.params.id);
//         if (!review) {
//             return res.status(404).json({
//                 message: "review not found"
//             })
//         }

//         if (review.userId.toString() !== req.user.userId) {
//             return res.status(403).json({
//                 message: "not allowed"
//             })
//         }

//         review.rating = rating || review.rating;
//         review.comment = comment || review.comment;
//         await review.save();

//         const reviews = await Review.find({ hostelId: review.hostelId });
//         const totalReviews = reviews.length;
//         const avgRating = reviews.reduce((sum, item) => sum + item.rating) / totalReviews;

//         await Hostel.findByIdAndUpdate(review.hostelId, {
//             rating: avgRating,
//             totalReviews
//         });

//         res.status(200).json({
//             message: "reviews updated successfully",
//             review: review
//         })

//     } catch (error) {

//     }
// })

// // delete review
// router.delete("/delete/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         const review = await Review.findById(id);

//         if (!review) {
//             return res.status(404).json({
//                 message: "review not found"
//             })
//         }

//         if (review.userId.toString() !== req.user.userId) {
//             return res.status(403).json({
//                 message: "not allowed"
//             })
//         }

//         await review.deleteOne();

//         const reviews = await Review.find(review.hostelId);
//         const totalReviews = review.length;
//         const avgRating = totalReviews === 0 ? 0 : reviews.reduce((sum, item) => sum + item.rating) / totalReviews;


//         await Hostel.findByIdAndUpdate(review.hostelId, {
//             rating: avgRating,
//             totalReviews: totalReviews
//         })

//         res.status(200).json({
//             message: "review deleted successfully"
//         })

//     } catch (error) {

//     }
// })

// // get all review
// router.get("/all", async (req, res) => {
//     try {
//         const reviews = await Review.find(req.params.id).sort({ createdAt: -1 });
//         return res.status(200).json({
//             message: "reivew fetched successfully",
//             data: reviews
//         })

//     } catch (error) {

//     }
// })


// module.exports = router;


const express = require('express');
const router = express.Router();
const authMiddleware = require("../middlware/authMiddleware");
const Review = require('../models/reviewModel');
const Hostel = require('../models/hostelMode');


// add review
router.post("/add", authMiddleware, async (req, res) => {
    try {
        const { rating, userName, comment, hostelId } = req.body;
        const { userId } = req.user;

        if (!userId) {
            return res.status(400).json({
                success: false,
                message: "not authorized. please login "
            });
        }

        const addReview = await Review.create({
            userId,
            hostelId,
            userName,
            rating,
            comment
        });

        const reviewes = await Review.find({ hostelId });

        const totalReviews = reviewes.length;

        const avgReview =
            reviewes.reduce((sum, item) => sum + item.rating, 0) / totalReviews;

        await Hostel.findByIdAndUpdate(hostelId, {
            rating: avgReview,
            totalReviews: totalReviews
        });

        res.status(201).json({
            success: true,
            message: "Review added",
            data: addReview
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// get all review
router.get("/all/:hostelId", async (req, res) => {
    try {
        const reviews = await Review.find({ hostelId: req.params.hostelId }).sort({ createdAt: -1 });

        return res.status(200).json({
            message: "reivew fetched successfully",
            data: reviews
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// // get single review
// router.get("/:id", authMiddleware, async (req, res) => {
//     try {
//         console.log(req.params.id)
//         const review = await Review.findById(req.params.id);
//         if(!review){
//             return res.status(404).json({
//                 message: "review not found"
//             })
//         }

//         return res.status(200).json({
//             message: "reivew fetched successfully",
//             data: review
//         });

//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: error.message
//         });
//     }
// });

// edit review
router.put("/edit/:id", authMiddleware, async (req, res) => {
    try {
        const { rating, comment } = req.body;

        const review = await Review.findById(req.params.id);

        if (!review) {
            return res.status(404).json({
                message: "review not found"
            });
        }

        if (review.userId.toString() !== req.user.userId) {
            return res.status(403).json({
                message: "not allowed"
            });
        }

        review.rating = rating || review.rating;
        review.comment = comment || review.comment;

        await review.save();

        const reviews = await Review.find({ hostelId: review.hostelId });

        const totalReviews = reviews.length;

        const avgRating =
            reviews.reduce((sum, item) => sum + item.rating, 0) / totalReviews;

        await Hostel.findByIdAndUpdate(review.hostelId, {
            rating: avgRating,
            totalReviews
        });

        res.status(200).json({
            message: "reviews updated successfully",
            data: review
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// delete review
router.delete("/delete/:id", authMiddleware, async (req, res) => {
    try {
        const { id } = req.params;

        const review = await Review.findById(id);

        if (!review) {
            return res.status(404).json({
                message: "review not found"
            });
        }

        if (review.userId.toString() !== req.user.userId) {
            return res.status(403).json({
                message: "not allowed"
            });
        }

        await review.deleteOne();

        const reviews = await Review.find({ hostelId: review.hostelId });

        const totalReviews = reviews.length;

        const avgRating =
            totalReviews === 0
                ? 0
                : reviews.reduce((sum, item) => sum + item.rating, 0) / totalReviews;

        await Hostel.findByIdAndUpdate(review.hostelId, {
            rating: avgRating,
            totalReviews: totalReviews
        });

        res.status(200).json({
            message: "review deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});



module.exports = router;