import React from "react";
import { TextField, Select, MenuItem, FormControl, InputLabel } from "@material-ui/core";
import Container from "../layout/container";

import { useStyles } from "./filters.style";

const Filters = () => {
  const classes = useStyles();

  return (
    <div>
      <Container>
        <div className={classes.group}>
          <div className={classes.groupItem}>
            <TextField placeholder="Search expenses" variant="outlined" className={classes.inputField} label="search" />
          </div>
          <div className={classes.groupItem}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="outlined-age-native-simple">order by</InputLabel>
              <Select variant="outlined" className={classes.inputField} value="date" label="order by">
                <MenuItem value="date">Date</MenuItem>
                <MenuItem value="amount">Amount</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className={classes.groupItem}>
            <TextField
              id="start-date"
              variant="outlined"
              label="from"
              type="date"
              defaultValue="2017-05-24"
              className={classes.inputField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <div className={classes.groupItem}>
            <TextField
              id="end-date"
              variant="outlined"
              label="to"
              type="date"
              defaultValue="2017-05-24"
              className={classes.inputField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Filters;
