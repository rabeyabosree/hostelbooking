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

// all reviews
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