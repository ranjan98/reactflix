import React, { useContext, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import reactflix_logo from '../assets/img/reactflix_logo.png';

import { useHttpClient } from '../hooks/http-hook';
import { AuthContext } from '../context/auth-context';
import '../components/Home/Home.css';
import './SignIn.css';

const SignIn = () => {

    const auth = useContext(AuthContext);
    const { isLoading, sendRequest } = useHttpClient();
    const buttonText = isLoading ? "Loading..." : "Sign In";

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailHandler = (event) => {
        setEmail(event.target.value);
    }
    const passwordHandler = (event) => {
        setPassword(event.target.value);
    }

    const authSubmitHandler = async event => {
        event.preventDefault();
        try {
            const responseData = await sendRequest(
                'http://localhost:5000/api/users/login',
                'POST',
                JSON.stringify({
                    email: email,
                    password: password
                }),
                {
                    'Content-Type': 'application/json'
                }
            );
            auth.login(responseData.userId, responseData.token);
        } catch (err) { }
    };
    if (auth.isLoggedIn) {
        return <Redirect to="/welcome" />;
    }
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
                <form onSubmit={authSubmitHandler}>
                    <div className="signin__form_container">
                        <input id="email" type="text"
                            className="input__email_or_phone"
                            placeholder="Email or phone number"
                            value={email} onChange={emailHandler}
                        />
                        <div className="input__error"></div>
                        <input type="password"
                            className="input__password"
                            placeholder="Password"
                            value={password} onChange={passwordHandler}
                        />
                        <div className="input__error"></div>
                        <button type="submit" className="form__submit_button">{buttonText}</button>
                    </div>
                    <div className="signup__text">
                        New to Reactflix? <Link to="/" className="signup__link">Sign up now</Link>.
                    </div>
                </form>
            </div>
            <div className="emptybox__signin"></div>
            <Footer />
        </div>
    );
}

export default SignIn;