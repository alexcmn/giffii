import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { ReactComponent as UserIcon } from '../../assets/images/icons/user.svg';
import { useLocation } from 'react-router-dom';

export interface HeaderProps {
    toggle: any,
    isOpen: any
}

const AdminHeader: React.FC<HeaderProps> = ({toggle, isOpen}) => {

    const NavActive = () => {
        let location = useLocation();
        return location.pathname
    }

    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <ul>
                <li>
                    <Link to="/dashboard" className={ NavActive() === '/dashboard' ? "active" : ''}>
                        <span className="icon"><UserIcon/></span>
                        <span className="title">Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/user_profile" className={ NavActive() === '/user_profile' ? "active" : ''}>
                        <span className="icon"><UserIcon/></span>
                        <span className="title">Profile</span>
                    </Link>
                </li>
                <li>
                    <Link to="/my_application" className={ NavActive() === '/my_application' ? "active" : ''}>
                        <span className="icon"><UserIcon/></span>
                        <span className="title">My Applications</span>
                    </Link>
                </li>
                <li>
                    <Link to="/payements" className={ NavActive() === '/payements' ? "active" : ''}>
                        <span className="icon"><UserIcon/></span>
                        <span className="title">Payments</span>
                    </Link>
                </li>
                <li>
                    <Link to="/help_center" className={ NavActive() === '/help_center' ? "active" : ''}>
                        <span className="icon"><UserIcon/></span>
                        <span className="title">Help Center</span>
                    </Link>
                </li>
            </ul>

            <div className="hamburger" onClick={toggle}>
                <div className="wrapp">
                    <div className="icon"></div>
                </div>
            </div>
        </div>
    );
}

export default AdminHeader;