import React, { useState } from "react";
import img from "../../assets/hero img.webp";
import { MapPin, CalendarDays, Users, Search } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { searchHostels } from "../../redux/reducers/hostelreducer";
import { useNavigate } from 'react-router-dom';
import SearchResult from "./SearchResult";

function Hero() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { searchResult } = useSelector((state) => state.hostel);


  const [form, setForm] = useState({
    destination: "",
    checkIn: "",
    checkOut: "",
    guests: 1
  });

  console.log(searchResult)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const findHostels = () => {
    dispatch(searchHostels(form));
  };



  return (
    <section
      className="relative h-[85vh] md:h-[95vh] w-full bg-center pt-16 bg-cover flex items-center justify-center"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>

      <div className="relative z-10 mx-5 text-center px-4 w-full max-w-6xl">

        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Find Your Perfect Stay
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mt-4">
          Discover the best hostels for your next adventure
        </p>

        <div className="mt-10 bg-white/60 backdrop-blur-md rounded-2xl shadow-2xl p-4 md:p-5">

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">

            {/* Destination */}
            <div className="relative">
              <MapPin className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="text"
                name="destination"
                placeholder="Where are you going?"
                onChange={handleChange}
                className="w-full bg-white pl-10 pr-3 py-3 rounded-xl"
              />
            </div>

            {/* Check In */}
            <div className="relative">
              <CalendarDays className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="date"
                name="checkIn"
                onChange={handleChange}
                className="w-full bg-white pl-10 pr-3 py-3 rounded-xl"
              />
            </div>

            {/* Check Out */}
            <div className="relative">
              <CalendarDays className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="date"
                name="checkOut"
                onChange={handleChange}
                className="w-full bg-white pl-10 pr-3 py-3 rounded-xl"
              />
            </div>

            {/* Guests */}
            <div className="relative">
              <Users className="absolute left-3 top-3 text-gray-400" size={18} />
              <select
                name="guests"
                onChange={handleChange}
                className="w-full bg-white pl-10 pr-3 py-3 rounded-xl"
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
              </select>
            </div>

            {/* Button */}
            <button
              onClick={findHostels}
              className="flex items-center justify-center gap-2 bg-green-600 text-white rounded-xl py-3"
            >
              <Search size={18} />
              Search
            </button>
            {
              searchResult < 0 && <SearchResult />
            }

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;