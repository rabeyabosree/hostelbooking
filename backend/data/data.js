const hostels = [
    {
        name: "Urban Stay Premium Hostel",
        location: "Dhaka",
        address: "Banani Road 11",
        description: "Premium hostel with rooftop & coworking space",
        destinations: ["Airport", "Gulshan Lake"],

        bookedRooms: 12,
        availableRoom: 18,

        rating: 4.6,
        totalReviews: 150,

        images: [
            "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777510969/Urban_Stay_Premium_Hostel_jvqrjm.jpg",
            "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777510968/Urban_Stay_Premium_Hostel2_zavg8g.jpg",
            "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777510968/Urban_Stay_Premium_Hostel3_ns8wpk.jpg"
        ],

        contact: {
            phone: "01710000001",
            email: "urban@stay.com"
        }
    },
    {
        name: "Backpackers Hub",
        location: "Dhaka",
        address: "Mohammadpur",
        description: "Budget friendly hostel for travelers",
        destinations: ["Shyamoli", "Asad Gate"],

        bookedRooms: 8,
        availableRoom: 10,

        rating: 4.2,
        totalReviews: 80,

        images: [
            "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777510968/Budget_friendly_hostel_for_travelers_krs1fh.jpg",
            "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777510968/Budget_friendly_hostel_for_travelers2_qawham.jpg",
            "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777510967/Budget_friendly_hostel_for_travelers3_z89bk3.jpg"
        ],

        contact: {
            phone: "01810000002",
            email: "hub@mail.com"
        }
    },
    {
        name: "Ocean Breeze Hostel",
        location: "Cox's Bazar",
        address: "Kolatoli Beach",
        description: "Beachfront luxury stay",
        destinations: ["Sea Beach"],

        bookedRooms: 15,
        availableRoom: 20,

        rating: 4.8,
        totalReviews: 230,

        images: [
            "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777510967/Ocean_Breeze_Hostel_zzrj3s.jpg",
            "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777510971/Ocean_Breeze_Hostel2_v2f21p.jpg",
            "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777510971/Ocean_Breeze_Hostel3_erus5n.jpg"
        ],

        contact: {
            phone: "01910000003",
            email: "ocean@mail.com"
        }
    },
    {
        name: "Hilltop Escape",
        location: "Bandarban",
        address: "Nilgiri Hills",
        description: "Nature & hill view",

        destinations: ["Nilgiri", "Nilachal"],

        bookedRooms: 5,
        availableRoom: 7,

        rating: 4.7,
        totalReviews: 95,

        images: [
            "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777510971/Hilltop_Escap_d9cngd.jpg",
            "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777510971/Hilltop_Escap3_vhgh8o.jpg",
            "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777510971/Emerald_Cocktail2_ylwqey.jpg"
        ],

        contact: {
            phone: "01610000004",
            email: "hill@mail.com"
        }
    },
    {
        name: "Tea Garden Residency",
        location: "Sylhet",
        address: "Srimangal Road",
        description: "Tea garden surrounded peaceful stay",

        destinations: ["Tea Garden"],

        bookedRooms: 9,
        availableRoom: 11,

        rating: 4.4,
        totalReviews: 60,

        images: [
            "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777510971/Tea_Garden_Residency_jvgynt.jpg",
            "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777510970/Tea_Garden_Residency2_a0hbqk.jpg",
            "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777510970/Tea_Garden_Residency3_fzsaej.jpg"
        ],

        contact: {
            phone: "01510000005",
            email: "tea@mail.com"
        }
    },

    // Extra 5 (more realistic variation)
    {
        name: "City Lights Hostel",
        location: "Chittagong",
        address: "GEC Circle",
        description: "Modern city stay",

        destinations: ["Port Area"],

        bookedRooms: 6,
        availableRoom: 9,

        rating: 4.1,
        totalReviews: 40,

        images: [
            "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777510970/City_Lights_Hostel_tz6qq2.jpg",
            "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777510970/City_Lights_Hostel3_tta9sh.jpg",
            "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777510970/City_Lights_Hostel2_il6gfq.jpg"
        ],

        contact: {
            phone: "01720000006",
            email: "city@mail.com"
        }
    },
    {
        name: "River View Stay",
        location: "Barisal",
        address: "Kirtankhola River Side",
        description: "River view peaceful hostel",

        destinations: ["River Side"],

        bookedRooms: 4,
        availableRoom: 8,

        rating: 4.0,
        totalReviews: 30,

        images: [
            "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777510970/River_View_Stay_smx8e5.jpg",
            "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777510970/River_View_Stay3_fg7afa.jpg",
            "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777510969/River_View_Stay2_ezet4p.jpg"
        ],

        contact: {
            phone: "01820000007",
            email: "river@mail.com"
        }
    },
    {
        name: "Heritage Inn Hostel",
        location: "Rajshahi",
        address: "Shaheb Bazar",
        description: "Cultural & heritage style hostel",

        destinations: ["Padma River"],

        bookedRooms: 7,
        availableRoom: 10,

        rating: 4.3,
        totalReviews: 55,

        images: [
            "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777510969/Heritage_Inn_Hostel_xezibi.jpg",
            "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777510969/Heritage_Inn_Hostel3_clo6kt.jpg",
            "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777510969/Heritage_Inn_Hostel2_xevnry.jpg"
        ],

        contact: {
            phone: "01920000008",
            email: "heritage@mail.com"
        }
    },
    {
        name: "Eco Nature Lodge",
        location: "Khagrachari",
        address: "Alutila Cave Area",
        description: "Eco friendly nature stay",

        destinations: ["Alutila Cave"],

        bookedRooms: 3,
        availableRoom: 6,

        rating: 4.5,
        totalReviews: 35,

        images: [
            "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777510969/Eco_Nature_Lodge_tfh87r.jpg",
            "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777510967/Eco_Nature_Lodge2_rkwsm9.jpg",
            "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777510969/Eco_Nature_Lodge3_hy88ao.jpg"
        ],

        contact: {
            phone: "01620000009",
            email: "eco@mail.com"
        }
    },
    {
        name: "Sunset View Hostel",
        location: "Kuakata",
        address: "Sea Beach Area",
        description: "Sunset & sunrise view hostel",

        destinations: ["Sea Beach"],

        bookedRooms: 10,
        availableRoom: 14,

        rating: 4.6,
        totalReviews: 75,

        images: [
            "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777510967/Sunset_View_Hostel_shfvsw.jpg",
            "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777510967/Sunset_View_Hostel2_o2blhk.jpg",
            "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777510969/Sunset_View_Hostel2_xevnry.jpg"
        ],

        contact: {
            phone: "01520000010",
            email: "sunset@mail.com"
        }
    }
];

const rooms = [
  {
    hostelId: "69f2d412cb437880a15e91cb",
    title: "Deluxe Room",
    type: "Double",
    price: 3000,
    maxGuest: 2,
    description: "City view room",
    images: [
      "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room1_oub6va.jpg",
      "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room2_c6syqz.jpg",
      "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room3_fvos6a.jpg"
    ],
    facilities: [{ name: "WiFi" }],
    status: "available"
  },

  {
    hostelId: "69f2d412cb437880a15e91cb",
    title: "Single Room",
    type: "Single",
    price: 900,
    maxGuest: 1,
    description: "Budget room",
    images: [
      "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room1_oub6va.jpg",
      "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room2_c6syqz.jpg",
      "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room3_fvos6a.jpg"
    ],
    facilities: [{ name: "Fan" }],
    status: "available"
  },

  {
    hostelId: "69f2d412cb437880a15e91cb",
    title: "Couple Room",
    type: "Double",
    price: 2500,
    maxGuest: 2,
    description: "Couple stay",
    images: [
      "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room1_oub6va.jpg",
      "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room2_c6syqz.jpg",
      "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room3_fvos6a.jpg"
    ],
    facilities: [{ name: "AC" }],
    status: "available"
  }
];

// const rooms = [
//   {
//     hostelId: "69f2d412cb437880a15e91cc",
//     title: "Suite",
//     type: "Double",
//     price: 3200,
//     maxGuest: 2,
//     description: "Suite room",
//     images: [
//       "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room1_oub6va.jpg",
//       "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room2_c6syqz.jpg",
//       "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room3_fvos6a.jpg"
//     ],
//     facilities: [{ name: "AC" }],
//     status: "available"
//   },

//   {
//     hostelId: "69f2d412cb437880a15e91cc",
//     title: "Budget",
//     type: "Single",
//     price: 800,
//     maxGuest: 1,
//     description: "Budget",
//     images: [
//       "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room1_oub6va.jpg",
//       "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room2_c6syqz.jpg",
//       "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room3_fvos6a.jpg"
//     ],
//     facilities: [{ name: "Fan" }],
//     status: "available"
//   },

//   {
//     hostelId: "69f2d412cb437880a15e91cc",
//     title: "Family",
//     type: "Family",
//     price: 4500,
//     maxGuest: 4,
//     description: "Family room",
//     images: [
//       "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room1_oub6va.jpg",
//       "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room2_c6syqz.jpg",
//       "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room3_fvos6a.jpg"
//     ],
//     facilities: [{ name: "Kitchen" }],
//     status: "available"
//   },

//   {
//     hostelId: "69f2d412cb437880a15e91cc",
//     title: "Couple",
//     type: "Double",
//     price: 2700,
//     maxGuest: 2,
//     description: "Couple",
//     images: [
//       "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room1_oub6va.jpg",
//       "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room2_c6syqz.jpg",
//       "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room3_fvos6a.jpg"
//     ],
//     facilities: [{ name: "AC" }],
//     status: "available"
//   }
// ];

// const rooms = [
//   {
//     hostelId: "69f2d412cb437880a15e91cd",
//     title: "Deluxe",
//     type: "Double",
//     price: 3100,
//     maxGuest: 2,
//     description: "Deluxe",
//     images: [
//       "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room1_oub6va.jpg",
//       "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room2_c6syqz.jpg",
//       "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room3_fvos6a.jpg"
//     ],
//     facilities: [{ name: "WiFi" }],
//     status: "available"
//   },

//   {
//     hostelId: "69f2d412cb437880a15e91cd",
//     title: "Single",
//     type: "Single",
//     price: 850,
//     maxGuest: 1,
//     description: "Single",
//     images: [
//       "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room1_oub6va.jpg",
//       "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room2_c6syqz.jpg",
//       "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room3_fvos6a.jpg"
//     ],
//     facilities: [{ name: "Fan" }],
//     status: "available"
//   },

//   {
//     hostelId: "69f2d412cb437880a15e91cd",
//     title: "Family",
//     type: "Family",
//     price: 4600,
//     maxGuest: 5,
//     description: "Family",
//     images: [
//       "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room1_oub6va.jpg",
//       "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room2_c6syqz.jpg",
//       "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room3_fvos6a.jpg"
//     ],
//     facilities: [{ name: "Kitchen" }],
//     status: "available"
//   }
// ];

// const rooms = [
//   {
//     hostelId: "69f2d412cb437880a15e91ce",
//     title: "Sea View",
//     type: "Double",
//     price: 3500,
//     maxGuest: 2,
//     description: "Sea view",
//     images: [
//       "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room1_oub6va.jpg",
//       "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room2_c6syqz.jpg",
//       "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room3_fvos6a.jpg"
//     ],
//     facilities: [{ name: "AC" }],
//     status: "available"
//   },

//   {
//     hostelId: "69f2d412cb437880a15e91ce",
//     title: "Budget",
//     type: "Single",
//     price: 800,
//     maxGuest: 1,
//     description: "Budget",
//     images: [
//       "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room1_oub6va.jpg",
//       "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room2_c6syqz.jpg",
//       "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room3_fvos6a.jpg"
//     ],
//     facilities: [{ name: "Fan" }],
//     status: "available"
//   }
// ];

// const rooms = [
//   {
//     hostelId: "69f2d412cb437880a15e91cf",
//     title: "Luxury",
//     type: "Double",
//     price: 4200,
//     maxGuest: 2,
//     description: "Luxury",
//     images: [
//       "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room1_oub6va.jpg",
//       "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room2_c6syqz.jpg",
//       "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room3_fvos6a.jpg"
//     ],
//     facilities: [{ name: "AC" }],
//     status: "available"
//   },

//   {
//     hostelId: "69f2d412cb437880a15e91cf",
//     title: "Shared",
//     type: "Shared",
//     price: 700,
//     maxGuest: 4,
//     description: "Shared",
//     images: [
//       "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room1_oub6va.jpg",
//       "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room2_c6syqz.jpg",
//       "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room3_fvos6a.jpg"
//     ],
//     facilities: [{ name: "Locker" }],
//     status: "available"
//   },

//   {
//     hostelId: "69f2d412cb437880a15e91cf",
//     title: "Single",
//     type: "Single",
//     price: 850,
//     maxGuest: 1,
//     description: "Single",
//     images: [
//       "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room1_oub6va.jpg",
//       "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room2_c6syqz.jpg",
//       "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room3_fvos6a.jpg"
//     ],
//     facilities: [{ name: "Fan" }],
//     status: "available"
//   },

//   {
//     hostelId: "69f2d412cb437880a15e91cf",
//     title: "Couple",
//     type: "Double",
//     price: 2700,
//     maxGuest: 2,
//     description: "Couple",
//     images: [
//       "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room1_oub6va.jpg",
//       "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room2_c6syqz.jpg",
//       "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room3_fvos6a.jpg"
//     ],
//     facilities: [{ name: "AC" }],
//     status: "available"
//   }
// ];

// const rooms = [
//   {
//     hostelId: "69f2d412cb437880a15e91d0",
//     title: "Hill View",
//     type: "Double",
//     price: 3300,
//     maxGuest: 2,
//     description: "Hill view",
//     images: [
//       "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room1_oub6va.jpg",
//       "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room2_c6syqz.jpg",
//       "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room3_fvos6a.jpg"
//     ],
//     facilities: [{ name: "WiFi" }],
//     status: "available"
//   },

//   {
//     hostelId: "69f2d412cb437880a15e91d0",
//     title: "Single",
//     type: "Single",
//     price: 900,
//     maxGuest: 1,
//     description: "Single",
//     images: [
//       "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room1_oub6va.jpg",
//       "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room2_c6syqz.jpg",
//       "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room3_fvos6a.jpg"
//     ],
//     facilities: [{ name: "Fan" }],
//     status: "available"
//   },

//   {
//     hostelId: "69f2d412cb437880a15e91d0",
//     title: "Family",
//     type: "Family",
//     price: 4700,
//     maxGuest: 5,
//     description: "Family",
//     images: [
//       "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room1_oub6va.jpg",
//       "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room2_c6syqz.jpg",
//       "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room3_fvos6a.jpg"
//     ],
//     facilities: [{ name: "Kitchen" }],
//     status: "available"
//   },

//   {
//     hostelId: "69f2d412cb437880a15e91d0",
//     title: "Couple",
//     type: "Double",
//     price: 2800,
//     maxGuest: 2,
//     description: "Couple",
//     images: [
//       "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room1_oub6va.jpg",
//       "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room2_c6syqz.jpg",
//       "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room3_fvos6a.jpg"
//     ],
//     facilities: [{ name: "AC" }],
//     status: "available"
//   },

//   {
//     hostelId: "69f2d412cb437880a15e91d0",
//     title: "Budget",
//     type: "Single",
//     price: 800,
//     maxGuest: 1,
//     description: "Budget",
//     images: [
//       "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room1_oub6va.jpg",
//       "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room2_c6syqz.jpg",
//       "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room3_fvos6a.jpg"
//     ],
//     facilities: [{ name: "Fan" }],
//     status: "available"
//   }
// ];

// const rooms = [
//   {
//     hostelId: "69f2d412cb437880a15e91d1",
//     title: "Premium",
//     type: "Double",
//     price: 3800,
//     maxGuest: 2,
//     description: "Premium",
//     images: [
//       "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room1_oub6va.jpg",
//       "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room2_c6syqz.jpg",
//       "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room3_fvos6a.jpg"
//     ],
//     facilities: [{ name: "AC" }],
//     status: "available"
//   },

//   {
//     hostelId: "69f2d412cb437880a15e91d1",
//     title: "Single",
//     type: "Single",
//     price: 850,
//     maxGuest: 1,
//     description: "Single",
//     images: [
//       "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room1_oub6va.jpg",
//       "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room2_c6syqz.jpg",
//       "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room3_fvos6a.jpg"
//     ],
//     facilities: [{ name: "Fan" }],
//     status: "available"
//   },

//   {
//     hostelId: "69f2d412cb437880a15e91d1",
//     title: "Couple",
//     type: "Double",
//     price: 2600,
//     maxGuest: 2,
//     description: "Couple",
//     images: [
//       "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room1_oub6va.jpg",
//       "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room2_c6syqz.jpg",
//       "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room3_fvos6a.jpg"
//     ],
//     facilities: [{ name: "AC" }],
//     status: "available"
//   }
// ];

// const rooms = [
//     {
//         hostelId: "69f2d412cb437880a15e91d2", title: "River View", type: "Double", price: 3200, maxGuest: 2, description: "River view", images: [
//             "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room1_oub6va.jpg",
//             "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room2_c6syqz.jpg",
//             "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room3_fvos6a.jpg"
//         ], facilities: [{ name: "WiFi" }], status: "available"
//     },
//     {
//         hostelId: "69f2d412cb437880a15e91d2", title: "Single", type: "Single", price: 800, maxGuest: 1, description: "Single", images: [
//             "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room1_oub6va.jpg",
//             "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room2_c6syqz.jpg",
//             "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room3_fvos6a.jpg"
//         ], facilities: [{ name: "Fan" }], status: "available"
//     },
//     {
//         hostelId: "69f2d412cb437880a15e91d2", title: "Family", type: "Family", price: 4500, maxGuest: 4, description: "Family", images: [
//             "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room1_oub6va.jpg",
//             "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room2_c6syqz.jpg",
//             "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room3_fvos6a.jpg"
//         ], facilities: [{ name: "Kitchen" }], status: "available"
//     }
// ];

// const rooms = [
//     {
//         hostelId: "69f2d412cb437880a15e91d3", title: "Family Suite", type: "Family", price: 4700, maxGuest: 5, description: "Family", images: [
//             "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room1_oub6va.jpg",
//             "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room2_c6syqz.jpg",
//             "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room3_fvos6a.jpg"
//         ], facilities: [{ name: "Kitchen" }], status: "available"
//     },
//     {
//         hostelId: "69f2d412cb437880a15e91d3", title: "Couple", type: "Double", price: 2700, maxGuest: 2, description: "Couple", images: [
//             "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room1_oub6va.jpg",
//             "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room2_c6syqz.jpg",
//             "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room3_fvos6a.jpg"
//         ], facilities: [{ name: "AC" }], status: "available"
//     }
// ];

// const rooms = [
//     {
//         hostelId: "69f2d412cb437880a15e91d4", title: "Luxury", type: "Double", price: 4200, maxGuest: 2, description: "Luxury", images: [
//             "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room1_oub6va.jpg",
//             "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room2_c6syqz.jpg",
//             "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room3_fvos6a.jpg"
//         ], facilities: [{ name: "AC" }], status: "available"
//     },
//     {
//         hostelId: "69f2d412cb437880a15e91d4", title: "Budget", type: "Single", price: 800, maxGuest: 1, description: "Budget", images: [
//             "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room1_oub6va.jpg",
//             "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room2_c6syqz.jpg",
//             "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room3_fvos6a.jpg"
//         ], facilities: [{ name: "Fan" }], status: "available"
//     },
//     {
//         hostelId: "69f2d412cb437880a15e91d4", title: "Couple", type: "Double", price: 2500, maxGuest: 2, description: "Couple", images: [
//             "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room1_oub6va.jpg",
//             "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room2_c6syqz.jpg",
//             "https://res.cloudinary.com/ddtkotpmn/image/upload/v1777518776/room3_fvos6a.jpg"
//         ], facilities: [{ name: "AC" }], status: "available"
//     }
// ];

module.exports = { hostels, rooms };
