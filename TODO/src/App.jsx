import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { TodoProvider } from './context/TodoContext'
import { Bro } from './Bro'

function App() {
  const [todos, setTodos] = useState([])

  function addTodo(todo){
    if(todos.length > 0){
      setTodos((prev)=> [...prev,todo])
    }else{
      setTodos([todo])
    }
  }

  function updateTodo(id, todo){
    setTodos((prev) => {
      return prev.map((prevTodo)=>id == prevTodo.id ? {...prevTodo, todo} : prevTodo)
    })
  }

  return (
    <TodoProvider value = {{todos,addTodo,updateTodo}}>
      <Bro/>
    </TodoProvider>
  )
}

export default App
