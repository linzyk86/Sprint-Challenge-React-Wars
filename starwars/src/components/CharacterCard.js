import React from "react";

const CharacterCard = props =>{
    return(
        <div>
            <h3>{props.name}</h3>
            <h5>Height: {props.height}</h5>            
            <h5>Mass: {props.mass}</h5>
            <h5>Hair Color: {props.hairColor}</h5>
            <h5>Skin Color: {props.skinColor}</h5>
        </div>
    );
};
export default CharacterCard;