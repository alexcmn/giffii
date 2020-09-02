import React, { useState } from 'react'
import './Dashboard.css';
import { ReactComponent as Search } from '../../../assets/images/icons/search.svg';
import { ReactComponent as User } from '../../../assets/images/icons/man.svg';
import { ReactComponent as Pencil } from '../../../assets/images/icons/pencil.svg';
import { ReactComponent as Euro } from '../../../assets/images/icons/euro.svg';
import { ReactComponent as Folder } from '../../../assets/images/icons/folder.svg';
import Sidebar from '../../../components/Header/Admin';
import { Link } from 'react-router-dom';


interface State{

}

const Dashboard: React.FC<State> = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openSearch, setOpenSearch] = useState(false)
    
    const toggle = () => setIsOpen(!isOpen);
    const toggleSearch = () => setOpenSearch(!openSearch)
    return (
        <>
            <Sidebar toggle={toggle} isOpen={isOpen}/>
            <div className={`dashboard ${isOpen ? 'open' : ''}`}>
                <div className="top">
                    {
                        openSearch ?
                        <div className="search-input">
                            <span className="search"><Search/></span>
                            <input type="text" placeholder="Search Permits"/>
                            <span className="close" onClick={toggleSearch}>x</span>
                        </div>
                        : 
                        <div className="wrapp">
                            <h1>Dashboard</h1>
                            <div className="search" onClick={toggleSearch}><Search/></div>
                        </div>
                    }
                </div>
                <div className="links">
                    <Link to="/user_profile" className="bx-link">
                        <div className="box">
                            <div className="wrapp">
                                <User/>
                                <p>My Profile</p>
                            </div>    
                        </div>
                    </Link>
                    <Link to="/my_application" className="bx-link">
                        <div className="box">
                            <div className="wrapp">
                                <Pencil/>
                                <p>Apply for Permit</p>
                            </div>    
                        </div>
                    </Link>
                    <Link to="/payements" className="bx-link">
                        <div className="box">
                            <div className="wrapp">
                                <Euro/>
                                <p>Pending Payments</p>
                            </div>    
                        </div>
                    </Link>
                    <Link to="/my_application" className="bx-link">
                        <div className="box">
                            <div className="wrapp">
                                <Folder/>
                                <p>View Applications</p>
                            </div>    
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Dashboard;