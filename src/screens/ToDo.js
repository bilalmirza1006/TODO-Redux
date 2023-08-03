import React, { useState } from 'react'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addToDo, deleteToDo, editToDo } from '../store/action/Index';

const commonStyles = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 1,
    border: 1.5,
    // width: '5rem',
    height: '2rem',
};





function ToDo() {


    const [input, setInput] = useState('')
    const [enableButton, setEnableButton] = useState(false);
    const [id, setId] = useState('')
    const list = useSelector((state) => state.toDoReducer.list)
    const dispatch = useDispatch()

    return (
        <div>
            <Container maxWidth='xl'>
                <Box
                    sx={{ background: 'linear-gradient(to right bottom, #3E5151, #DECBA4)', height: "100vh" }}
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                >
                    {/* <Box> */}
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
                        // = "center"
                        // value={storeName}
                        // onChange={(e) => setStoreName(e.target.value)}
                        />
                        <Button
                            size="medium"
                            sx={{ mt: 3 }}
                            variant="contained"
                            onClick={() => {
                                if (input == "") {
                                    alert("Please Enter the Taask")
                                } else if (enableButton) {
                                    dispatch(editToDo(id, input))
                                    setInput('')
                                    setEnableButton(false)
                                } else {

                                    dispatch(addToDo(input))
                                    setInput('')
                                }
                            }}
                        >
                            {enableButton ? "Edit" : "Add "}
                            {/* Add task */}
                        </Button>
                    </Box>
                    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', borderRadius: '16px', mt: 2 }}>
                        <nav aria-label="main mailbox folders">
                            <List>
                                {list.map((ele) => {
                                    return (

                                        <ListItem disablePadding key={ele.id}>
                                            <ListItemButton sx={{ ...commonStyles, borderRadius: '12px' }} >
                                                <ListItemText primary={ele.data} />
                                                {/* <div>{ele.data}</div> */}
                                            </ListItemButton>
                                            <Button sx={{ borderRadius: '10px', margin: "0", padding: '0' }}>

                                                <EditIcon sx={{ ...commonStyles, borderRadius: '10px', width: '2.5rem', color: '' }} onClick={() => {
                                                    setEnableButton(true)
                                                    setInput(ele.data)
                                                    setId(ele.id)

                                                }} />
                                            </Button>
                                            <Button sx={{ borderRadius: '20px' }}>

                                                <DeleteIcon sx={{ ...commonStyles, borderRadius: '10px', width: '2.5rem', color: 'red' }} onClick={() => { dispatch(deleteToDo(ele.id)) }} />
                                            </Button>
                                        </ListItem>
                                    )
                                })
                                }
                            </List>
                        </nav>
                    </Box>
                    {/* </Box> */}
                </Box>
            </Container>
        </div >
    )
}

export default ToDo
/////////////////////////////////////////////////////////////////////