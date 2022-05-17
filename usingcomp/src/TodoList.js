import React from 'react';

function TodoLists({todoLists,onRemove,handleCancel}){ 
    return(
        <div>
            {todoLists.map((todo)=>(
               <div> 
                <li><input type="checkbox" onClick={()=>handleCancel(todo.id)} checked={todo.checked}/>
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