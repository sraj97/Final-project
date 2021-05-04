import React, {useState} from 'react';
import style from './NewClaimForm.module.scss';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const NewClaimForm = (props) => {
    const [startDate, setStartDate] = useState(new Date());
    const maxDate = new Date();

    return (
        <section>
            <form onSubmit={() => ""}>
                <label htmlFor="date">
                    Date of incident:
                    <DatePicker 
                        name = "date" 
                        id="date" 
                        selected={startDate} 
                        onChange={date => setStartDate(date)} 
                        maxDate={maxDate}
                        dateFormat="MM/dd/yyyy" />
                </label>
                <label htmlFor="title-input">
                    Title: 
                    <select name="title-input" id="title-input">
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Miss">Miss</option>
                        <option value="Ms">Ms</option>
                        <option value="Dr">Dr</option>
                        <option value="Prof">Prof</option>
                        <option value="Mx">Mx</option>
                    </select>
                </label>
                <label htmlFor="fname">
                    First Name: 
                    <input type="text" id="fname" name="fname"></input>
                </label>
                <label htmlFor="lname">
                    Last Name: 
                    <input type="text" id="lname" name="lname"></input>
                </label>
                
                <label htmlFor="PH-Vehicle-Reg">
                    Your Vehicle Registration: 
                    <input type="text" id="PH-Vehicle-Reg" name="PH-Vehicle-Reg"></input>
                </label>
                <label htmlFor="Make">
                    Your Vehicle Make: 
                    <input type="text" id="Make" name="Make"></input>
                </label>
                <label htmlFor="Modle">
                    Your Vehicle Model: 
                    <input type="text" id="Model" name="Model"></input>
                </label>
                
                
            </form>
        </section>
    )
};

export default NewClaimForm;
