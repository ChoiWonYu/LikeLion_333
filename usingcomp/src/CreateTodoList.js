function CreateTodoList({handleChange,handleKeyDown}){
    
    return(
        <div>
            <input placeholder='Write a To Do and Press Enter' onChange={handleChange} onKeyDown={handleKeyDown}/>
        </div>
    )
}
export default CreateTodoList