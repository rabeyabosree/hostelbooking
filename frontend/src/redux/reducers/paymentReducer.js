// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";


// // API url
// const API_URL = ""

// // pay
// const payNow = createAsyncThunk(
//     "payment/pay", async () => {
//         try {

//         } catch (error) {

//         }
//     }
// )

// // success
// const paymentSuccess = createAsyncThunk(
//     "payment/success", async () => {
//         try {

//         } catch (error) {

//         }
//     }
// )

// // failed
// const paymentFailed = createAsyncThunk(
//     "payment/failed", async () => {
//         try {

//         } catch (error) {

//         }
//     }
// )

// // cancel
// const paymentCancel = createAsyncThunk(
//     "payment/cancel", async () => {
//         try {

//         } catch (error) {

//         }
//     }
// )



// const initalState = {
//     loading: false,
//     error: null,
//     success: false,
//     message: null,
//     paymentInfo: null
// }


// const paymentSlice = createSlice({
//     name: "payment",
//     initalState,
//     reducers,
//     extraReducer: (builder) => {
//         builder
//             .addCase(payNow.pending, (state) => {
//                 state.loading = true;
//                 state.error = action.payload;
//                 success = false;

//             })
//             .addCase(payNow.fullfilled, (state, action) => {
//                 state.loading = false;
//                 state.message = action.payload.message;
//                 state.success = true;
//                 state.paymentInfo = action.payload.data;

//             })
//             .addCase(payNow.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload;
//                 state.message = action.payload.message;
//             })
//             // success
//             .addCase(paymentSuccess.pending, (state) => {
//                 state.loading = true;
//                 state.error = action.payload;

//             })
//             .addCase(paymentSuccess.fullfilled, (state, action) => {
//                 state.loading = false;
//                 state.message = action.payload.message;
//                 state.success = true;
//                 state.hostels = action.payload.data;

//             })
//             .addCase(paymentSuccess.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload;
//                 state.message = action.payload.message;

//             })
//             // failed
//             .addCase(paymentFailed.pending, (state) => {
//                 state.loading = true;
//                 state.error = action.payload;

//             })
//             .addCase(paymentFailed.fullfilled, (state, action) => {
//                 state.loading = false;
//                 state.message = action.payload.message;
//             })
//             .addCase(paymentFailed.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload;
//                 state.message = action.payload.message;

//             })
//             //cancel
//             .addCase(paymentCancel.pending, (state) => {
//                 state.loading = true;
//                 state.error = action.payload;

//             })
//             .addCase(paymentCancel.fullfilled, (state, action) => {
//                 state.loading = false;
//                 state.message = action.payload.message;

//             })
//             .addCase(paymentCancel.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload;
//                 state.message = action.payload.message;

//             })
//     }
// });

// export default paymentSlice.reducers;


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// API url
const API_URL = "http://localhost:5000/api"

// pay
export const payNow = createAsyncThunk(
    "payment/pay", async (bookingId, thunkAPI) => {
        try {
            const token = localStorage.getItem("token");

            const response = await axios.post(
                `${API_URL}/payment/pay/${bookingId}`,
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

// pay
export const getPayment = createAsyncThunk(
    "payment/get", async (bookingId, thunkAPI) => {
        try {
            const token = localStorage.getItem("token");

            const response = await axios.get(
                `${API_URL}/payment/${bookingId}`,
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

// // success
// export const paymentSuccess = createAsyncThunk(
//     "payment/success", async (bookingId, thunkAPI) => {
//         try {
//             const response = await axios.post(
//                 `${API_URL}/payment/success/${bookingId}`
//             );

//             return response.data;

//         } catch (error) {
//             return thunkAPI.rejectWithValue(error.response.data);
//         }
//     }
// )

// // failed
// export const paymentFailed = createAsyncThunk(
//     "payment/failed", async (bookingId, thunkAPI) => {
//         try {
//             const response = await axios.post(
//                 `${API_URL}/payment/failed/${bookingId}`
//             );

//             return response.data;

//         } catch (error) {
//             return thunkAPI.rejectWithValue(error.response.data);
//         }
//     }
// )

// // cancel
// export const paymentCancel = createAsyncThunk(
//     "payment/cancel", async (bookingId, thunkAPI) => {
//         try {
//             const response = await axios.post(
//                 `${API_URL}/payment/cancel/${bookingId}`
//             );

//             return response.data;

//         } catch (error) {
//             return thunkAPI.rejectWithValue(error.response.data);
//         }
//     }
// )



const initalState = {
    loading: false,
    error: null,
    success: false,
    message: null,
    paymentInfo: null
}


const paymentSlice = createSlice({
    name: "payment",
    initialState: initalState,
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(payNow.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;

            })
            .addCase(payNow.fulfilled, (state, action) => {
                state.loading = false;
                state.message = action.payload.message;
                state.success = true;
            })
            .addCase(payNow.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.message = action.payload.message;
            })

            .addCase(getPayment.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;

            })
            .addCase(getPayment.fulfilled, (state, action) => {
                state.loading = false;
                state.message = action.payload.message;
                state.success = true;
                state.paymentInfo = action.payload.data;

            })
            .addCase(getPayment.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.message = action.payload.message;
            })

        // success
        // .addCase(paymentSuccess.pending, (state) => {
        //     state.loading = true;
        //     state.error = null;

        // })
        // .addCase(paymentSuccess.fulfilled, (state, action) => {
        //     state.loading = false;
        //     state.message = action.payload.message;
        //     state.success = true;

        // })
        // .addCase(paymentSuccess.rejected, (state, action) => {
        //     state.loading = false;
        //     state.error = action.payload;
        //     state.message = action.payload.message;

        // })

        // // failed
        // .addCase(paymentFailed.pending, (state) => {
        //     state.loading = true;
        //     state.error = null;

        // })
        // .addCase(paymentFailed.fulfilled, (state, action) => {
        //     state.loading = false;
        //     state.message = action.payload.message;
        // })
        // .addCase(paymentFailed.rejected, (state, action) => {
        //     state.loading = false;
        //     state.error = action.payload;
        //     state.message = action.payload.message;

        // })

        // //cancel
        // .addCase(paymentCancel.pending, (state) => {
        //     state.loading = true;
        //     state.error = null;

        // })
        // .addCase(paymentCancel.fulfilled, (state, action) => {
        //     state.loading = false;
        //     state.message = action.payload.message;

        // })
        // .addCase(paymentCancel.rejected, (state, action) => {
        //     state.loading = false;
        //     state.error = action.payload;
        //     state.message = action.payload.message;

        // })
    }
});

export default paymentSlice.reducer;