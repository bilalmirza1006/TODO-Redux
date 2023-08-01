import { v4 as uuidv4 } from "uuid"
export const addtodo = (data) => {
    return {
        type: 'ADDTODO',
        payload: {
            id: uuidv4(),
            // new data().getTime().toString(),
            data: data
        }
    }
}

export const deletetodo = (id) => {
    return {
        type: 'DELETETODO',
        id
    }
}

export const edittodo = (id, newdata) => {
    return {
        type: 'EDITTODO',
        id: id,
        data: newdata,
    }
}////////////////////////////////////////