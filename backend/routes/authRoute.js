// const express = require("express");
// const User = require("../models/authModel");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const router = express.Router();


// // JWT secret
// const JWT_SECRET = process.env.SECRET_KEY || "your_jwt_secret";


// // generate token
// const generateToken = (user) => {
//     return jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, { expiresIn: "1d" });
// };

// // register
// router.post("/register", async (req, res) => {
//     try {
//         const { name, email, password } = req.body;

//         // Check if user exists
//         const existingUser = await User.findOne({ email });
//         if (existingUser)
//             return res.status(400).json({ message: "Email already registered" });

//         // Create user
//         const user = await User.create({ name, email, password });

//         const token = generateToken(user);
//         res.status(201).json({
//             message: "User registered successfully",
//             token,
//             data: {
//                 id: user._id,
//                 name: user.name,
//                 email: user.email,
//                 profile: user.profile,
//                 role: user.role,
//             },
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Server error" });
//     }
// });

// // login
// router.post("/login", async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         // Find user
//         const user = await User.findOne({ email });
//         if (!user) return res.status(400).json({ message: "Invalid credentials" });

//         // Check password
//         const isMatch = await user.matchPassword(password);
//         if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

//         const token = generateToken(user);
//         res.status(200).json({
//             message: "Login successful",
//             token,
//             data: {
//                 id: user._id,
//                 name: user.name,
//                 email: user.email,
//                 profile: user.profile,
//                 role: user.role,
//             },
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Server error" });
//     }
// });

// // admin login 
// router.post("/admin/login", async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         // Find user
//         const user = await User.findOne({ email });
//         if (!user) return res.status(400).json({ message: "Invalid credentials" });

//         // Check password
//         const isMatch = await user.matchPassword(password);
//         if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

//         const token = generateToken(user);
//         res.status(200).json({
//             message: "Login successful",
//             token,
//             data: {
//                 id: user._id,
//                 name: user.name,
//                 email: user.email,
//                 profile: user.profile,
//                 role: user.role,
//             },
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Server error" });
//     }
// });


// module.exports = router;


const express = require("express");
const User = require("../models/authModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();


// JWT secret
const JWT_SECRET = process.env.JWT_SECRET;


// generate token
const generateToken = (user) => {
    return jwt.sign(
        { userId: user._id, role: user.role },
        JWT_SECRET,
        { expiresIn: "1d" }
    );
};


// register
router.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "Email already registered"
            });
        }

        // hash password (if not using schema pre-save middleware)
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });

        const token = generateToken(user);

        res.status(201).json({
            message: "User registered successfully",
            token,
            data: {
                id: user._id,
                name: user.name,
                email: user.email,
                profile: user.profile,
                role: user.role
            }
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});


// login
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "Invalid credentials"
            });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid credentials"
            });
        }

        const token = generateToken(user);

        res.status(200).json({
            message: "Login successful",
            token,
            data: {
                id: user._id,
                name: user.name,
                email: user.email,
                profile: user.profile,
                role: user.role
            }
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});


// admin login
router.post("/admin/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "Invalid credentials"
            });
        }

        // check admin role
        if (user.role !== "admin") {
            return res.status(403).json({
                message: "Access denied. Admin only."
            });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid credentials"
            });
        }

        const token = generateToken(user);

        res.status(200).json({
            message: "Login successful",
            token,
            data: {
                id: user._id,
                name: user.name,
                email: user.email,
                profile: user.profile,
                role: user.role
            }
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});


module.exports = router;