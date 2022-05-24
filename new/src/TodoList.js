import React from 'react';
import classNames from 'classnames';
import './App.scss';
function TodoLists({todoLists,onRemove,handleCancel}){ 
    return(
        <div>
            {todoLists.map((todo)=>(
               <div> 
                <li className={classNames('Menu','blue')}><input type="checkbox" onClick={()=>handleCancel(todo.id)} checked={todo.checked}/>
                <b
                style={{
                    textDecoration: todo.checked?'line-through':'none'
                    }}>{todo.todo}</b>
                <button onClick={()=>onRemove(todo.id)}>❌</button></li>
                </div>
            ))}
        </div>
    )
}

export default TodoLists;