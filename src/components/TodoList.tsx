import React, { Children } from 'react'

function TodoList(props:any) {
    return (
<section>
    {props.children}
</section>
    )
}

export default TodoList
