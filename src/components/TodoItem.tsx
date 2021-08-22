import React from 'react'
import './styles/TodoItem.css'

function TodoItem(props:any) { return(
    <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>
      ᄼ
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete">
        x
      </span>
    </li>
    )
}

export default TodoItem
