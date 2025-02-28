import React from "react";
import Calc, { add, mul, sub, div } from "./Calc";


export default function AppCalc() {
    return (
        <ul>
            <Calc/>
            <li> addition of 5 + 5 is = {add(5, 5)}</li>
            <li> substraction of 5 - 5 is = {sub(5, 5)}</li>
            <li> multiolication of 5 * 5 is = {mul(5, 5)}</li>
            <li> division of 5 / 5 is = {div(5, 5)}</li>

        </ul>
    )
}