import React, { useState } from 'react'
import Todos from './Todos'
import s from "./Home.module.css"
import NewTodo from './NewTodo'
import {v4 as uuidv4} from "uuid"

const Home = () => {
    const [todo,setTodo] = useState([])

    const getTodo = (todo) =>{
        setTodo((prevTodo)=>{
            return [...prevTodo, {id : uuidv4(),todo}]
        })
    }
    const deleteTodo = (id) =>{
        
        setTodo((prevTodo)=>{
            const filtertodos = prevTodo.filter((todo) => todo.id!==id)
            return filtertodos
        })
    }

  return (
    <div className={s.container}>
        <h1  style={{color: 'white', fontFamily:'Arial', fontSize: '3rem'}}>Todo App</h1>
        <NewTodo sendTodo={getTodo}/>
        <Todos todos = {todo} onRemoveTodo={deleteTodo}/>
    </div>
  )
}

export default Home