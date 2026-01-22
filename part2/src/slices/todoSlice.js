import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    todos:[
        
    ]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo = {
                id:nanoid(),
                todo:action.payload //payload bhi ek object hai to baaki values bhi dot lgake access kr skte ho
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
           state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        }
    }
})

export const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer