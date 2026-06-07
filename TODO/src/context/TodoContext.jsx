import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos:[
        
    ],
    updateTodo:(id,todo)=>{},
    addTodo:(todo)=>{},
    deleteTodo:(id)=>{}
})
export const TodoProvider = TodoContext.Provider

export function useTodo(){
    return useContext(TodoContext)
}