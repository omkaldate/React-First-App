import React from "react";
import { Link, NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <>
            <NavLink to="/About">About Us</NavLink>
            <NavLink to="/Component">Component Us</NavLink>
        </>
    );
};

export default Menu;
 