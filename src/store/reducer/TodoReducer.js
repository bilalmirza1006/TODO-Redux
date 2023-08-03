const initialState = {
    list: []
};

const toDoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADDTODO':
            const { id, data } = action.payload;
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data
                    }
                ]
            };
        case 'DELETETODO':
            const newList = state.list.filter((ele) => ele.id !== action.id);
            return {
                ...state,
                list: newList
            };
        case 'EDITTODO':
            const updatedList = state.list.map((ele) =>
                ele.id === action.id ? { ...ele, data: action.data } : ele
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
