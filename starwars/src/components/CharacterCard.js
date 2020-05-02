import React from "react";
import styled from 'styled-components'


const Section = styled.section`
  margin: 0 auto;
  padding: 10px;
`
const H3 = styled.h3`
font-family: 'Space Mono', monospace;
margin: 10px;
font-size: .7em;
`

const H5 = styled.h5`
font-family: 'Roboto Mono', monospace;
margin: 10px;
font-size: .5em;
`

const CharacterCard = props =>{
    return(
        <Section>
            <H3>{props.name}</H3>
            <H5>Height: {props.height}</H5>            
            <H5>Mass: {props.mass}</H5>
            <H5>Hair Color: {props.hairColor}</H5>
            <H5>Skin Color: {props.skinColor}</H5>
        </Section>
    );

};
export default CharacterCard;