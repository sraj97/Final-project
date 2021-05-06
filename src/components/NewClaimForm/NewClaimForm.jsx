import React, {useState} from 'react';
import style from './NewClaimForm.module.scss';
import "react-datepicker/dist/react-datepicker.css";

const NewClaimForm = (props) => {

    const [form, setForm] = useState({
        title : "",
        fName : "",
        lName : "",
        date : "", 
        phNumber: "",
        email: "", 
        phReg : "",
        make : "",
        model : "", 
        location : "", 
        circs : "", 
        phDamage : "",
        tpFirstName : "",
        tpLastName : "", 
        tpNumber : "",
        tpReg : "", 
        tpMake : "",
        tpModel : "",
        tpDamage : ""
    }); 

    const createNewClaim = (event) => {
        event.preventDefault();

        fetch("https://shweta-api-dot-shweta-312709.nw.r.appspot.com/motor", {
            method: "POST",
            headers : {
                "Content-Type" : "application/json",
                "accept": "application/json"
            }, 
            body:JSON.stringify(form),
        })
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.log(err));
    };

    return (
        <section>
            <h1>Car Insurance Claim</h1>
            <form onSubmit ={(e) => createNewClaim(e)}>
                <label htmlFor="date">
                    Date of incident:
                    <input type="date" name="date" id="date" onInput = {(e) => setForm({...form, date : e.target.value})} required/>
                </label>
                <label htmlFor="title-input">
                    Title: 
                    <input type="text" id="title" name="title" onInput = {(e) => setForm({...form, title : e.target.value})}></input>
                </label>
                <label htmlFor="fname">
                    First Name: 
                    <input type="text" id="fname" name="fname" onInput = {(e) => setForm({...form,fName : e.target.value})}></input>
                </label>
                <label htmlFor="lname">
                    Last Name: 
                    <input type="text" id="lname" name="lname" onInput = {(e) => setForm({...form,lName : e.target.value})}></input>
                </label>
                <label htmlFor="contactNumber">
                    Contact Number: 
                    <input type="number" id="contactNumber" name="contactNumber" onInput = {(e) => setForm({...form,phNumber : e.target.value})}></input>
                </label>
                <label htmlFor="email">
                    Email Address: 
                    <input type="email" id="email" name="email" onInput = {(e) => setForm({...form,email : e.target.value})}></input>
                </label>
                <label htmlFor="phVehicleReg">
                    Your Vehicle Registration: 
                    <input type="text" id="phVehicleReg" name="phVehicleReg" onInput = {(e) => setForm({...form,phReg : e.target.value})}></input>
                </label>
                <label htmlFor="phMake">
                    Your Vehicle Make: 
                    <input type="text" id="make" name="make" onInput = {(e) => setForm({...form,make : e.target.value})}></input>
                </label>
                <label htmlFor="phModle">
                    Your Vehicle Model: 
                    <input type="text" id="model" name="model" onInput = {(e) => setForm({...form,model : e.target.value})}></input>
                </label>
                <label htmlFor="location">
                    Incident Location: 
                    <input type="text" id="location" name="location" onInput = {(e) => setForm({...form,location : e.target.value})}></input>
                </label>
                <label htmlFor="circs">
                    Incident Circumstances: 
                    <input type="text" id="circs" name="circs" onInput = {(e) => setForm({...form,circs : e.target.value})}></input>
                </label>
                <label htmlFor="phDamage">
                     Damage to your vehicle: 
                    <input type="text" id="phDamage" name="phDamage" onInput = {(e) => setForm({...form,phDamage : e.target.value})}></input>
                </label>
                <label htmlFor="tpFirstName">
                    Third Party First Name:  
                    <input type="text" id="tpFirstName" name="tpFirstName" onInput = {(e) => setForm({...form,tpFirstName : e.target.value})}></input>
                </label>
                <label htmlFor="tpLastName">
                    Third Party Last Name: 
                    <input type="text" id="tpLastName" name="tpLastName" onInput = {(e) => setForm({...form,tpLastName : e.target.value})}></input>
                </label>
                <label htmlFor="tpContactNumber">
                    Third Party Contact Number: 
                    <input type="number" id="tpNumber" name="tpNumber" onInput = {(e) => setForm({...form,tpNumber : e.target.value})}></input>
                   
                </label>
                <label htmlFor="tpVehicleReg">
                    Registration for third party vehicle:  
                    <input type="text" id="tpVehicleReg" name="tpVehicleReg" onInput = {(e) => setForm({...form,tpReg : e.target.value})}></input>
                </label>
                <label htmlFor="tpMake">
                    Make of third party vehicle:  
                    <input type="text" id="tpMake" name="tpMake" onInput = {(e) => setForm({...form,tpMake : e.target.value})}></input>
                </label>
                <label htmlFor="tpModel">
                    Model of third party vehicle:  
                    <input type="text" id="tpModel" name="tpModel" onInput = {(e) => setForm({...form,tpModel : e.target.value})}></input>
                </label>
                <label htmlFor="tpDamage">
                    Third Party Damage: 
                    <input type="text" id="tpDamage" name="tpDamage" onInput = {(e) => setForm({...form,tpDamage : e.target.value})}></input>
                </label>
                <input type="submit" value="Submit"/>
                
            </form>
        </section>
    )
};

export default NewClaimForm;
