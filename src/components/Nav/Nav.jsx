import React from 'react';
import style from './Nav.module.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Motor from '../Motor/Motor';
import logo from '../../assets/logo.svg';
import motor from '../../assets/motor.svg';
import contactUs from '../../assets/contact-us.svg'
import info from '../../assets/info.svg'
import van from '../../assets/van.svg'
import multicover from '../../assets/multicover.svg'
import pet from '../../assets/pet.svg'
import travel from '../../assets/travel.svg'
import home from '../../assets/home.svg'


const Nav = () => {
    return (
        <Router>
            <div>
                <nav>
                    <div className={style.topBar}>
                        <ul className = {style.navButtons}>
                            <li>
                            <a href="">
                                <img className={style.info} src={info} alt=""/>
                                ABOUT
                            </a>  
                            </li>
                            <li>
                                
                                <a href="">
                                    <img src={contactUs} alt=""/>
                                    CONTACT US
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={style.navFlex}>
                        <img className={style.logo} src={logo} alt=""/>
                        <h1>Claims</h1>
                        <div className={style.productOptions}>
                            <ul>
                                <li>
                                    <Link to="/motor">
                                        <img src={motor} alt=""/>
                                        MOTOR
                                    </Link>
                                </li>
                                <li>
                                    <Link to="">
                                        <img src={home} alt=""/>
                                        HOME 
                                    </Link>
                                </li>
                                <li>
                                    <Link to="">
                                        <img src={van} alt=""/>
                                        VAN 
                                    </Link>
                                </li>
                                <li>
                                    <Link to="">
                                        <img className={style.multicover} src={multicover} alt=""/>
                                        MULTI COVER 
                                    </Link>
                                </li>
                                <li>
                                    <Link to="">
                                        <img src={travel} alt=""/>
                                        TRAVEL 
                                    </Link>
                                </li>
                                <li>
                                    <Link to="">
                                        <img src={pet} alt=""/>
                                        PET 
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Switch>
                    <Route path="/motor">
                        <Motor />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Nav
