import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  isError: false,
  isSuccess: true,
  isLoading: true,
  isSuccessAuth: false,
  isErrorAuth: false,
  message: '',
  authMessage: "",
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
    addMessageHandler(state, action) {
      const payload = action.payload;
      state.isErrorAuth = payload.messageType === "error" ? true : false;
      state.isSuccessAuth = payload.messageType === "success" ? true : false;
      state.authMessage = payload.message;
    },
    removeAuthMessageHandler(state, action) {
      console.log("called remove");
      state.isErrorAuth = false;
      state.isSuccessAuth = false;
      state.authMessage = "";
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.message = '';
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
      state.user = action.payload.user;
      state.isLoading = false;
      state.isError = false;
      state.message = '';
      state.isSuccess = true;
    });
    builder.addCase(getCurrentUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = '';
    });
  },
});

export const { reset, resetError, addMessageHandler, removeAuthMessageHandler } = authSlice.actions;
export default authSlice.reducer;
