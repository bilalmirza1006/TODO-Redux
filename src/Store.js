import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./redux/reducer/Index";


const store = configureStore({ reducer: rootReducer }, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// const store = createStore(leaguesReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store;