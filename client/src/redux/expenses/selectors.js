import { createSelector } from "@reduxjs/toolkit";
import { DateTime } from "luxon";

export const visibleExpenses = createSelector(
  (state) => state,
  (state) => {
    const { loading, data } = state.expenses.expenses;
    const { match, orderBy, startDate, endDate } = state.filters;

    return {
      loading,
      expenses: data
        .filter((expense) => {
          const date = DateTime.fromISO(expense.date);
          const startDateMatch = startDate ? startDate.valueOf() <= date.valueOf() : true;
          const endDateMatch = endDate ? endDate.valueOf() >= date.valueOf() : true;
          const textMatch = expense.description.toLowerCase().includes(match.toLowerCase());
          return startDateMatch && endDateMatch && textMatch;
        })
        .sort((a, b) => {
          if (orderBy === "date") {
            return DateTime.fromISO(a.date).valueOf() < DateTime.fromISO(b.date).valueOf() ? 1 : -1;
          } else {
            return a.amount < b.amount ? 1 : -1;
          }
        }),
    };
  }
);

export const summary = createSelector(visibleExpenses, ({ expenses }) => ({
  count: expenses.length,
  total: expenses.reduce((acc, expense) => expense.amount + acc, 0),
}));
