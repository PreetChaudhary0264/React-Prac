import React, { useState } from 'react'
import { useTodo } from './context/TodoContext';

export const Bro = () => {
    const [todo,setTodo] = useState("");
    const [id,setId] = useState(null)
    const [editText,setEditText] = useState("")
    const {todos,addTodo,updateTodo} = useTodo()

    function addHandler(){
        addTodo({id:Date.now(),todo:todo})
        setTodo("")
        console.log(todos)
    }

    function handleSave(id){
        updateTodo(id, editText)
        setId(null)
        setEditText("")
    }

  return (
    <>
    <div>
        <input type='text'
        value={todo}
        onChange={(e)=> setTodo(e.target.value)}
        />
        
    </div>

    <div>
        <button onClick={addHandler}>Add</button>
    </div>
    

    <div>

        {
            todos.map((t)=>{
                if(id === t.id){
                    return (
                        <div key = {t.id}>
                            <input type='text'
                            value = {editText}
                            onChange={(e)=>{setEditText(e.target.value)}}
                            />

                            <button onClick={()=> handleSave(t.id)}>
                                Save
                            </button>
                        </div>
                    )
                }else{
                    return(
                    <div key = {t.id}>
                        <span>{t.todo}
                            <button onClick={()=>{
                                setId(t.id)
                            }}>update</button>
                        </span>
                    </div>
                )
                }
            })
        }

        
    </div>
    
    </>
  )
}
