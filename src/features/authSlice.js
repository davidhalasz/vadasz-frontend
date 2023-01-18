import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    try {
      const response = await axios.post(
        process.env.REACT_APP_BACKEND_URL + "/user/belepes",
        {
          email: user.email,
          password: user.password,
        }
      );
      return response.data;
    } catch (error) {
      if (error.response) {
        const message = error.response.data.msg;
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  "user/getcurrentuser",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        process.env.REACT_APP_BACKEND_URL + "/user/currentuser"
      );
      return response.data;
    } catch (error) {
      if (error.message) {
        reset();
        const message = error.response.data.msg;
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

export const logout = createAsyncThunk("user/logout", async (_, thunkAPI) => {
  try {
    axios.delete(process.env.REACT_APP_BACKEND_URL + "/user/logout");
    reset();
  } catch (error) {
    if (error.message) {
      const message = error.response.data.msg;
      return thunkAPI.rejectWithValue(message);
    }
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => initialState,
    resetError(state) {
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.message = '';
      state.user = action.payload.user;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    // Get User Login
    builder.addCase(getCurrentUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCurrentUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.message = '';
      state.user = action.payload.user;
    });
    builder.addCase(getCurrentUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.message = '';
    });
  },
});

export const { reset, resetError } = authSlice.actions;
export default authSlice.reducer;
