import { createAsyncThunk } from "@reduxjs/toolkit";
import { goitAPI } from "../../goitAPI";
import { setToken, clearToken } from "../../goitAPI";

export const register = createAsyncThunk(
  "register",
  async (newUser, thunkAPI) => {
    try {
      const res = await goitAPI.post("/users/signup", newUser);
      setToken(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk("login", async (userData, thunkAPI) => {
  try {
    const res = await goitAPI.post("/users/login", userData);
    setToken(res.data.token);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logOut = createAsyncThunk("logout", async (_, thunkAPI) => {
  try {
    await goitAPI.post("/users/logout");
    clearToken();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const currentUser = createAsyncThunk(
  "currentUser",
  async (_, thunkAPI) => {
    const savedToken = thunkAPI.getState.auth.token;
    if (savedToken === null) {
      return thunkAPI.rejectWithValue("Token is not exist");
    }
    try {
      setToken(savedToken);
      const res = await goitAPI.get("/users/current");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
