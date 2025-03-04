import React, { useState } from "react";


const App = () => {

    const [fullName, setFullName] = useState({
        fname: "",
        lname: ""
    });

    const inputEvent = (e) => {

        setFullName((ele) => {
            if (e.target.name == "fName") {
                return {
                    fname: (e.target.value),
                    lname: (ele.lname)
                }

            }
            if (e.target.name == "lName") {
                return {
                    fname: (ele.fname),
                    lname: (e.target.value)
                }
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
                    <input type="text" placeholder="Enter Yout name" onChange={inputEvent} name="fName" value={fullName.fname} />
                    <input type="text" placeholder="Enter Yout last name" onChange={inputEvent} name="lName" value={fullName.lname} />
                    <button placeholder="click me" type="submit"></button>
                </div>
            </form>

        </>
    )
}

export default App;