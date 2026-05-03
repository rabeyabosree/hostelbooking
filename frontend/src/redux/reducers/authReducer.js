// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";


// // API url
// const API_URL = ""

// // register user
// const userRegister = createAsyncThunk(
//     "users/register", async (userData) => {
//         try {
//             const response = await axios.post(`${API_URL}/users/register`, userData);
//             return response.data;

//         } catch (error) {

//         }
//     }
// )

// // user login
// const userLogin = createAsyncThunk(
//     "users/login", async (userData) => {
//         try {
//             const response = await axios.post(`${API_URL}/users/login`, userData);
//             return response.data;
//         } catch (error) {

//         }
//     }
// )

// // admin login
// const adminLogin = createAsyncThunk(
//     "users/admin", async (userData) => {
//         try {
//             const response = await axios.post(`${API_URL}/users/admin`, userData);
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
//     user: null,
//     token: null
// }


// const authSlice = createSlice({
//     name: "auth",
//     initalState,
//     reducers,
//     extraReducer: (builder) => {
//         builder
//             .addCase(userRegister.pending, (state) => {
//                 state.loading = true;
//                 state.error = action.payload;
//             })
//             .addCase(userRegister.fullfilled, (state, action) => {
//                 state.loading = false;
//                 state.error = null;
//                 state.user = action.payload.data;
//                 state.message = action.payload.message;
//             })
//             .addCase(userRegister.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload;
//                 state.message = action.payload.message;
//             })

//             // user login
//             .addCase(userLogin.pending, (state) => {
//                 state.loading = true;
//                 state.error = action.payload;
//             })
//             .addCase(userLogin.fullfilled, (state, action) => {
//                 state.loading = false;
//                 state.error = null;
//                 state.user = action.payload.data;
//                 state.message = action.payload.message;
//                 localStorage.setItem("token", action.payload.token)
//             })
//             .addCase(userLogin.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload;
//                 state.message = action.payload.message;
//             })

//             // admin login
//             .addCase(adminLogin.pending, (state) => {
//                 state.loading = true;
//                 state.error = action.payload;
//             })
//             .addCase(adminLogin.fullfilled, (state, action) => {
//                 state.loading = false;
//                 state.error = null;
//                 state.user = action.payload.data;
//                 state.message = action.payload.message;
//                 localStorage.setItem("token", action.payload.token)
//             })
//             .addCase(adminLogin.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload;
//                 state.message = action.payload.message;
//             })

//     }
// });

// export default authSlice.reducers;


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// API url
const API_URL = "http://localhost:5000/api"


// register user
export const userRegister = createAsyncThunk(
    "users/register",
    async (userData, thunkAPI) => {
        try {
            const response = await axios.post(
                `${API_URL}/users/register`,
                userData
            );

            return response.data;

        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
)


// user login
export const userLogin = createAsyncThunk(
    "users/login",
    async (userData, thunkAPI) => {
        try {
            const response = await axios.post(
                `${API_URL}/users/login`,
                userData
            );

            return response.data;

        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
)


// admin login
export const adminLogin = createAsyncThunk(
    "users/admin",
    async (userData, thunkAPI) => {
        try {
            const response = await axios.post(
                `${API_URL}/users/admin/login`,
                userData
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
    user: null,
    token: null
}


const authSlice = createSlice({
    name: "auth",
    initialState: initalState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.success = false;
            localStorage.removeItem("token");
        }
    },

    extraReducers: (builder) => {
        builder

            // register
            .addCase(userRegister.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(userRegister.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.data;
                state.message = action.payload.message;
                state.success = true;
            })
            .addCase(userRegister.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.message = action.payload?.message;
            })

            // user login
            .addCase(userLogin.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(userLogin.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.data;
                state.token = action.payload.token;
                state.message = action.payload.message;
                state.success = true;

                localStorage.setItem("token", action.payload.token);
                localStorage.setItem("user", JSON.stringify(action.payload.data))
            })
            .addCase(userLogin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.message = action.payload?.message;
            })

            // admin login
            .addCase(adminLogin.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(adminLogin.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.data;
                state.token = action.payload.token;
                state.message = action.payload.message;
                state.success = true;

                localStorage.setItem("token", action.payload.token);
            })
            .addCase(adminLogin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.message = action.payload?.message;
            });
    }
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;