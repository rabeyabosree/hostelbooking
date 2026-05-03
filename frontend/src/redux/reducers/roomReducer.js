// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";


// // API url
// const API_URL = ""

// // add room at hostel
// const addRoom = createAsyncThunk(
//     "rooms/add", async ({ roomData, hostelId }) => {
//         try {
//             const token = localStorage.getItem("token");
//             const response = await axios.post(`${API_URL}/rooms/${hostelId}`, roomData,
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
// // get single room
// const singleRoom = createAsyncThunk(
//     "rooms/details", async ({ roomId }) => {
//         try {
//             const response = await axios.get(`${API_URL}/rooms/${roomId}`);
//             return response.data;

//         } catch (error) {

//         }
//     }
// )
// // edit room
// const editRoom = createAsyncThunk(
//     "rooms/edit", async ({ hostelId, roomId, roomData }) => {
//         try {
//             const token = localStorage.getItem("token");
//             const response = await axios.put(`${API_URL}/rooms/${hostelId}/${roomId}`, roomData,
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
// // delete room
// const deleteRoom = createAsyncThunk(
//     "rooms/delete", async ({ hostelId, roomId }) => {
//         try {
//             const token = localStorage.getItem("token");
//             const response = await axios.post(`${API_URL}/rooms/${hostelId}/${roomId}`,
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
//     rooms: [],
//     roomDetails: null,

// }


// const roomSlice = createSlice({
//     name: "room",
//     initalState,
//     reducers,
//     extraReducer: (builder) => {
//         builder
//             .addCase(addRoom.pending, (state) => {
//                 state.loading = true;
//                 state.error = action.payload;
//                 success = false;

//             })
//             .addCase(addRoom.fullfilled, (state, action) => {
//                 state.loading = false;
//                 state.message = action.payload.message;
//                 state.success = true;
//                 state.rooms = state.rooms.push(action.payload)

//             })
//             .addCase(addRoom.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload;
//                 state.message = action.payload.message;

//             })
//             // single room
//             .addCase(singleRoom.pending, (state) => {
//                 state.loading = true;
//                 state.error = action.payload;
//                 success = false;

//             })
//             .addCase(singleRoom.fullfilled, (state, action) => {
//                 state.loading = false;
//                 state.message = action.payload.message;
//                 state.success = true;
//                 state.room = action.payload;

//             })
//             .addCase(singleRoom.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload;
//                 state.message = action.payload.message;

//             })
//             // edit room
//             .addCase(editRoom.pending, (state) => {
//                 state.loading = true;
//                 state.error = action.payload;
//                 success = false;

//             })
//             .addCase(editRoom.fullfilled, (state, action) => {
//                 state.loading = false;
//                 state.message = action.payload.message;
//                 state.success = true;
//                 state.rooms = state.rooms.map((room) => room._id === action.payload._id ? room : action.payload)

//             })
//             .addCase(editRoom.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload;
//                 state.message = action.payload.message;

//             })
//             // delete room
//             .addCase(deleteRoom.pending, (state) => {
//                 state.loading = true;
//                 state.error = action.payload;
//                 success = false;

//             })
//             .addCase(deleteRoom.fullfilled, (state, action) => {
//                 state.loading = false;
//                 state.message = action.payload.message;
//                 state.success = true;
//                 state.rooms = state.rooms.filter((item) => item._id !== action.payload._id)

//             })
//             .addCase(deleteRoom.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload;
//                 state.message = action.payload.message;

//             })
//     }
// });

// export default roomSlice.reducers;


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// API url
const API_URL = "http://localhost:5000/api";


// add room at hostel
export const addRoom = createAsyncThunk(
    "rooms/add",
    async ({ roomData, hostelId }, thunkAPI) => {
        try {
            const token = localStorage.getItem("token");

            const response = await axios.post(
                `${API_URL}/rooms/${hostelId}`,
                roomData,
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


// get single room
export const singleRoom = createAsyncThunk(
    "rooms/details",
    async (roomId, thunkAPI) => {
        try {

            const response = await axios.get(
                `${API_URL}/rooms/single/${roomId}`
            );

            return response.data;

        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);


// edit room
export const editRoom = createAsyncThunk(
    "rooms/edit",
    async ({ roomId, roomData }, thunkAPI) => {
        try {
            const token = localStorage.getItem("token");

            const response = await axios.put(
                `${API_URL}/rooms/${roomId}`,
                roomData,
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


// delete room
export const deleteRoom = createAsyncThunk(
    "rooms/delete",
    async (roomId, thunkAPI) => {
        try {
            const token = localStorage.getItem("token");

            const response = await axios.delete(
                `${API_URL}/rooms/${roomId}`,
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



const initalState = {
    loading: false,
    error: null,
    success: false,
    message: null,
    rooms: [],
    roomDetails: null
};


const roomSlice = createSlice({
    name: "room",
    initialState: initalState,
    reducers: {},

    extraReducers: (builder) => {
        builder

            // add room
            .addCase(addRoom.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addRoom.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.message = action.payload.message;

                state.rooms.push(action.payload.room);
            })
            .addCase(addRoom.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })


            // single room
            .addCase(singleRoom.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(singleRoom.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.roomDetails = action.payload.data;
            })
            .addCase(singleRoom.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })


            // edit room
            .addCase(editRoom.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(editRoom.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.message = action.payload.message;

                state.rooms = state.rooms.map((room) =>
                    room._id === action.payload.data._id
                        ? action.payload.data
                        : room
                );
            })
            .addCase(editRoom.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })


            // delete room
            .addCase(deleteRoom.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteRoom.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.message = action.payload.message;

                state.rooms = state.rooms.filter(
                    (item) => item._id !== action.meta.arg
                );
            })
            .addCase(deleteRoom.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export default roomSlice.reducer;