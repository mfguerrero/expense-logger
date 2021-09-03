import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useStyles } from "./expenses.style";
import Container from "../layout/container";
import Expense from "../expense/expense";
import Spinner from "../spinner/spinner";
import { visibleExpenses } from "../../redux/expenses/selectors";
import { loadExpenses } from "../../redux/expenses/reducer";

const Expenses = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { loading, expenses } = useSelector(visibleExpenses);

  useEffect(() => {
    dispatch(loadExpenses());
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Container>
        <div className={classes.list}>
          <div className={classes.header}>
            <div>Expense</div>
            <div>Amount</div>
          </div>
          <div className={classes.body}>
            {loading && <Spinner />}
            {!loading &&
              (expenses.length === 0 ? (
                <div className={classes.noitems}>
                  <span>No Expenses</span>
                </div>
              ) : (
                expenses.map((expense) => {
                  return <Expense key={expense.id} {...expense} />;
                })
              ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Expenses;
