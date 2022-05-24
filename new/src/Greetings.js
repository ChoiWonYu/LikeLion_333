import {useState} from 'react';
function Greetings(){
    const [name,setName]=useState("");
    const [hName,setHname]=useState("");
    function handleChange(e){
        setName(e.target.value);
    }
    function handleClick(){
        setHname(name);
    }  
    return(
        <div>       
        {hName ? (
                   <h1>Hello {hName}</h1>
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