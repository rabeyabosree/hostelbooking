import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { myBookings } from "../../redux/reducers/bookingReducer";
import { useNavigate } from "react-router-dom";
import {
  MapPin,
  Calendar,
  CreditCard,
  Star,
  RefreshCcw
} from "lucide-react";

function MyBooking() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { myBooking, loading, error } = useSelector(
    (state) => state.booking
  );

  useEffect(() => {
    dispatch(myBookings());
  }, [dispatch]);

  return (
    <div className="min-h-screen p-6 bg-gray-100 mt-18">

      <h2 className="text-2xl font-bold mb-6 text-center">
        My Bookings
      </h2>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid gap-6">

        {myBooking?.length > 0 ? (
          myBooking.map((booking) => (

            <div
              key={booking._id}
              className="bg-white p-6 rounded-xl shadow-md overflow-hidden"
            >

              {/* Image */}
              <img
                src={booking.roomId?.images?.[0]}
                className="w-full h-52 object-cover p-2 rounded-2xl"
              />

              <div className="p-4 space-y-3">

               <div className="flex items-center justify-between">
                 {/* Hostel */}
                <h3 className="text-xl font-semibold">
                  {booking.hostelId?.name}
                </h3>
                {/* Dates */}
                <p className="flex items-center text-sm text-gray-600 gap-2">
                  <Calendar size={16} />
                  {new Date(booking.checkIn).toLocaleDateString()} →{" "}
                  {new Date(booking.checkOut).toLocaleDateString()}
                </p>
               </div>

                <p className="flex items-center gap-2 text-gray-600">
                  <MapPin size={16} />
                  {booking.hostelId?.location}
                </p>

                {/* Room */}
                <p>
                  <span className="font-semibold">Room:</span>{" "}
                  {booking.roomId?.title} ({booking.roomId?.type})
                </p>

              

                {/* Price */}
                <p className="flex items-center gap-2 font-semibold">
                  <CreditCard size={16} />
                  BDT : {booking.totalPrice}
                </p>

                {/* Status */}
                <div className="flex justify-between items-center">

                  <span className={`px-3 py-1 rounded-full text-sm ${booking.status === "confirmed"
                      ? "bg-green-100 text-green-600"
                      : "bg-yellow-100 text-yellow-600"
                    }`}>
                    Booking: {booking.status}
                  </span>

                  <span className={`px-3 py-1 rounded-full text-sm ${booking.paymentStatus === "paid"
                      ? "bg-blue-100 text-blue-600"
                      : "bg-red-100 text-red-600"
                    }`}>
                    payment : {booking.paymentStatus}
                  </span>

                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-5 border-t border-gray-500 ">

                  {/* Rebook */}
                  <button
                    onClick={() =>
                      navigate("/booking", {
                        state: { room: booking.roomId }
                      })
                    }
                    className="flex-1 bg-black text-white py-2 rounded-lg flex items-center justify-center gap-2"
                  >
                    <RefreshCcw size={16} />
                    Rebook
                  </button>

                  {/* Add Review */}
                  <button
                    onClick={() =>
                      navigate(`/review/${booking.hostelId._id}`)
                    }
                    className="flex-1 bg-green-600 text-white py-2 rounded-lg flex items-center justify-center gap-2"
                  >
                    <Star size={16} />
                    Review
                  </button>

                </div>

              </div>
            </div>

          ))
        ) : (
          !loading && <p className="text-center">No bookings found</p>
        )}

      </div>

    </div>
  );
}

export default MyBooking;