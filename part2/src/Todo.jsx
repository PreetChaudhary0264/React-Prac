import React from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from './slices/todoSlice'

const Todo = () => {
    const[todo,setTodo]=React.useState('')
    const dispatch = useDispatch()

    function handleSubmit(){
        dispatch(addTodo(todo));
        setTodo('')
    }

  return (
    <div>
      <input
      type='text'
      placeholder='Enter TODO'
      value={todo}
      onChange={(e)=>setTodo(e.target.value)}
      />
      <button onClick={handleSubmit} className='p-1 bg-black text-white rounded-2xl'>Add TODO</button>
    </div>
  )
}

export default Todo
