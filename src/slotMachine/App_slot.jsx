import React from "react";
import SlotM from "./Slot_slot"


const App = () => {
    return (
        <>
            <h1 style={{ textAlign: "center" }}>
                💻 Welcome to <strong>Slot Machine Game</strong> 💻
            </h1>
            <br></br>

            <div className="slotMachine">
            <SlotM x='💀' y='🤦‍♂️' z='❤️' />
            <SlotM x='❤️' y='❤️' z='❤️' />
            <SlotM x='💀' y='🤦‍♂️' z='😒' />
            <SlotM x='🤣' y='😎' z='❤️' />

            </div>
            
        </>
    );
}

export default App;
