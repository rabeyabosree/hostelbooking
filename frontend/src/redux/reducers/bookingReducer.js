// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";


// // API url
// const API_URL = ""

// // hostel book
// const hostelBooking = createAsyncThunk(
//     "bookings/book", async (bookingData) => {
//         try {
//             const token = localStorage.getItem("token");
//             const response = await axios.post(`${API_URL}/booking/book`, bookingData,
//                 {
//                     headers: {
//                         Authorization: `Beared ${token}`
//                     }
//                 }
//             );
//             return response.data;

//         } catch (error) {

//         }
//     }
// );

// //get my all bookings
// const myBookings = createAsyncThunk(
//     "bookings/my", async () => {
//         try {
//             const token = localStorage.getItem("token");
//             const response = await axios.post(`${API_URL}/booking/my-Bookings`,
//                 {
//                     headers: {
//                         Authorization: `Beared ${token}`
//                     }
//                 }
//             );
//             return response.data;

//         } catch (error) {

//         }
//     }
// )

// // get admin bookings
// const adminBookings = createAsyncThunk(
//     "bookings/admin", async () => {
//         try {
//             const token = localStorage.getItem("token");
//             const response = await axios.get(`${API_URL}/booking/all`,
//                 {
//                     headers: {
//                         Authorization: `Beared ${token}`
//                     }
//                 }
//             );
//             return response.data;

//         } catch (error) {

//         }
//     }
// )

// // get single booking
// const singleBooking = createAsyncThunk(
//     "bookings/bookingDetails", async (bookingId) => {
//         try {
//             const token = localStorage.getItem("token");
//             const response = await axios.get(`${API_URL}/booking/${bookingId}`,
//                 {
//                     headers: {
//                         Authorization: `Beared ${token}`
//                     }
//                 }
//             );
//             return response.data;

//         } catch (error) {

//         }
//     }
// )

// // update booking status
// const updateBookingStatus = createAsyncThunk(
//     "bookings/update", async ({ bookingStatus, bookingId }) => {
//         try {
//             const token = localStorage.getItem("token");
//             const response = await axios.put(`${API_URL}/booking/${bookingId}`, bookingStatus,
//                 {
//                     headers: {
//                         Authorization: `Beared ${token}`
//                     }
//                 }
//             );
//             return response.data;

//         } catch (error) {

//         }
//     }
// )

// // cancel booking
// const cancelBooking = createAsyncThunk(
//     "bookings/cancel", async (bookingId) => {
//         try {
//             const token = localStorage.getItem("token");
//             const response = await axios.put(`${API_URL}/booking/${bookingId}`,
//                 {
//                     headers: {
//                         Authorization: `Beared ${token}`
//                     }
//                 }
//             );
//             return response.data;
//         } catch (error) {

//         }
//     }
// )

// const initalState = {
//     loading: false,
//     error: null,
//     success: false,
//     message: null,
//     booking: null,
//     adminBooking: [],
//     myBooking: []
// }


// const bookingSlice = createSlice({
//     name: "booking",
//     initalState,
//     reducers,
//     extraReducer: (builder) => {
//         builder
//             .addCase(hostelBooking.pending, (state) => {
//                 state.loading = true;
//                 state.error = action.payload;

//             })
//             .addCase(hostelBooking.fullfilled, (state, action) => {
//                 state.loading = false;
//                 state.message = action.payload.message;
//                 state.success = true;
//                 state.booking = action.payload;

//             })
//             .addCase(hostelBooking.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload;
//                 state.message = action.payload.message;

//             })

//             // get all my bookings
//             .addCase(myBookings.pending, (state) => {
//                 state.loading = true;
//                 state.error = action.payload;

//             })
//             .addCase(myBookings.fullfilled, (state, action) => {
//                 state.loading = false;
//                 state.message = action.payload.message;
//                 state.success = true;
//                 state.myBooking = action.payload.data;

//             })
//             .addCase(myBookings.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload;
//                 state.message = action.payload.message;

//             })

//             // get all admin bookings
//             .addCase(adminBookings.pending, (state) => {
//                 state.loading = true;
//                 state.error = action.payload;

//             })
//             .addCase(adminBookings.fullfilled, (state, action) => {
//                 state.loading = false;
//                 state.message = action.payload.message;
//                 state.success = true;
//                 state.adminBookings = action.payload.data;

//             })
//             .addCase(adminBookings.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload;
//                 state.message = action.payload.message;

//             })

//             // get booking details
//             .addCase(singleBooking.pending, (state) => {
//                 state.loading = true;
//                 state.error = action.payload;

//             })
//             .addCase(singleBooking.fullfilled, (state, action) => {
//                 state.loading = false;
//                 state.message = action.payload.message;
//                 state.success = true;
//                 state.booking = action.payload.data;

//             })
//             .addCase(singleBooking.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload;
//                 state.message = action.payload.message;

//             })

//             // update booking
//             .addCase(updateBookingStatus.pending, (state) => {
//                 state.loading = true;
//                 state.error = action.payload;

//             })
//             .addCase(updateBookingStatus.fullfilled, (state, action) => {
//                 state.loading = false;
//                 state.message = action.payload.message;
//                 state.success = true;
//                 state.adminBooking = state.adminBookings.map((booking) => booking._id === action.payload._id ? booking : action.payload)

//             })
//             .addCase(updateBookingStatus.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload;
//                 state.message = action.payload.message;

//             })

//             // cancel booking
//             .addCase(cancelBooking.pending, (state) => {
//                 state.loading = true;
//                 state.error = action.payload;

//             })
//             .addCase(cancelBooking.fullfilled, (state, action) => {
//                 state.loading = false;
//                 state.message = action.payload.message;
//                 state.success = true;
//                 state.adminBooking = state.adminBooking.map((item) => item._id === action.payload._id ? item : action.payload)

//             })
//             .addCase(cancelBooking.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload;
//                 state.message = action.payload.message;

//             })
//     }
// });

// export default bookingSlice.reducers;


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// API url
const API_URL = "http://localhost:5000/api"

// hostel book
export const hostelBooking = createAsyncThunk(
    "bookings/book", async (bookingData, thunkAPI) => {
        try {
            const token = localStorage.getItem("token");
            console.log(token)

            const response = await axios.post(
                `${API_URL}/booking/book`,
                bookingData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            return response.data;

        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

//get my all bookings
export const myBookings = createAsyncThunk(
    "bookings/my", async (_, thunkAPI) => {
        try {
            const token = localStorage.getItem("token");

            const response = await axios.get(
                `${API_URL}/booking/my-Bookings`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            return response.data;

        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
)

// get admin bookings
export const adminBookings = createAsyncThunk(
    "bookings/admin", async (_, thunkAPI) => {
        try {
            const token = localStorage.getItem("token");

            const response = await axios.get(
                `${API_URL}/booking/all`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            return response.data;

        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
)

// get single booking
export const singleBooking = createAsyncThunk(
    "bookings/bookingDetails", async (bookingId, thunkAPI) => {
        try {
            const token = localStorage.getItem("token");

            const response = await axios.get(
                `${API_URL}/booking/${bookingId}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            return response.data;

        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
)

// update booking status
export const updateBookingStatus = createAsyncThunk(
    "bookings/update", async ({ bookingStatus, bookingId }, thunkAPI) => {
        try {
            const token = localStorage.getItem("token");

            const response = await axios.put(
                `${API_URL}/booking/${bookingId}`,
                bookingStatus,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            return response.data;

        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
)

// cancel booking
export const cancelBooking = createAsyncThunk(
    "bookings/cancel", async (bookingId, thunkAPI) => {
        try {
            const token = localStorage.getItem("token");

            const response = await axios.post(
                `${API_URL}/booking/cancel/${bookingId}`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            return response.data;

        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
)

const initalState = {
    loading: false,
    error: null,
    success: false,
    message: null,
    booking: null,
    adminBooking: [],
    myBooking: []
}


const bookingSlice = createSlice({
    name: "booking",
    initialState: initalState,
    reducers: {
        addBooking: (state, action) => {
            state.booking = action.payload;
            localStorage.setItem("booking", JSON.stringify(action.payload));
        },
        removeBooking: (state) => {
            state.booking = null;
            localStorage.removeItem("booking");
        }
    },

    extraReducers: (builder) => {
        builder

            .addCase(hostelBooking.pending, (state) => {
                state.loading = true;
                state.error = null;

            })
            .addCase(hostelBooking.fulfilled, (state, action) => {
                state.loading = false;
                state.message = action.payload.message;
                state.success = true;
                state.booking = action.payload.data;

            })
            .addCase(hostelBooking.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;

            })

            // get all my bookings
            .addCase(myBookings.pending, (state) => {
                state.loading = true;
                state.error = null;

            })
            .addCase(myBookings.fulfilled, (state, action) => {
                state.loading = false;
                state.message = action.payload.message;
                state.success = true;
                state.myBooking = action.payload.data;

            })
            .addCase(myBookings.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;

            })

            // get all admin bookings
            .addCase(adminBookings.pending, (state) => {
                state.loading = true;
                state.error = null;

            })
            .addCase(adminBookings.fulfilled, (state, action) => {
                state.loading = false;
                state.message = action.payload.message;
                state.success = true;
                state.adminBooking = action.payload.data;

            })
            .addCase(adminBookings.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;

            })

            // get booking details
            .addCase(singleBooking.pending, (state) => {
                state.loading = true;
                state.error = null;

            })
            .addCase(singleBooking.fulfilled, (state, action) => {
                state.loading = false;
                state.message = action.payload.message;
                state.success = true;
                state.booking = action.payload.data;

            })
            .addCase(singleBooking.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;

            })

            // update booking
            .addCase(updateBookingStatus.pending, (state) => {
                state.loading = true;
                state.error = null;

            })
            .addCase(updateBookingStatus.fulfilled, (state, action) => {
                state.loading = false;
                state.message = action.payload.message;
                state.success = true;

                state.adminBooking = state.adminBooking.map((booking) =>
                    booking._id === action.payload.data._id
                        ? action.payload.data
                        : booking
                );

            })
            .addCase(updateBookingStatus.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;

            })

            // cancel booking
            .addCase(cancelBooking.pending, (state) => {
                state.loading = true;
                state.error = null;

            })
            .addCase(cancelBooking.fulfilled, (state, action) => {
                state.loading = false;
                state.message = action.payload.message;
                state.success = true;

                state.myBooking = state.myBooking.map((item) =>
                    item._id === action.payload.data._id
                        ? action.payload.data
                        : item
                );

            })
            .addCase(cancelBooking.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;

            })
    }
});

export const { addBooking, removeBooking } = bookingSlice.actions;
export default bookingSlice.reducer;