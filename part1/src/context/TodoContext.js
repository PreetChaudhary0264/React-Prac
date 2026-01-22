import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos:[
        
    ],
    addTodo:(todo)=>{},
    removeTodo:(id)=>{},
    updateTodo:(id,todo)=>{},
    isCompeleted:(id)=>{}
});

export const TodoProvider = TodoContext.Provider

export function useTodo(){
    return useContext(TodoContext)
}