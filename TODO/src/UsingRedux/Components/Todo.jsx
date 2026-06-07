import React, { useSyncExternalStore } from 'react'

const Todo = () => {
    const todos = useSelector((state)=> state.todo.todos)
    const dispatch = useDispatch()
  return (
    <div>Todo</div>
  )
}

export default Todo