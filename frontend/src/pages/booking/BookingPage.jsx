import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { hostelBooking } from "../../redux/reducers/bookingReducer";
import { payNow } from "../../redux/reducers/paymentReducer";

import {
  User,
  Mail,
  Phone,
  Calendar,
  Users,
  CreditCard,
} from "lucide-react";

function BookingPage() {
  const { state } = useLocation();

  const bookingCart = localStorage.getItem("booking")
    ? JSON.parse(localStorage.getItem("booking"))
    : null;

  const { booking, message } = useSelector((state) => state.booking);

  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const totalDays =
    form.checkIn && form.checkOut
      ? Math.ceil(
          (new Date(form.checkOut) - new Date(form.checkIn)) /
            (1000 * 60 * 60 * 24)
        )
      : 0;

  const totalPrice = totalDays * (bookingCart?.price || 0);

  const handleBooking = () => {
    const bookingData = {
      roomId: bookingCart._id,
      hostelId: bookingCart.hostelId,
      name: form.name,
      email: form.email,
      phone: form.phone,
      checkIn: form.checkIn,
      checkOut: form.checkOut,
      totalDays,
      totalPrice,
      maxGuest: bookingCart.maxGuest,
    };

    dispatch(hostelBooking(bookingData));
  };

  const handlePayment = () => {
    dispatch(payNow(booking._id)).then((res) => {
      if (res.payload?.success) {
        window.location.href = res.payload.paymentURL;
      }
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-5 space-y-6 mt-18">

      {/* Title */}
      <h1 className="text-2xl font-bold text-center">
        Confirm Your Booking
      </h1>

      {/* Room Card */}
      <div className="space-y-3">

        <img
          src={bookingCart?.images?.[0]}
          className="w-full h-56 object-cover rounded-lg"
        />

        <h2 className="text-xl font-semibold">
          {bookingCart?.title}
        </h2>

        <p className="flex items-center gap-2">
          <CreditCard size={18} />
          {bookingCart?.price} BDT / night
        </p>

        <p className="flex items-center gap-2">
          <Users size={18} />
          Max Guest: {bookingCart?.maxGuest}
        </p>
      </div>

      {/* Form */}
      <div className="space-y-3">

        <div className="flex items-center border p-3 rounded-lg gap-2">
          <User size={18} />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full outline-none"
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center border p-3 rounded-lg gap-2">
          <Mail size={18} />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full outline-none"
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center border p-3 rounded-lg gap-2">
          <Phone size={18} />
          <input
            type="number"
            name="phone"
            placeholder="Phone"
            className="w-full outline-none"
            onChange={handleChange}
          />
        </div>

        <div className="flex gap-3">

          <div className="flex items-center border p-3 rounded-lg gap-2 w-1/2">
            <Calendar size={18} />
            <input
              type="date"
              name="checkIn"
              className="w-full outline-none"
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center border p-3 rounded-lg gap-2 w-1/2">
            <Calendar size={18} />
            <input
              type="date"
              name="checkOut"
              className="w-full outline-none"
              onChange={handleChange}
            />
          </div>

        </div>

      </div>

      {/* Summary */}
      <div className=" rounded-xl px-4 space-y-2">
        <p>Days: {totalDays}</p>
        <p className="text-lg font-bold">
          Total: {totalPrice} BDT
        </p>
      </div>

      {message && (
        <p className="text-red-500 text-center">{message}</p>
      )}

      {/* Buttons */}
      <div className="space-y-3">

        <button
          onClick={handleBooking}
          disabled={!totalDays}
          className="w-full bg-black text-white py-3 rounded-lg flex items-center justify-center gap-2"
        >
          Book Now
        </button>

        <button
          onClick={handlePayment}
          disabled={!totalDays}
          className="w-full bg-green-600 text-white py-3 rounded-lg flex items-center justify-center gap-2"
        >
          Pay Now
        </button>

      </div>

    </div>
  );
}

export default BookingPage;