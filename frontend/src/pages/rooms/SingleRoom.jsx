import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { singleRoom } from './../../redux/reducers/roomReducer'
import { addBooking } from '../../redux/reducers/bookingReducer'

import {
  Users,
  DollarSign,
  Tag,
  CheckCircle,
  XCircle,
  Bed,
  Home,
  Wifi,
  Star,
  MessageCircle
} from "lucide-react"

function SingleRoom() {

  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { roomDetails } = useSelector((state) => state.room)

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    dispatch(singleRoom(id))
  }, [dispatch, id])

  const room = roomDetails
  const images = room?.images || []

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    )
  }

  const handleBooking = () => {
    dispatch(addBooking(room))
    navigate("/bookings")
  }

  if (!room) {
    return <p className="p-5 text-center">Loading...</p>
  }

  const rating = room?.rating || 4.5

  return (
    <div className="max-w-6xl mx-auto p-6 mt-16 space-y-8">

      {/*  IMAGE SLIDER */}
      <div className="relative w-full h-75 md:h-112.5 overflow-hidden rounded-2xl">

        <img
          src={images[currentIndex]}
          alt="room"
          className="w-full h-full object-cover transition duration-500"
        />

        {/* Prev */}
        <button
          onClick={prevImage}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
        >
          ‹
        </button>

        {/* Next */}
        <button
          onClick={nextImage}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
        >
          ›
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full cursor-pointer ${
                index === currentIndex ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>

      </div>

      {/*  TITLE + RATING */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">

        <h1 className="text-3xl font-bold flex items-center gap-2 text-gray-800">
          <Home size={22} />
          {room?.title}
        </h1>

        <div className="flex items-center gap-2 text-yellow-700 px-3 py-1 rounded-full">
          <Star size={18} className="fill-yellow-500 text-yellow-500" />
          <span className="font-semibold">{rating}</span>
          <span className="text-sm text-gray-600">(reviews)</span>
        </div>

      </div>

      {/*  INFO */}
      <div className="flex flex-wrap gap-4 text-gray-700">

        <span className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
          <Tag size={18} />
          {room?.type}
        </span>

        <span className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
          <DollarSign size={18} />
          {room?.price} / night
        </span>

        <span className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
          <Users size={18} />
          Max {room?.maxGuest} Guests
        </span>

      </div>

      {/*  DESCRIPTION */}
      <p className="text-gray-600 leading-relaxed">
        {room?.description}
      </p>

      {/*  FACILITIES */}
      <div>
        <h2 className="font-semibold mb-3 flex items-center gap-2 text-gray-800">
          <Wifi size={18} />
          Facilities
        </h2>

        <div className="flex flex-wrap gap-2">
          {room?.facilities?.map((f) => (
            <span
              key={f._id}
              className="flex items-center gap-1 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm"
            >
              <CheckCircle size={14} />
              {f.name}
            </span>
          ))}
        </div>
      </div>

      {/*  STATUS */}
      <div className="flex items-center gap-2">
        {room?.status === "available" ? (
          <>
            <CheckCircle className="text-green-600" size={18} />
            <span className="text-green-600 font-semibold">Available</span>
          </>
        ) : (
          <>
            <XCircle className="text-red-500" size={18} />
            <span className="text-red-500 font-semibold">Booked</span>
          </>
        )}
      </div>

      {/*  REVIEWS */}
      <div className="bg-white border rounded-xl p-5 shadow-sm">

        <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
          <MessageCircle size={18} />
          Reviews
        </h2>

        <div className="space-y-3">

          <div className="border p-3 rounded-lg">
            <div className="flex items-center gap-2">
              <Star size={16} className="text-yellow-500 fill-yellow-500" />
              <span className="font-semibold">4.8</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              “Very clean and comfortable stay!”
            </p>
          </div>

          <div className="border p-3 rounded-lg">
            <div className="flex items-center gap-2">
              <Star size={16} className="text-yellow-500 fill-yellow-500" />
              <span className="font-semibold">4.6</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              “Best hostel experience ever.”
            </p>
          </div>

        </div>

      </div>

      {/*  BOOK BUTTON */}
      <button
        onClick={handleBooking}
        disabled={room?.status !== "available"}
        className={`w-full py-3 rounded-xl flex items-center justify-center gap-2 font-semibold transition transform hover:scale-[1.02] ${
          room?.status === "available"
            ? "bg-green-600 hover:bg-green-700 text-white"
            : "bg-gray-400 cursor-not-allowed text-white"
        }`}
      >
        <Bed size={18} />
        Book Now
      </button>

    </div>
  )
}

export default SingleRoom