import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo/logo.png';
import { ReactComponent as UserIcon } from '../../assets/images/icons/user.svg';
import { useLocation } from 'react-router-dom';

export interface HeaderProps {

}

const Header: React.FC<HeaderProps> = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    
    const NavActive = () => {
        let location = useLocation();
        return location.pathname
    }

    return (
        <>
            <nav className="navbar">
                <Link to="/" className="logo">
                    <img src={Logo} />
                </Link>
                <ul className={`${isOpen ? 'open' : ''}`}>
                    <li className={ NavActive() === '/about' ? "active" : ''}>
                        <Link to="/about">About</Link>
                    </li>
                    <li className={ NavActive() === '/faq' ? "active" : ''}>
                        <Link to="/faq">FAQ</Link>
                    </li>
                    <li className={ NavActive() === '/permits/application' ? "active" : ''}>
                        <Link to="/permits/application">Permits</Link>
                    </li>
                    <li className={ NavActive() === '/contact' ? "active" : ''}>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className={ NavActive() === '/login' ? "active" : ''}>
                        <Link to="/login"><UserIcon/></Link>
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