import React from "react";
import { useHistory } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";

import SaveIcon from "@material-ui/icons/Save";
import BackIcon from "@material-ui/icons/ArrowBack";
import RemoveIcon from "@material-ui/icons/DeleteOutline";
import { useStyles } from "./expense-form.style";

const ExpenseForm = ({ id }) => {
  const classes = useStyles();
  const history = useHistory();

  const backHandler = () => {
    history.push("/dashboard");
  };

  return (
    <form className={classes.form}>
      <TextField placeholder="Description" autoFocus className={classes.textField} variant="outlined" />
      <TextField type="text" placeholder="Amount" className={classes.textField} variant="outlined" />
      <TextField
        id="date"
        variant="outlined"
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        multiline
        placeholder="Add a note for your expense (optional)"
        className={classes.textArea}
        variant="outlined"
      />
      <div className={classes.formActions}>
        <Button startIcon={<BackIcon />} onClick={backHandler}>
          Go Back
        </Button>
        <div>
          {id && (
            <Button variant="contained" disableElevation startIcon={<RemoveIcon />} style={{ marginRight: "1rem" }}>
              Remove
            </Button>
          )}
          <Button variant="contained" color="primary" disableElevation startIcon={<SaveIcon />}>
            Save
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
