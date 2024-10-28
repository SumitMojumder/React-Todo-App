import React from 'react'
import style from './Todo.module.css'
const Todo = (props) => {
    const {title, desc} = props.todo
    const {id} = props

    const DeleteTodo = (id) => {
      props.onRemoveTodo(id)
    }
  return (
    <article className={style.todo}> 
        <h1>{title}</h1>
        <p>{desc}</p>
        <button className={style.btn} onClick={()=>
          {DeleteTodo(id)}}>
          <i className='fa fa-trash fa-2x'/>
        </button>
    </article>
  )
}

export default Todo