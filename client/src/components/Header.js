import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <nav>
        <div
            className="nav-wrapper grey darken-4 z-depth-2"
            style={{
                borderBottom: '3px solid #00bfa5  ',
            }}
        >
            <Link to={'/'} className="brand-logo">
                <img
                    src={require('./images/cakap_sihat_logo.png')}
                    alt="logo"
                    style={{
                        width: 185,
                        padding: 5,
                    }}
                />
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                    <Link to={'/about'}>About</Link>
                </li>
                <li>
                    <Link to={'/capabilities'}>Capabilities</Link>
                </li>
            </ul>
        </div>
    </nav>
);

export default Header;
