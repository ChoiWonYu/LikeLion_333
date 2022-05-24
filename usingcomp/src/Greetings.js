import {useState} from 'react';
function Greetings(){
    const [name,setName]=useState("");
    const [H_name,setH_name]=useState("");
    function handleChange(e){
        setName(e.target.value);
    }
    function handleClick(){
        setH_name(name);
    }  
    return(
        <div>       
        {H_name ? (
                   <h1>Hello {H_name}</h1>
                ):
                   ( 
                    <div>
                    <input type="text" onChange={handleChange}/>
                    <input type="submit" value="Log In" onClick={handleClick}/>
                    </div>
                    )  
        }
    </div>

    )
}

export default Greetings;