import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    email: "",
    phone: "",
    nationality: "",
    message: "",
  },

  reducers: {
    addName: (state, action) => {
      state.name = action.payload;
    },
    addEmail: (state, action) => {
      state.email = action.payload;
    },
    addPhone: (state, action) => {
      state.phone = action.payload;
    },
    addNationality: (state, action) => {
      state.nationality = action.payload;
    },
    addMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const { addName, addEmail, addPhone, addNationality, addMessage } =
  formSlice.actions;
export default formSlice.reducer;
