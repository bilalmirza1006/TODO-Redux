import { v4 as uuidv4 } from "uuid"
export const addToDo = (input) => {
    return {
        type: 'ADDTODO',
        payload: {
            id: uuidv4(),
            // new input().getTime().toString(),
            input: input
        }
    }
}

export const deleteToDo = (id) => {
    return {
        type: 'DELETETODO',
        id
    }
}

export const editToDo = (id, newinput) => {
    return {
        type: 'EDITTODO',
        id: id,
        input: newinput,
    }
}////////////////////////////////////////