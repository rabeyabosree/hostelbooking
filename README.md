# 🏠 Hostel Booking Backend (MERN Stack)

This is a full-stack backend system for a Hostel Booking platform built using Node.js, Express, MongoDB, and Cloudinary. It supports authentication, real-time features, and image/file uploads.


## 🚀 Features

- 🔐 User Authentication (JWT based)
- 👤 Role-based access (User/Admin)
- 🏠 Hostel listing management (CRUD)
- 📸 Image upload using Cloudinary
- 💬 Real-time chat system (Socket.IO)
- 📦 File & image upload using Multer
- 🧾 Booking system with status tracking
- 🌐 RESTful API architecture
- 🔔 Notification system (if applicable)


## 🛠️ Tech Stack
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Cloudinary
- Multer
- Socket.IO
- Axios

## 📂 Project Structure
- backend/
├── controllers/
├── models/
├── routes/
├── middleware/
├── utils/
├── index.js


## ⚙️ Installation & Setup
```bash
git clone https://github.com/your-username/hostel-booking-backend
cd backend
npm install

Create .env file:
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret
CLOUD_NAME=your_cloudinary_name
API_KEY=your_key
API_SECRET=your_secret
npm start
