import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { removeTodo } from '../slices/todoSlice'

const DisplayTodo = () => {
    const todos = useSelector((state)=>state.todo.todos)
    const dispatch = useDispatch()
    

    function handleDelete(id){
        dispatch(removeTodo(id))
    }

  return (
    <div>
       {todos?.map((todo)=>{
          return (<div>
            <span>{todo.todo}</span><span><button onClick={()=> handleDelete(todo.id)} className='bg-black text-white rounded-2xl p-1'>Remove</button></span>
          </div>)
       })}
    </div>
  )
}

export default DisplayTodo
