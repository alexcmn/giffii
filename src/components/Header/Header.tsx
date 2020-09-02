import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo/logo.png';
import { ReactComponent as UserIcon } from '../../assets/images/icons/user.svg';
import { ReactComponent as Bell } from '../../assets/images/icons/bell.svg';
import { useLocation } from 'react-router-dom';

import BBQ from '../../assets/images/icons/permits/bbq.png';
import Fire from '../../assets/images/icons/permits/fire.png';
import Scaffolding from '../../assets/images/icons/permits/scaffolding.png';

export interface HeaderProps {

}

const Header: React.FC<HeaderProps> = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [notfOpen, setNotfOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const toggleNotfDesk = () => setNotfOpen(!notfOpen)

    const NavActive = () => {
        let location = useLocation();
        return location.pathname
    }

    return (
        <>
            <nav className="navbar">
                <Link to="/" className="logo">
                    <img src={Logo} alt=""/>
                </Link>
                <ul className={`${isOpen ? 'open' : ''}`}>
                    <li className={NavActive() === '/about' ? "active" : ''}>
                        <Link to="/about">About</Link>
                    </li>
                    <li className={NavActive() === '/faq' ? "active" : ''}>
                        <Link to="/faq">FAQ</Link>
                    </li>
                    <li className={NavActive() === '/permits/application' ? "active" : ''}>
                        <Link to="/permits/application">Permits</Link>
                    </li>
                    <li className={NavActive() === '/contact' ? "active" : ''}>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className={NavActive() === '/login' ? "active" : ''}>
                        {
                            window.location.pathname === '/dashboard' ||
                                window.location.pathname === '/user_profile' ||
                                window.location.pathname === '/my_application'
                                ?
                                <div className={`notf-btn ${notfOpen ? 'open' : ''}`}>
                                    <span className="bell" onClick={toggleNotfDesk}>
                                        <Bell/>
                                    </span>
                                    <span className="alert">1</span>
                                    <div className="notf-bx">
                                        <div className="wrapp">
                                            <div className="new">
                                                <div className="label">New</div>
                                                <div className="msg">
                                                    <div className="icon">
                                                        <img src={BBQ} alt=""/>
                                                    </div>
                                                    <div className="desc">
                                                        <p>Your BBQ Permit Has Been Approved.</p>
                                                        <span>Pay Now</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="old">
                                                <div className="label">Earlier</div>
                                                <div className="msg">
                                                    <div className="icon">
                                                        <img src={Fire} alt=""/>
                                                    </div>
                                                    <div className="desc">
                                                        <p>Your Camping Permit Has Been Approved.</p>
                                                        <span>Pay Now</span>
                                                    </div>
                                                </div>
                                                <div className="msg">
                                                    <div className="icon">
                                                        <img src={Scaffolding} alt=""/>
                                                    </div>
                                                    <div className="desc">
                                                        <p>Your Scaffolding Permit Has Been Approved.</p>
                                                        <span>Pay Now</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            :
                                <Link to="/login"><UserIcon /></Link>
                        }
                    </li>
                </ul>
                <button className={`navbar-toggler ${isOpen ? 'open' : ''}`} type="button" onClick={toggle}>
                    <div className="menu-btn_burger"></div>
                </button>
            </nav>
        </>
    );
}

export default Header;