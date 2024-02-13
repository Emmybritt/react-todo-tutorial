/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import CreateTodoModal from "../components/AddTodoModal";

const Home: React.FC = () => {
	const [open, setOpen] = React.useState(false);
	const [title, setTitle] = React.useState("");
	const [desc, setDesc] = React.useState("");
	const [todos, setTodo] = React.useState<{ title: string; desc: string }[]>([]);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const addNewTodo = () => {
		const data = [...todos];
		data.push({ title: title, desc: desc });
		setTodo(data);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div className="flex items-center mt-[5rem] justify-center">
			<div>
				<div>
					{todos.map((todo) => (
						<div>
							<p>{todo.title}</p>
							<p>{todo.desc}</p>
						</div>
					))}
				</div>
				<CreateTodoModal
					open={open}
					handleClickOpen={handleClickOpen}
					handleClose={handleClose}
					setDesc={setDesc}
					setTitle={setTitle}
					desc={desc}
					title={title}
					addTodo={addNewTodo}
				/>
			</div>
		</div>
	);
};

export default Home;

// Functional Component
// Class Component
