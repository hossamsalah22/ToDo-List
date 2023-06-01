import { configureStore } from "@reduxjs/toolkit";

import todosReducer from "../features/todosSlice.js";

export default configureStore({
    reducer: {
        todos: todosReducer,
    },
});