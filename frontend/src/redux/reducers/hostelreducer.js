import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// API url
const API_URL = "http://localhost:5000/api";


// add hostel
export const addHostel = createAsyncThunk(
    "hostels/add",
    async (hostelData, thunkAPI) => {
        try {
            const token = localStorage.getItem("token");

            const response = await axios.post(
                `${API_URL}/hostels`,
                hostelData,
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

// get all hostels
export const getAllHostel = createAsyncThunk(
    "hostels/all",
    async (_, thunkAPI) => {
        try {

            const response = await axios.get(`${API_URL}/hostels/all`);

            return response.data;

        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

// get single hostel
export const singleHostel = createAsyncThunk(
    "hostels/details",
    async (hostelId, thunkAPI) => {
        try {

            const response = await axios.get(
                `${API_URL}/hostels/${hostelId}`
            );

            return response.data;

        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

// edit hostel
export const editHostel = createAsyncThunk(
    "hostels/edit",
    async ({ hostelId, hostelData }, thunkAPI) => {
        try {
            const token = localStorage.getItem("token");

            const response = await axios.put(
                `${API_URL}/hostels/edit/${hostelId}`,
                hostelData,
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

// delete hostel
export const deleteHostel = createAsyncThunk(
    "hostels/delete",
    async (hostelId, thunkAPI) => {
        try {
            const token = localStorage.getItem("token");

            const response = await axios.delete(
                `${API_URL}/hostels/delete/${hostelId}`,
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

// search hostel
export const searchHostels = createAsyncThunk(
    "hostels/search",
    async (searchData, thunkAPI) => {
        try {
            const response = await axios.post(
                `${API_URL}/hostels/search`, searchData);
            console.log(searchData)
            console.log("search data", response.data)
            return response.data;

        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);



const initalState = {
    loading: false,
    error: null,
    success: false,
    message: null,
    hostels: [],
    searchResult: [],
    hostelDetails: null,
};


const hostelSlice = createSlice({
    name: "hostel",
    initialState: initalState,
    reducers: {},

    extraReducers: (builder) => {
        builder

            // add hostel
            .addCase(addHostel.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addHostel.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.message = action.payload.message;

                state.hostels.push(action.payload.data);
            })
            .addCase(addHostel.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })


            // get all hostels
            .addCase(getAllHostel.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllHostel.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.hostels = action.payload.data;
            })
            .addCase(getAllHostel.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })


            // single hostel
            .addCase(singleHostel.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(singleHostel.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.hostelDetails = action.payload.data;
            })
            .addCase(singleHostel.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })


            // edit hostel
            .addCase(editHostel.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(editHostel.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.message = action.payload.message;

                state.hostels = state.hostels.map((item) =>
                    item._id === action.payload.data._id
                        ? action.payload.data
                        : item
                );
            })
            .addCase(editHostel.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })


            // delete hostel
            .addCase(deleteHostel.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteHostel.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.message = action.payload.message;

                state.hostels = state.hostels.filter(
                    (item) => item._id !== action.meta.arg
                );
            })
            .addCase(deleteHostel.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // search hostel
            .addCase(searchHostels.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(searchHostels.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.message = action.payload.message;
                state.searchResult = action.payload.data;
            })
            .addCase(searchHostels.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export default hostelSlice.reducer;