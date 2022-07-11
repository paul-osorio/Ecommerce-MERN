import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import signupReducer from "./reducers/signupReducer";

export default configureStore({
  reducer: {
    user: userReducer,
    signup: signupReducer,
  },
});
