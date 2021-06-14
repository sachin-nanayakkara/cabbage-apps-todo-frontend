import { Button, Dialog, DialogActions, DialogTitle, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import * as React from "react";

import {useDispatch} from "react-redux";
import {addTodos } from '../../actions';

interface Props {
	open: boolean;
	onClose: () => void;
}

function TodoHome(props: Props) {
	const { open, onClose } = props;
	const classes = useStyles();

	const dispatch = useDispatch();

	const [newTodoText, setNewTodoText] = React.useState("");

	const handleClose = () => {
		const today = new Date()
		const todo = 
		 {
			_id: Math.random().toString(),
			title: newTodoText,
            createDate: today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() ,
            activeStatus: false,
		 }

		dispatch(addTodos(todo));
	
		onClose();

		setNewTodoText("");
	};

	const handleChange = (event: any) => {
		setNewTodoText(event.target.value);
	};

	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogTitle>Add a new TODO</DialogTitle>
			<TextField
				id="multiline-flexible"
				multiline
				value={newTodoText}
				onChange={handleChange}
				className={classes.textField}
			/>
			<DialogActions>
				<Button color="primary" onClick={handleClose}>
					OK
				</Button>
			</DialogActions>
		</Dialog>
	);
}

const useStyles = makeStyles({
	textField: {
		width: "80%",
		margin: 20,
	},
});

export default TodoHome;