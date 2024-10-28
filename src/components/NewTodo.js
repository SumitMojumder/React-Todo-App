import React, { useState } from 'react'
import style from './newtodo.module.css'

const NewTodo = (props) => {

    const [todo, setTodo] = useState({title:"", desc: ""})
    const {title, desc} = todo

    const submitTodo = (event) =>{
        event.preventDefault()
        props.sendTodo(todo)
        setTodo({title: "", desc: ""})
    }
    const updateTodo = (e) =>{
        const name = e.target.name
        setTodo((oldTodo)=>{
            return {...oldTodo, [name]: e.target.value}
        })
    }

  return (
    <form className={style.form} onSubmit={submitTodo}> 
        <div className={style['form-field']} >
            <label htmlFor='title'>Title: </label>
            <input  type='text' id='title' name='title' value={title} onChange={updateTodo}/>
        </div>
        <div className={style['form-field']}>
            <label htmlFor='desc'>Description: </label>
            <textarea  type='text' id='desc' name='desc' value={desc} onChange={updateTodo}/>
        </div>
        <div>
            <button>Add Todo</button>
        </div>
    </form>
  )
}

export default NewTodo