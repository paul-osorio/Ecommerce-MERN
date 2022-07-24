import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import signupReducer from "./reducers/signupReducer";
import cartReducer from "./reducers/cartReducer";

export default configureStore({
  reducer: {
    user: userReducer,
    signup: signupReducer,
    cart: cartReducer,
  },
});
