import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  deserts: [],
  totalPrise: 0,
  totalamount: 0,
};

const desertsSlice = createSlice({
  name: "deserts",
  initialState,
  reducers: {
    addDesert: (state, { payload }) => {
      desertsSlice.caseReducers.calculateTotal(state);
    },
    removeDesert: (state, { payload }) => {
      desertsSlice.caseReducers.calculateTotal;
    },
    incrementDeserts: (state, { payload }) => {
      const item = state.deserts.find((item) => item.id == payload);
      item.amount += 1;
      desertsSlice.caseReducers.calculateTotal(state);
    },
    desertsAmount: (state, { payload }) => {
      const item = state.deserts.find((item) => item.id == payload);
      item.amount -= 1;
      desertsSlice.caseReducers.calculateTotal(state);
    },
    clearDesert: (state, { payload }) => {
      state.deserts = [];
      desertsSlice.caseReducers.calculateTotal;
    },
    calculateTotal: (state) => {
      let price = 0;
      let amount = 0;

      state.deserts.forEach((item) => {
        price += item.amount * item.price;
        amount += item.amount;
      });
    },
  },
});

export const { addDesert, clearDesert, removeDesert } = desertsSlice.actions;

export default desertsSlice.reducer;
