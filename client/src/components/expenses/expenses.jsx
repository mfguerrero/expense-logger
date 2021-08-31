import React from "react";
import { useStyles } from "./expenses.style";
import Container from "../layout/container";
import Expense from "../expense/expense";

const Expenses = ({ list }) => {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <div className={classes.list}>
          <div className={classes.header}>
            <div>Expense</div>
            <div>Amount</div>
          </div>
          <div className={classes.body}>
            {list.length === 0 ? (
              <div className={classes.noitems}>
                <span>No expenses</span>
              </div>
            ) : (
              list.map((expense) => {
                return <Expense key={expense.id} {...expense} />;
              })
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Expenses;
