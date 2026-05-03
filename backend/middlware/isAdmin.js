const jwt = require("jsonwebtoken");

const isAdmin = (req, res, next) => {
    try {
        const token = req.headers.Authorization.split(" ")[1];
        if (!token) {
            return res.status(404).json({
                message: "token not found"
            })
        }

        const decoded = jwt.verify(token, process.env.JWT_SEDCRET);
        req.user = decoded;
        if (req.user.role !== "admin") {
            return res.status(503).json({
                message: " access denied. "
            })
        }

        next();

    } catch (error) {

    }
}

module.exports = isAdmin;