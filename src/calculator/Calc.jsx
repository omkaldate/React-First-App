import React from "react";

function add(a ,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function mul(a,b){
    return a*b;
}

function div(a,b){
    return a/b.toFixed();
}

export default function Calc() {
    return (
        <>hi this is Calc Component</>
    )
}

export{add,sub,mul,div};