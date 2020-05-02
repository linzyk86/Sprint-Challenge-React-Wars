// Write your Character component here
import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard"


export default function Character(){
    const [Characters, setCharacters] = useState([]);
  
    useEffect(()=>{
        axios.get("https://swapi.py4e.com/api/people/")
            .then(response=>{
                console.log(response.data.results);
            setCharacters(response.data.results);
              
            })
            .catch(response=>{
                console.log("error");
            });
    }, []);

    return(
        <div className = "name">
            <h1>{Characters.map(character =>{
                return(
                    <CharacterCard
                    name = {character.name}
                    height = {character.height}
                    mass = {character.mass}
                    hairColor = {character.hair_color}
                    skinColor = {character.skin_color}

                    />
                );
            })}
            </h1>
             
        </div>

    )


}