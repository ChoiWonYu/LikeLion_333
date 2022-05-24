import {React,useState,useRef} from 'react';
import Greetings from './Greetings';
import Clock from 'react-live-clock';
import CreateTodoList from './CreateTodoList';
import TodoLists from './TodoList';
function App() {
  const [inputs,setInputs]=useState();
  const [todoLists,setTodoList]=useState([
    {
      id:1,
      todo:'play',
      checked:false
    }
  ]);
  const nextId=useRef(2);
  const handleChange=e=>{
    setInputs(e.target.value);
  }
 const handleKeyDown=e=>{
  if(e.key==='Enter')
  {
    handleCreate();
    e.target.value='';
  }
 }
  const handleCreate=()=>{
    const todoList={
      id:nextId.current,
      todo:inputs,
      checked:false
    }
    setTodoList([todoList,...todoLists]);
    nextId.current+=1;
  };
  const onRemove=id=>{
    setTodoList(todoLists.filter(todo=>todo.id!==id));
  }
  const handleCancel=(id)=>{
    setTodoList(
      todoLists.map(todo=>
        todo.id===id? {...todo,checked:!(todo.checked)}:todo)
    )
  }
  return (
   <div> 
    <h2><Clock format={'HH:mm:ss'} ticking={true}/></h2>
    <Greetings handleChage={handleChange} />
    <CreateTodoList todoList={todoLists} handleChange={handleChange} handleKeyDown={handleKeyDown}/>
    <TodoLists todoLists={todoLists} onRemove={onRemove} handleCancel={handleCancel}/>
  </div>
  );
}

export default App;
