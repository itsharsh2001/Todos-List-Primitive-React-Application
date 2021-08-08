import React from 'react'

export const TodoItem = ({todo, onDelete}) => {  //props ki jagah {todo} yani specific property 
    return (                           //lene se destructuring hoti hai aur specific property se hi kaam ho jata hai 
        <div>
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
        </div>
    )
}
