import { FormControl, InputLabel, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import * as React from "react";

const CreateTodoModal: React.FC<{
	open: boolean;
	title: string;
	desc: string;
	handleClickOpen: () => void;
	handleClose: () => void;
	setDesc: (value: string) => void;
	setTitle: (value: string) => void;
	addTodo: () => void;
}> = ({ open, handleClickOpen, handleClose, setDesc, setTitle, desc, title, addTodo }) => {
	return (
		<React.Fragment>
			<Button variant="outlined" onClick={handleClickOpen}>
				Create New Todo
			</Button>

			<Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
				<DialogTitle id="alert-dialog-title">{"Create New Todo?"}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						{/* Title */}
						<FormControl fullWidth sx={{ m: 1 }} variant="filled">
							<InputLabel htmlFor="Title">Title</InputLabel>
							<TextField value={title} id="Title" onChange={(e) => setTitle(e.target.value)} />
						</FormControl>

						{/* Description */}
						<FormControl fullWidth sx={{ m: 1 }} variant="filled">
							<InputLabel htmlFor="Description">Description</InputLabel>
							<TextField value={desc} id="Description" onChange={(e) => setDesc(e.target.value)} />
						</FormControl>
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button
						onClick={() => {
							addTodo();
							handleClose();
						}}
						autoFocus>
						Add Todo
					</Button>
				</DialogActions>
			</Dialog>
		</React.Fragment>
	);
};

export default CreateTodoModal;
