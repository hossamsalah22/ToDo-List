import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todos",
    initialState: {
        value: [],
    },
    reducers: {
        addTodo: (state, action) => {
            state.value.push(action.payload);
        },
        deleteTodo: (state, action) => {
            state.value = state.value.filter((el) => el.title != action.payload);
        },
        changeStatus: (state, action) => {
            state.value = state.value.map((el) => {
                if (el.title == action.payload) {
                    el.status = !el.status;
                }
                return el;
            });
        },
    },
});

export const { addTodo, changeStatus, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;