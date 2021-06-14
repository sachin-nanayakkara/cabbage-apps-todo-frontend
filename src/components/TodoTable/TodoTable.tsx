import { Checkbox, IconButton, Paper, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/styles";
 
import React, { useEffect} from 'react';
 
import { Todo, fetchTodos, deleteTodos, updateTodos } from '../../actions';
 
import {useDispatch, useSelector} from "react-redux";
 
import {RootStore} from "../../store";
 
function TodoTable() {
	const classes = useStyles();
    const dispatch = useDispatch();
	const todoList = useSelector((state: RootStore) => state.todos);
 
 
    useEffect(() => {
		dispatch(fetchTodos())
    },[])
 
    function deleteTodo (todo: Todo) {
		console.log("something")
        dispatch(deleteTodos(todo));
	}
 
	function checkTodo (todo: Todo) {
		todo.activeStatus = todo.activeStatus ? false : true
        dispatch(updateTodos(todo));
    }
 
	return (
		<Paper className={classes.paper}>
			<Table className={classes.table}>
				<TableHead>
					<TableRow>
						<TableCell padding="default">Completed</TableCell>
						<TableCell padding="default">Text</TableCell>
						<TableCell padding="default">Delete</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{todoList.map((n: Todo) => {
						return (
							<TableRow
								key={n._id}
								hover
							>
								<TableCell padding="none">
									<Checkbox checked={n.activeStatus ? true : false} onClick={() => checkTodo(n)} />
								</TableCell>
								<TableCell padding="none">{n.title}</TableCell>
								<TableCell padding="none">
									<IconButton
										aria-label="Delete"
										color="default"
										onClick={() => deleteTodo(n)}
									>
										<DeleteIcon />
									</IconButton>
								</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</Paper>
	);
}
 
const useStyles = makeStyles({
	paper: {
		width: "100%",
		minWidth: 260,
		display: "inline-block",
	},
	table: {
		width: "100%",
	},
});
 
export default TodoTable;
