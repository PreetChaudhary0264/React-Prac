import { createSlice, nanoid } from "@reduxjs/toolkit"
const initialState = {
    todos:[

    ]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo: function(state,action){
            const todo = {
                id:nanoid(),
                todo:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: function(state,action){
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        }   
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer