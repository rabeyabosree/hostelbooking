# Hostel Booking Project

A hostel booking platform built with the MERN stack. Users can browse hostels, make bookings, and chat in real time.

## Features

* User authentication with JWT
* Role-based access (User/Admin)
* Hostel management
* Image and file upload with Cloudinary and Multer
* Booking with status tracking


## Tech Stack

* React.js
* Node.js
* Express.js
* MongoDB & Mongoose
* JWT
* Cloudinary
* Multer
* Axios

## Project Structure

```text
hostel-booking/
├── frontend/
└── backend/
    ├── controllers/
    ├── models/
    ├── routes/
    ├── middleware/
    ├── utils/
    └── index.js
```

## Setup

Clone the repository:

```bash
git clone https://github.com/your-username/hostel-booking
cd hostel-booking
```

Install dependencies for both frontend and backend:

```bash
cd frontend
npm install

cd ../backend
npm install
```

Create a `.env` file inside the backend folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret

CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_SECRET=your_cloudinary_secret
```

## Run the Project

Start the backend:

```bash
cd backend
npm start
```

Start the frontend in another terminal:

```bash
cd frontend
npm start
```

Make sure both frontend and backend are running before using the application.

> Keep your `.env` file private and never commit it to GitHub.
