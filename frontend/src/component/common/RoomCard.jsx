import React from 'react'
import {
  Bed,
  Users,
  DollarSign,
  Tag,
  CheckCircle,
  XCircle,
  Wifi,
  Home
} from "lucide-react";
import { useNavigate } from 'react-router-dom';

function RoomCard({ room }) {
  if (!room) return null;
  const navigate = useNavigate();

  return (
    <div onClick={()=> navigate(`/room/${room?._id}`)} className=" rounded-xl shadow-md overflow-hidden bg-white hover:shadow-lg transition">

      {/* Image */}
      <img
        src={room?.images?.[0]}
        alt={room?.title}
        className="w-full h-48 object-cover p-2 rounded-2xl"
      />

      <div className="p-4 space-y-3">

        {/* Title */}
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-lg flex items-center gap-2">
            <Home size={18} /> {room?.title}
          </h2>

          <span className="text-sm flex items-center gap-1 text-gray-500">
            <Tag size={14} /> {room?.type}
          </span>
        </div>

        {/* Price + Guests */}
        <div className="flex justify-between text-sm text-gray-700">
          <p className="flex items-center gap-1">
            <DollarSign size={16} />
            {room?.price} / night
          </p>

          <p className="flex items-center gap-1">
            <Users size={16} />
            Max {room?.maxGuest}
          </p>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600">
          {room?.description}
        </p>


        {/* Status */}
        <div className="flex items-center gap-2">
          {room?.status === "available" ? (
            <>
              <CheckCircle size={16} className="text-green-600" />
              <span className="text-green-600 font-semibold">
                Available
              </span>
            </>
          ) : (
            <>
              <XCircle size={16} className="text-red-500" />
              <span className="text-red-500 font-semibold">
                Booked
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default RoomCard