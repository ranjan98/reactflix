import React from 'react';
import { Link } from 'react-router-dom';

import Footer from '../components/Footer/Footer';
import reactflix_logo from '../assets/img/reactflix_logo.png';

import '../components/Home/Home.css';
import './SignIn.css';

const SignIn = () => {
    return (
        <div className="home">
            <div className="bg"></div>
            <header className="home__header">
                <img className="header__logo" src={reactflix_logo} alt="ReactFlix Logo" />
            </header>
            <div className="signin__form">
                <h1 className="signin__text">
                    Sign In
                </h1>
                <div className="signin__form_container">
                    <input type="text" className="input__email_or_phone" placeholder="Email or phone number" />
                    <div className="input__error"></div>
                    <input type="password" className="input__password" placeholder="Password" />
                    <div className="input__error"></div>
                    <Link className="signin__link" to="/welcome"><button type="submit" className="form__submit_button">Sign In</button></Link>
                </div>
                <div className="signup__text">
                    New to Reactflix? <Link className="signup__link" to="/">Sign up now</Link>.
                </div>
            </div>
            <div className="emptybox__signin"></div>
            <Footer />
        </div>
    );
}

export default SignIn;