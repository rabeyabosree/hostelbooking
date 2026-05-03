import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Star, MapPin, BedDouble } from "lucide-react";

function HostelCard({ hostel }) {
    const [current, setCurrent] = useState(0);
    const navigate = useNavigate();

    // auto slider
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) =>
                prev === hostel.images.length - 1 ? 0 : prev + 1
            );
        }, 2500);

        return () => clearInterval(interval);
    }, [hostel.images.length]);

    return (
        <div onClick={()=> navigate(`/hostels/${hostel._id}`)} className="bg-white p-3 rounded-2xl overflow-hidden hover:shadow-lg transition duration-300">

            {/* Image Slider */}
            <div className="relative">
                <img
                    src={hostel.images[current]}
                    alt={hostel.name}
                    className="w-full h-52 object-cover transition-all duration-500 p-2 rounded-2xl"
                />

                {/* Rating */}
                <div className="absolute top-3 right-3 bg-white/50 backdrop-blur px-2 py-1 m-2 rounded-lg flex items-center gap-1 text-sm shadow">
                    <Star size={14} className="text-yellow-500 fill-yellow-500" />
                    {hostel.rating}
                </div>
            </div>              


            

            {/* Content */}
            <div className="p-2 space-y-2">

                {/* Location */}
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <MapPin size={16} />
                    <span>{hostel.location}</span>
                </div>

                {/* Name + Price */}
                <div className="flex justify-between items-start">
                    <h2 className="text-md font-semibold text-gray-800 leading-snug">
                        {hostel.name}
                    </h2>

                    <div className="text-right flex gap-1 items-center">
                        <p className="text-blue-600 font-bold text-xl ">
                            ৳{hostel.price || 5000}
                        </p>
                        <p className="text-xs text-gray-400">/ Per Night</p>
                    </div>
                </div>

                {/* Rooms */}
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <BedDouble size={16} />
                    <span>{hostel.availableRoom} rooms available</span>
                   
                </div>

               
            </div>
        </div>
    );
}

export default HostelCard;