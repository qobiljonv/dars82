import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  deserts: [],
  totalPrise: 0,
  totalAmount: 0,
};

const desertsSlice = createSlice({
  name: "deserts",
  initialState,
  reducers: {
    addDesert: (state, { payload }) => {
      state.deserts.push({ ...payload, amount: 1 });
      desertsSlice.caseReducers.calculateTotal(state);
    },
    removeDesert: (state, { payload }) => {
      state.deserts = state.deserts.filter((item) => item.id !== payload);
      desertsSlice.caseReducers.calculateTotal(state);
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
      desertsSlice.caseReducers.calculateTotal(state);
    },
    calculateTotal: (state) => {
      let price = 0;
      let amount = 0;

      state.deserts.forEach((item) => {
        price += item.amount * item.price;
        amount += item.amount;
      });
      state.totalAmount = amount;
      state.totalPrise = price;
    },
  },
});

export const {
  addDesert,
  clearDesert,
  removeDesert,
  desertsAmount,
  incrementDeserts,
} = desertsSlice.actions;

export default desertsSlice.reducer;
