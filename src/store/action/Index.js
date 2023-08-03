import { v4 as uuidv4 } from "uuid"
export const addToDo = (data) => {
    return {
        type: 'ADDTODO',
        payload: {
            id: uuidv4(),
            // new data().getTime().toString(),
            data: data
        }
    }
}

export const deleteToDo = (id) => {
    return {
        type: 'DELETETODO',
        id
    }
}

export const editToDo = (id, newdata) => {
    return {
        type: 'EDITTODO',
        id: id,
        data: newdata,
    }
}////////////////////////////////////////