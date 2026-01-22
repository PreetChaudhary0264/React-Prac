import React, { useEffect, useState } from 'react'
import { useTodo } from '../context/TodoContext';

const Todo = () => {
    const[todo,setTodo] = useState("")
    const {todos,addTodo,updateTodo} = useTodo();
    const[editId,setEditId] = useState(null);
    const[editText,setEditText] = useState("")

    function handleClick(e){
        e.preventDefault()
        addTodo({id:Date.now(),todo,completed:false});
        setTodo("")
    }

    function handleSave(id) {
    updateTodo(id, editText)
    setEditId(null)
    setEditText("")
  }

  return (
    <>
      <input
      type='text'
      value={todo}
      onChange={(e)=>setTodo(e.target.value)}
      placeholder='Enter Todo'
      />
      <button onClick={handleClick}>
        Add
      </button>

      <div>

        {todos.map((t)=>{
            if(editId === t.id){
                return (
                   <div key={t.id}>
                      <input
                      type='text'
                      value={editText}
                      onChange={(e)=> setEditText(e.target.value)}
                      />

                      <button className='p-1 bg-black text-white rounded-3xl' onClick={()=>handleSave(t.id)}>
                        save
                      </button>
                   </div>
                )
            }else{
                return (
            <div key={t.id}>
                <span>{t.todo}  <button onClick={()=>{
                    setEditId(t.id);
                    setEditText(t.todo)
                }} className='p-1 bg-black text-white rounded-3xl'>Update</button> </span>
            </div>
           )
            }
        })}          
        
      </div>
    </>
  )
}

export default Todo
