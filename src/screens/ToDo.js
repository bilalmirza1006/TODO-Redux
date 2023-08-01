import React, { useState } from 'react'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addtodo, deletetodo, edittodo } from '../store/action/Index';


function ToDo() {


    const [input, setInput] = useState('')
    const list = useSelector((state) => state.toDoReducer.list)
    const dispatch = useDispatch()
    return (
        <div>
            <Container fixed>
                <Box
                    sx={{ bgcolor: "#cfe8fc", height: "100vh" }}
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                >
                    <Box>
                        <Box>
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
                                sx={{ m: 2 }}
                                variant="contained"
                                onClick={() => dispatch(addtodo(input),
                                    setInput(''))}
                            >
                                Add task
                            </Button>
                        </Box>
                        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                            <nav aria-label="main mailbox folders">
                                <List>
                                    {list.map((ele) => {
                                        return (

                                            <ListItem disablePadding key={ele.id}>
                                                <ListItemButton>
                                                    <ListItemText primary={ele.data} />
                                                    {/* <div>{ele.data}</div> */}
                                                </ListItemButton>
                                                <EditIcon onClick={() => { dispatch(edittodo(ele.id)) }} />
                                                <DeleteIcon onClick={() => { dispatch(deletetodo(ele.id)) }} />
                                            </ListItem>
                                        )
                                    })
                                    }
                                </List>
                            </nav>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </div>
    )
}

export default ToDo
/////////////////////////////////////////////////////////////////////