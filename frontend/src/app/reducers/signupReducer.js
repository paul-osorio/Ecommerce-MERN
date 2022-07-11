import { createSlice } from "@reduxjs/toolkit";

export const signupReducer = createSlice({
  name: "signup",
  initialState: {
    personalnfo: {},
    step: 1,
  },
  reducers: {
    setPersonalInfo: (state, action) => {
      state.personalnfo = action.payload;
    },
    setStep: (state, action) => {
      state.step = action.payload;
    },
  },
});

export const { setPersonalInfo, setStep } = signupReducer.actions;
export default signupReducer.reducer;
