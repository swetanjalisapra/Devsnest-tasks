import React from "react";

const Card = ({ key, name, calorie, setter }) => {

    return (
        <div className="card" >
            <h1>{name}</h1>
            <h4>You have consumed {calorie} cals today</h4>
            <button onClick={()=>setter(key)}>Delete</button>
        </div>
    );
};

export default Card;