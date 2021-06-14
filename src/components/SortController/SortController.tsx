import { Button, Typography, ButtonGroup } from "@material-ui/core";

import * as React from "react";

import { useDispatch } from "react-redux";
import { sortTodosAscending, sortTodoDesending } from "../../actions";

function SortController() {
  const dispatch = useDispatch();

  const sortAccending = () => {
    dispatch(sortTodosAscending());
  };

  const sortDesending = () => {
    dispatch(sortTodoDesending());
  };

  return (
    <Typography variant="h4" gutterBottom>
      <ButtonGroup disableElevation variant="contained" color="primary">
        <Button variant="contained" onClick={sortAccending} style={{marginRight: 10}}>Aesending By Date</Button> 
        <Button variant="contained" onClick={sortDesending}>Descending By Date</Button>
      </ButtonGroup>
    </Typography>
  );
}

export default SortController;
