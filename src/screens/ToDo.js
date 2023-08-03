import React, { useState } from 'react'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
import { Button, List, ListItemButton, ListItemText, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addToDo, deleteToDo, editToDo } from '../redux/action/Index';
import TodoListItem from '../components/TodoListItem';

const commonStyles = {
	bgcolor: 'background.paper',
	borderColor: 'text.primary',
	m: 1,
	border: 1.5,
	// width: '5rem',
	height: '2rem',
};





function ToDo() {
	const [input, setInput] = useState('');
	const [enableButton, setEnableButton] = useState(false);
	const [id, setId] = useState('')
	const list = useSelector((state) => state.toDoReducer.list)
	const dispatch = useDispatch()


	const editHandler = () => {

	}

	return (
		<Container maxWidth='xl'>
			<Box
				sx={{ background: 'linear-gradient(to right bottom, #3E5151, #DECBA4)', height: "100vh" }}
				display={"flex"}
				flexDirection={"column"}
				alignItems={"center"}
			>
				<Box sx={{ mt: 2 }}>
					<Typography variant='h3'>TO DO APP</Typography>
				</Box>
				<Box sx={{ width: '80%', maxWidth: 360, bgcolor: 'background.paper', borderRadius: '16px', mt: 2 }}>
					<TextField
						sx={{ m: 2 }}
						id="outlined-basic"
						label="Write"
						variant="outlined"
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
					<Button
						size="medium"
						sx={{ mt: 3 }}
						variant="contained"
						onClick={() => {
							if (input.trim() == "") {
								alert("Please Enter the Taask")
							} else if (enableButton) {
								dispatch(editToDo(id, input))
								setInput('')
								setEnableButton(false)
							} else {

								dispatch(addToDo(input.trim()))
								setInput('')
							}
						}}>
						{enableButton ? "Edit" : "Add "}
						{/* Add task */}
					</Button>
				</Box>
				<Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', borderRadius: '16px', mt: 2 }}>
					<nav aria-label="main mailbox folders">
						<List>
							{list?.map((item) => {
								return (
									<TodoListItem
										itemKey={item.id}
										item={item}
										handleCallback={(listItem) => {
											setEnableButton(true);
											setInput(listItem.input);
											setId(listItem.id);
										}}
										deleteCallback={(item) => dispatch(deleteToDo(item.id))}
									/>
								)
							})
							}
						</List>
					</nav>
				</Box>
				{/* </Box> */}
			</Box>
		</Container>
	)
}

export default ToDo
/////////////////////////////////////////////////////////////////////