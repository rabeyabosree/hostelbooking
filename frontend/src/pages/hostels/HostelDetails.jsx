import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { singleHostel } from '../../redux/reducers/hostelreducer';
import { useNavigate, useParams } from 'react-router-dom';
import RoomCard from '../../component/common/RoomCard';

import {
  MapPin,
  Star,
  MessageCircle,
  Home,
  Mail,
  Phone
} from "lucide-react";

function HostelDetails() {

  const { hostelDetails } = useSelector((state) => state.hostel);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("available");

  useEffect(() => {
    dispatch(singleHostel(id));
  }, [dispatch, id]);

  const rooms = hostelDetails?.rooms || [];

  const availableRoom = rooms.filter((room) => room.status === "available");
  const bookedRoom = rooms.filter((room) => room.status === "booked");

  const hostel = hostelDetails?.hostel;

  return (
    <div className="bg-gray-100 min-h-screen pt-24 px-4">

      <div className="max-w-6xl mx-auto space-y-8">

        {/*  Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src={hostel?.images?.[0]}
            alt="hostel"
            className="w-full h-72 md:h-96 object-cover hover:scale-105 transition duration-500"
          />
        </div>

        {/*  Title + Rating */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">

          <div>
            <h1 className="text-3xl font-bold flex items-center gap-2 text-gray-800">
              <Home size={22} />
              {hostel?.name}
            </h1>

            <p className="text-gray-500 flex items-center gap-1 mt-1">
              <MapPin size={16} />
              {hostel?.location}, {hostel?.address}
            </p>
          </div>

          {/* Rating clickable */}
          <div
            onClick={() => navigate("/reviews", { state: { hostelId: id } })}
            className="cursor-pointer flex items-center gap-2  text-yellow-700 px-4 rounded-full"
          >
            <Star size={18} className="fill-yellow-500 text-yellow-500" />
            <span className="font-semibold">{hostel?.rating}</span>
            <span className="text-sm text-gray-600 underline">
              ({hostel?.totalReviews} reviews)
            </span>
          </div>

        </div>

        {/*  Description */}
        <p className="text-gray-600 leading-relaxed border-t pt-4">
          {hostel?.description}
        </p>

        {/*  Tabs */}
        <div className="flex gap-3">
          <button
            onClick={() => setActiveTab("available")}
            className={`px-5 py-2 rounded-lg transition ${activeTab === "available"
              ? "bg-green-600 text-white"
              : "bg-white border"
              }`}
          >
            Available Rooms ({availableRoom.length})
          </button>

          <button
            onClick={() => setActiveTab("booked")}
            className={`px-5 py-2 rounded-lg transition ${activeTab === "booked"
              ? "bg-red-500 text-white"
              : "bg-white border"
              }`}
          >
            Booked Rooms ({bookedRoom.length})
          </button>
        </div>

        {/*  Rooms */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {activeTab === "available" &&
            availableRoom.map((room) => (
              <RoomCard key={room._id} room={room} />
            ))}

          {activeTab === "booked" &&
            bookedRoom.map((room) => (
              <RoomCard key={room._id} room={room} />
            ))}

        </div>

        {/*  Contact Section */}
        <div className="bg-white p-5 rounded-xl shadow-sm border space-y-2">

          <h2 className="text-lg font-semibold">Hostel Contact</h2>

          <p className="flex items-center gap-2 text-gray-600">
            <Mail size={16} />
            {hostel?.contact?.email}
          </p>

          <p className="flex items-center gap-2 text-gray-600">
            <Phone size={16} />
            {hostel?.contact?.phone}
          </p>

        </div>

      </div>

    </div>
  );
}

export default HostelDetails;