import React, {useState} from 'react';

import NewClaimForm from '../NewClaimForm/NewClaimForm';
import style from './Buttons.module.scss';

const Buttons = () => {

    const [newClaimForm, setNewClaimForm] = useState(false); 

    const showNewClaimForm = (e) => {
        e.preventDefault();
        setNewClaimForm(true); 
    };

    return (
        <section>
            <div className={style.buttons}>
                <button onClick={showNewClaimForm}>New Claim</button>
                <button>Previous Claims</button>
            </div>
            <div>
            {newClaimForm ? <NewClaimForm /> : ""}
            </div>
        </section>
        
    )
}

export default Buttons
