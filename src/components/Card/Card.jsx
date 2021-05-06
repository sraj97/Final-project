import React, {useState} from 'react';
import style from './Card.module.scss'; 

const Card = (props) => {
    const {
        date,
        location,
        circs,
        phReg,
        tpReg
    } = props.claim
    
    return (
        <section className={style.card}>
           <h1>Claim Date: {date} </h1>
           <p>Location: {location}</p>
           <p>Incident Circumstances: {circs} </p>
           <p>Your Registration: {phReg}</p>
           <p>Third Party Registration: {tpReg} </p>
        </section>
    )
};

export default Card;
