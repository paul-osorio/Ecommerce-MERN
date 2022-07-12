import { createSlice } from "@reduxjs/toolkit";

export const signupReducer = createSlice({
  name: "signup",
  initialState: {
    info: {},
    region: "",
    province: "",
    city: "",
    barangay: "",
    zipCode: "",
    street: "",
    month: "",
    day: "",
    year: "",
    gender: "",
    phoneNumber: "",
  },
  reducers: {
    setPersonalInfo: (state, action) => {
      state.info = action.payload;
    },
    setRegion: (state, action) => {
      state.region = action.payload;
    },
    setProvince: (state, action) => {
      state.province = action.payload;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setBarangay: (state, action) => {
      state.barangay = action.payload;
    },
    setZipcode: (state, action) => {
      state.zipCode = action.payload;
    },
    setStreet: (state, action) => {
      state.street = action.payload;
    },
    setMonth: (state, action) => {
      state.month = action.payload;
    },
    setDay: (state, action) => {
      state.day = action.payload;
    },
    setYear: (state, action) => {
      state.year = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    setPhonenumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
  },
});

export const {
  setPersonalInfo,
  setRegion,
  setProvince,
  setCity,
  setBarangay,
  setZipcode,
  setStreet,
  setMonth,
  setDay,
  setYear,
  setGender,
  setPhonenumber,
} = signupReducer.actions;
export default signupReducer.reducer;
