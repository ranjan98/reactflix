import React, { useEffect, useState } from 'react';

import reactflix_logo from '../assets/img/reactflix_logo.png';
import avatar from '../assets/img/avatar.png';
import './Nav.css';

const Nav = () => {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            }
            else {
                handleShow(false);
            }
        });
        return () => {
            return window.removeEventListener("scroll", () => {
                if (window.scrollY > 100) {
                    handleShow(true);
                }
                else {
                    handleShow(false);
                }
            });
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img className="nav__logo" src={reactflix_logo} alt="MovieFlix Logo" />
            <img className="nav__avatar" src={avatar} alt="Something Else" />
        </div>
    );
}

export default Nav;