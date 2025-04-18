import React from "react";

function Card(props){
    //console.log(props);
    return(
    <>
        <div className="cards">
            <div className="card">
                <img src={props.img} alt="myPic" className="card_image" />
                <div className="card_info">
                    <span className="card_catagery">{props.title} </span>
                    <h3 className="cardtitle">{props.sname} </h3>
                    <a href={props.link} target="_blank">
                        <button> Watch now</button>
                    </a>
                </div>
            </div>
        </div>
    </>
    )
}

export default Card;