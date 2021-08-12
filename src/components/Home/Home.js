import React from 'react';
import { Link } from 'react-router-dom';

import reactflix_logo from '../../assets/img/reactflix_logo.png';
import Footer from '../Footer/Footer';

import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <div className="bg"></div>
            <header className="home__header">
                <img className="header__logo" src={reactflix_logo} alt="ReactFlix Logo" />
                <Link className="signin__link btn__signin" to="/signin"><buton name="signin">Sign In</buton></Link>
            </header>
            <div class="text__container">
                <h1 className="text__large">
                    Unlimited movies, TV shows and more.
                </h1>
                <h2 className="text__medium">
                    Watch anywhere. Cancel anytime.
                </h2>

                <h3 className="text__small">
                    Ready to watch? Enter your email to create or restart your membership.
                </h3>
                <div class="form__group">
                    <input type="text" name="email" placeholder="Email address" class="input__email" />
                    <button type="submit" name="signup" className="btn__signup">
                        Get Started {">"}
                    </button>
                </div>
                <div className="emptybox"></div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;