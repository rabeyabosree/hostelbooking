import { configureStore } from "@reduxjs/toolkit";
import hostelReducer from "../reducers/hostelreducer";
import roomReducer from "../reducers/roomReducer";
import bookingsReducer from "../reducers/bookingReducer";
import reviewReducer from "../reducers/reviewReducer";
import paymentReducer from "../reducers/paymentReducer";
import authReducer from "../reducers/authReducer";



const store = configureStore({
    reducer: {
        hostel: hostelReducer,
        room: roomReducer,
        booking: bookingsReducer,
        review: reviewReducer,
        payment: paymentReducer,
        auth: authReducer
    }
})


export default store;