import Counter from './Counter'
import Copy from './Copy'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router'
import { TodoProvider } from './context/TodoContext'
// import Login from './components/Login'
// import Profile from './components/Profile'
import Todo from './components/Todo'

function App() {
  const user = "Mai hu don"
  const [todos,setTodos] = useState([])

  function addTodo(todo){
    if(todos && todos.length > 0){
        setTodos((prev)=> [...prev,todo])
    }else{
      setTodos([todo])
    }
    console.log(todos);
    
  }
  function removeTodo(id){
     setTodos((prev)=> prev.filter((prevTodo)=> prevTodo.id !== id))
  }
  function updateTodo(id,todo){
    setTodos((prev)=> prev.map((prevTodo)=> prevTodo.id === id ? {...prevTodo,todo} : prevTodo))
  }
  function isCompeleted(id,todo){
    setTodos((prev)=> prev.map((prevTodo)=> prevTodo.id === id ? {...todo,completed:!prevTodo.completed} : prevTodo))
  }
  
  useEffect(()=>{
    const allTodos =  JSON.parse(localStorage.getItem("todos"))
    setTodos(allTodos)
  },[])

  useEffect(()=>{
     localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])


  return (
    <TodoProvider value={{todos,addTodo,removeTodo,isCompeleted,updateTodo}}>
    {/* <Counter/> */}
    {/* <Copy/>
    <Navbar/> */}
     {/* <Login/>
     <Profile/> */}
      <Todo/>
      <div>
        {/* <h1>Mai kon hu? {user}</h1> */}
        {/* {..}te hota hai evaluated expression yani final output yha hum if wagera nhi likh skte.  kyu nhi likh skte? bcoz
        at the end ye sab object me convert hota hai and object me kbhi if wagera likha hua dekha hai..main.jsx me jake reactElement me dekho.. */}
      </div>
    </TodoProvider>
  )
}

export default App
