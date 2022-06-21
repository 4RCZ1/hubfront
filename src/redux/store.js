import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import eventsReducer from "./eventsSlice";

const rootReducer = combineReducers({
  user: userReducer,
  events: eventsReducer,
})

export const store = configureStore({
  reducer: rootReducer
});
