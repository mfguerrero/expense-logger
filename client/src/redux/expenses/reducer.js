import { createSlice, createAction } from "@reduxjs/toolkit";

const initialState = {
  expenses: {
    loading: false,
    data: [],
  },
};

const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    setExpenses(state, action) {
      state.expenses = {
        ...state.expenses,
        ...action.payload,
      };
    },
  },
});

export const loadExpenses = createAction("expenses/loadExpenses");
export default expensesSlice.reducer;
export const { setExpenses } = expensesSlice.actions;
