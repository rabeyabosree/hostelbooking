// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";


// // API url
// const API_URL = ""

// // add review
// const addReview = createAsyncThunk(
//     "reviews/add", async (reviewData) => {
//         try {
//             const token = localStorage.getItem("token");
//             const response = await axios.post(`${API_URL}/reviews/add`, reviewData,
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
// // get review
// const singleReview = createAsyncThunk(
//     "reviews/get", async (reviewId) => {
//         try {

//             const response = await axios.get(`${API_URL}/reviews/${reviewId}`);
//             return response.data;

//         } catch (error) {

//         }
//     }
// )
// // edit review
// const editReview = createAsyncThunk(
//     "reviews/edit", async () => {
//         try {
//             const token = localStorage.getItem("token");
//             const response = await axios.put(`${API_URL}/reviews/add`, reviewData,
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
// // delete review
// const deleteReview = createAsyncThunk(
//     "reviews/delete", async (reviewId) => {
//         try {
//             const token = localStorage.getItem("token");
//             const response = await axios.delete(`${API_URL}/reviews/delete/${reviewId}`,
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
// // all review
// const allReview = createAsyncThunk(
//     "reviews/all", async () => {
//         try {

//             const response = await axios.get(`${API_URL}/reviews/all`);
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
//     review: null,
//     reviwes: [],
//     rating: 0,
//     avgRating: 0
// }


// const reviewSlice = createSlice({
//     name: "auth",
//     initalState,
//     reducers,
//     extraReducer: (builder) => {
//         builder
//             .addCase(addReview.pending, (state) => {
//                 state.loading = true;
//                 state.error = null;

//             })
//             .addCase(addReview.fullfilled, (state, action) => {
//                 state.loading = false;
//                 state.error = null;
//                 state.review = action.payload.data;
//                 state.message = action.payload.message;

//             })
//             .addCase(addReview.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload;
//                 state.message = action.payload.message;

//             })

//             // get single review
//             .addCase(singleReview.pending, (state) => {
//                 state.loading = true;
//                 state.error = null;

//             })
//             .addCase(singleReview.fullfilled, (state, action) => {
//                 state.loading = false;
//                 state.error = null;
//                 state.review = action.payload.data;
//                 state.message = action.payload.message;

//             })
//             .addCase(singleReview.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload;
//                 state.message = action.payload.message;

//             })
//             // edit review
//             .addCase(editReview.pending, (state) => {
//                 state.loading = true;
//                 state.error = null;

//             })
//             .addCase(editReview.fullfilled, (state, action) => {
//                 state.loading = false;
//                 state.error = null;
//                 state.review = action.payload.data;
//                 state.message = action.payload.message;

//             })
//             .addCase(editReview.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload;
//                 state.message = action.payload.message;

//             })
//             // delete review
//             .addCase(deleteReview.pending, (state) => {
//                 state.loading = true;
//                 state.error = null;

//             })
//             .addCase(deleteReview.fullfilled, (state, action) => {
//                 state.loading = false;
//                 state.error = null;
//                 state.review = action.payload.data;
//                 state.message = action.payload.message;

//             })
//             .addCase(deleteReview.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload;
//                 state.message = action.payload.message;

//             })
//             // all review
//             .addCase(addReview.pending, (state) => {
//                 state.loading = true;
//                 state.error = null;

//             })
//             .addCase(allReview.fullfilled, (state, action) => {
//                 state.loading = false;
//                 state.error = null;
//                 state.review = action.payload.data;
//                 state.message = action.payload.message;

//             })
//             .addCase(allReview.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload;
//                 state.message = action.payload.message;

//             })
//     }
// });

// export default reviewSlice.reducers;


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/api";

const initialState = {
    loading: false,
    error: null,
    success: false,
    message: null,
    review: null,
    reviews: [], // ✅ FIXED
    rating: 0,
    avgRating: 0
};

// ADD REVIEW
export const addReview = createAsyncThunk(
    "reviews/add",
    async (reviewData, thunkAPI) => {
        try {
            const token = localStorage.getItem("token");

            const response = await axios.post(
                `${API_URL}/reviews/add`,
                reviewData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            return response.data;

        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

// // SINGLE REVIEW
// export const singleReview = createAsyncThunk(
//     "reviews/get",
//     async (reviewId, thunkAPI) => {
//         try {
//             const token = localStorage.getItem("token");

//             const response = await axios.get(
//                 `${API_URL}/reviews/${reviewId}`,
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`
//                     }
//                 }
//             );

//             return response.data;

//         } catch (error) {
//             return thunkAPI.rejectWithValue(error.response?.data);
//         }
//     }
// );

// EDIT
export const editReview = createAsyncThunk(
    "reviews/edit",
    async ({ reviewId, reviewData }, thunkAPI) => {
        try {
            const token = localStorage.getItem("token");

            const response = await axios.put(
                `${API_URL}/reviews/edit/${reviewId}`,
                reviewData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            return response.data;

        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

// DELETE
export const deleteReview = createAsyncThunk(
    "reviews/delete",
    async (reviewId, thunkAPI) => {
        try {
            const token = localStorage.getItem("token");

            const response = await axios.delete(
                `${API_URL}/reviews/delete/${reviewId}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            return { id: reviewId, ...response.data };

        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

// ALL REVIEWS
export const allReview = createAsyncThunk(
    "reviews/all",
    async (hostelId, thunkAPI) => {
        try {
            const response = await axios.get(
                `${API_URL}/reviews/all/${hostelId}`
            );

            return response.data;

        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const reviewSlice = createSlice({
    name: "review",
    initialState,
    reducers: {},

    extraReducers: (builder) => {

        builder

            // ADD
            .addCase(addReview.fulfilled, (state, action) => {
                state.loading = false;
                state.reviews = [action.payload.data, ...state.reviews];
                state.message = action.payload.message;
            })

            // // SINGLE
            // .addCase(singleReview.fulfilled, (state, action) => {
            //     state.loading = false;
            //     state.review = action.payload.data;
            // })

            // EDIT
            .addCase(editReview.fulfilled, (state, action) => {
                state.loading = false;

                state.reviews = state.reviews.map((item) =>
                    item._id === action.payload.data._id
                        ? action.payload.data
                        : item
                );
            })

            // DELETE
            .addCase(deleteReview.fulfilled, (state, action) => {
                state.loading = false;

                state.reviews = state.reviews.filter(
                    (item) => item._id !== action.payload.id
                );
            })

            // ALL
            .addCase(allReview.fulfilled, (state, action) => {
                state.loading = false;
                state.reviews = action.payload.data;
                state.avgRating = action.payload.avgRating || 0;
            });
    }
});

export default reviewSlice.reducer;