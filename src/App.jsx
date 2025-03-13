import React, { useState } from "react";
import AcUnitIcon from '@mui/icons-material/AcUnit';

const App = () => {

    const [fullName, setFullName] = useState({
        fname: "",
        lname: ""
    });

    const inputEvent = (e) => {
        const {name, value} = e.target;

        setFullName((ele) => {
            return {
                ...fullName,
                [name]: value
            }

        })
    };

    const clicked = (e) => {
        e.preventDefault();
        alert("form submitted");

    }

    return (
        <>
            <form onSubmit={clicked}>
                <div>
                    <h2> Hello {fullName.fname} {fullName.lname}</h2>
                    <input type="text" placeholder="Enter Yout name" onChange={inputEvent} name="fname" value={fullName.fname} />
                    <input type="text" placeholder="Enter Yout last name" onChange={inputEvent} name="lname" value={fullName.lname} />
                    <button placeholder="click me" type="submit"></button>
                </div>
                <AcUnitIcon />
            </form>

        </>
    )
}

export default App;