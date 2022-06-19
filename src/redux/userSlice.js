import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from "axios";

const root = 'http://localhost:3001/'
// const root = 'https://hubeventsapp.herokuapp.com/'
const baseUrl = root+"users/"

const initialState = {
  status: 'idle',
  isLoggedIn: false,
  name: null,
  points: 0,
};
export const loginAsync = createAsyncThunk(
  'user/loginAsync',
  async (name) => {
    return await axios.post(baseUrl + 'login', {name});
  }
);

export const signupAsync = createAsyncThunk(
  'user/signupAsync',
  async (name) => {
    return await axios.post(baseUrl + 'register', {name});
  }
);

export const addPointAsync = createAsyncThunk(
  'user/addPointsAsync',
  async (name) => {
    console.log(name)
    return await axios.post(baseUrl + 'addPoint', {name});
  }
);

export const deductPointsAsync = createAsyncThunk(
  'user/deductPointsAsync',
  async ({name, points}) => {
    await axios.post(baseUrl + 'deductPoints', {name, points});
    return points
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        console.log(action.payload);
        state.status = 'idle';
        state.isLoggedIn = true;
        state.name = action.payload.data.name;
        state.points = action.payload.data.points;

      })
      .addCase(loginAsync.rejected, (state) => {
        state.status = 'failed';
        state.loggedIn = false;
      })
      .addCase(signupAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signupAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.isLoggedIn = true;
      })
      .addCase(signupAsync.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(addPointAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addPointAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.points += 1;
      })
      .addCase(addPointAsync.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(deductPointsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deductPointsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.points -= action.payload;
      })
      .addCase(deductPointsAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const {logout} = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectUser = (state) => state.user;


export default userSlice.reducer;
