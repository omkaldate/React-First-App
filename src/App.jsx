import React from "react";
import Card from "./Card"
import Sdata from "./Sdata";

function App() {
    return (
        <>
        for(int i=0; i<Sdata.length; i++){
            <Card img= {Sdata[i].img}
                title = {Sdata[i].title}
                sname = {Sdata[i].sname}
                link = {Sdata[i].link}
            />
        }
           
        </>
    )
}

export default App;