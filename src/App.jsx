import {React, useState} from "react";

export function App()  {

    const [name, setName] = useState("");
    
    
    function handleClick(event) {
        console.log(name)
    }

    function handleChange(event) {
        const value = event.target.value;
        setName(value)
    }

    return (
        <div>
        {name}
            <input type="text" placeholder="Name" value={name} onChange={handleChange} ></input>
            <button value="Click" onClick={handleClick} ></button>
        </div>
    )
}


