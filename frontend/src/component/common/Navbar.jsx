// import React from 'react'
// import Logo from './Logo';

// function Navbar() {
//   const navItems = [
//     {name : "Hostels", link: "/hostels"},
//     {name : "Bookings", link: "/bookings"},
//     {name : "Reviews", link: "/reviews"}
//   ]
//   return (
//     <header>
//       {/* logo */}
//       <Logo />
//       {/* nav */}
//       <nav>
//         <ul>
//           {navItems.map((item, index) => (
//             <li key={index}>
//               <a href={item.link}>{item.name}</a>
//             </li>
//           ))}
//         </ul>
//       </nav>
//       {/* side bar */}
//       <div>
//         <button>Login</button>
//         <button>Sign Up</button>
//         <div>
//           my Booking
//         </div>
//       </div>
//     </header>
//   )
// }

// export default Navbar


import React, { useState } from "react";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: "Hostels", link: "/hostels" },
    { name: "Destinations", link: "/destinations" },
    { name: "Contact", link: "/contact" },
    { name: "MyBookings", link: "/my-booking" },
  ];

  return (
    <header className="w-full  fixed top-0 z-50">
      <div className="max-w-4xl mx-auto px-5 p-3 flex items-center justify-end">

        <div className="bg-gray-50 my-2 rounded-full flex items-center justify-between gap-22 py-3 px-6">
          {/* Logo */}
          <Logo />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex gap-6 font-medium text-gray-800">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="hover:text-green-600 transition duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

        </div>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center gap-4 ml-18">
          <button className="px-4 py-2 rounded-full border border-green-600 text-green-600 hover:bg-green-100 transition">
            Login
          </button>

          <button className="px-4 py-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition">
            Sign Up
          </button>

        </div>



        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white ml-4"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>


      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-5 py-4 space-y-4">
          <ul className="space-y-3 font-medium text-gray-700">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="block hover:text-blue-600"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <div className=" flex gap-3 ">
            <button onClick={() => navigate("/login")} className=" py-2 bg-gray-100 px-4 rounded-full text-green-600">
              Login
            </button>

            <button onClick={() => navigate("/register")} className=" py-2 bg-green-600 px-4 rounded-full text-white">
              Sign Up
            </button>

          </div>
        </div>
      )}

    </header>
  );
}

export default Navbar;