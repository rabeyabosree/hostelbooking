import React from "react";
import img from "../../assets/hero img.webp";


import { MapPin, CalendarDays, Users, Search } from "lucide-react";

function Hero() {
  return (
    <section
      className="relative h-[85vh] md:h-[95vh] w-full bg-center pt-16 bg-cover flex items-center justify-center"
      style={{ backgroundImage: `url(${img})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>

      {/* Content */}
      <div className="relative z-10 mx-5 text-center px-4 w-full max-w-6xl">
        
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Find Your Perfect Stay
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mt-4">
          Discover the best hostels for your next adventure
        </p>

        {/*  Search Box */}
        <div className="mt-10 bg-white/60 backdrop-blur-md rounded-2xl shadow-2xl p-4 md:p-5">

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">

            {/* Destination */}
            <div className="relative group">
              <MapPin className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Where are you going?"
                className="w-full bg-white pl-10 pr-3 py-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
            </div>

            {/* Check In */}
            <div className="relative">
              <CalendarDays className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="date"
                className="w-full bg-white pl-10 pr-3 py-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Check Out */}
            <div className="relative">
              <CalendarDays className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="date"
                className="w-full bg-white pl-10 pr-3 py-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Guests */}
            <div className="relative">
              <Users className="absolute left-3 top-3 text-gray-400" size={18} />
              <select className="w-full bg-white pl-10 pr-3 py-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none">
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4 Guests</option>
              </select>
            </div>

            {/* Button */}
            <button className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl py-3 transition transform hover:scale-105">
              <Search size={18} />
              Search
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;