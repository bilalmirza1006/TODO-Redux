const initialState = {
    list: []
};

const toDoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADDTODO':
            const { id, input } = action.payload;
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        input: input
                    }
                ]
            };
        case 'DELETETODO':
            const newList = state.list.filter((element) => element.id !== action.id);
            return {
                ...state,
                list: newList
            };
        case 'EDITTODO':
            const updatedList = state.list.map((editEle) =>
                editEle.id === action.id ? { ...editEle, input: action.input } : editEle
            );
            return {
                ...state,
                list: updatedList
            };
        default:
            return state;
    }
};

export default toDoReducer;
