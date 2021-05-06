import React, {useState} from 'react';

import NewClaimForm from '../NewClaimForm/NewClaimForm';
import Card from '../Card';
import style from './Buttons.module.scss';

const Buttons = (props) => {

    const [newClaimForm, setNewClaimForm] = useState(false); 
    const [previousClaims, setPreviousClaims] = useState(false);
    const [claims, setClaims] = useState([]); 

    const showNewClaimForm = (e) => {
        e.preventDefault();
        setNewClaimForm(true); 
        setPreviousClaims(false);
    };

    const showPreviousClaims = (e) => {
        e.preventDefault();
        setNewClaimForm(false);
        setPreviousClaims(true); 
        getPreviousClaims(); 
    };

    const getPreviousClaims = () => {
        fetch("https://shweta-api-dot-shweta-312709.nw.r.appspot.com/motor")
        .then(res => res.json())
        .then(json => setClaims(json))
        .catch(err => console.log(err))
    };

    return (
        <section>
            <div className={style.buttons}>
                <button onClick={showNewClaimForm}>New Claim</button>
                <button onClick={showPreviousClaims}>Previous Claims</button>
            </div>
            <div>
            {newClaimForm ? <NewClaimForm /> : ""}
            {previousClaims ? claims.map((claim, index) => <Card claim = {claim} key={index} /> ): ""}
            </div>
        </section>
        
    )
}

export default Buttons
