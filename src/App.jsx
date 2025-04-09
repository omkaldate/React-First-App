import { Route, Routes, Navigate } from "react-router-dom";
import Menu from "./Menu";
import About from "./About";
import Component from "./Component";
import Error from "./Error";

const App = () => {
    return (
        <>
            <Menu />
            <Routes>
                <Route path="/About" element={<About name="xxyyzz" />} />
                <Route path="/Component" element={<Component name="askkdfj" />} />
                <Route path="/tryToOpen" element={<Navigate to="/Component" />} />  //if tryToopen path hitten then the path change to componen and shows the Component
                <Route path="*" element={<Error />} />
            </Routes>
        </>
    );
};

export default App;
