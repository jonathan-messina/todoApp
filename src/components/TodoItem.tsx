import React from 'react'

function TodoItem(props:string) {
    return (
        <li>
        <span>c</span>
        <p>{props.text}</p>
        <span>X</span>
    </li>
    )
}

export default TodoItem
