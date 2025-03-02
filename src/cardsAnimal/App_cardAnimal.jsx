import React from "react";
import Card from "./Card"
import Sdata from "./Sdata_cardAnimal";

function App() {
    return (
        <>
        {Sdata.map((item, index) => (
            <Card key={index} 
                img={item.img}
                title={item.title}
                sname={item.sname}
                link={item.link}
            />
        ))}
        </>
    )
}

export default App;