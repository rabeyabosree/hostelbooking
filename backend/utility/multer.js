const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("./cloudinary")


const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "HostelBooking", // Cloudinary folder name
        allowed_formats: ["jpg", "jpeg", "png"], // Allowed image types
        transformation: [{ width: 500, height: 500, crop: "limit" }], // Resize
    },
});

const upload = multer({ storage });

module.exports = upload;