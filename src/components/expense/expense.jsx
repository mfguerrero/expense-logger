import React from "react";
import numeral from "numeral";
import moment from "moment";
import { Link } from "react-router-dom";
import { useStyles } from "./expense.style";

const Expense = ({ id, description, amount, createdAt }) => {
  const classes = useStyles();
  return (
    <Link className={classes.item} to={`/edit/${id}`}>
      <div>
        <h3 className={classes.title}>{description}</h3>
        <span className={classes.subTitle}>{moment(createdAt).format("MMMM Do, YYYY")}</span>
      </div>
      <h3 className={classes.data}>{numeral(amount / 100).format("$0,0.00")}</h3>
    </Link>
  );
};

export default Expense;
