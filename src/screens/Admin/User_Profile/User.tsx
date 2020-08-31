import React, { useState } from 'react'
import './User.css';
import { ReactComponent as Search } from '../../../assets/images/icons/search.svg';
import { ReactComponent as User } from '../../../assets/images/icons/user.svg';
import Sidebar from '../../../components/Header/Admin';
// import { Link } from 'react-router-dom';


interface State{

}

const UserProfile: React.FC<State> = () => {
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
                            <h1>My Profile</h1>
                            <div className="search" onClick={toggleSearch}><Search/></div>
                        </div>
                    }
                </div>
                <div className="links">
                    <div className="left">
                        <img src="https://s3-eu-west-1.amazonaws.com/wbm.thumbnail/dissolve/1200/685236.jpg" alt=""/>
                        <h2>Norbert Vella</h2>
                        <ul>
                            <li>21, Triq il-Gifen</li>
                            <li>St. Paul’s Bay</li>
                            <li>SPB1012</li>
                        </ul>
                        <p className="edit">Edit</p>
                    </div>
                    <div className="right">
                        <div className="wrapp">
                            <h2>Contractor</h2>
                            <ul>
                                <li>
                                    <User/>
                                    3 Permits Pending
                                </li>
                                <li>
                                    <User/>
                                    3 Permits Approved
                                </li>
                                <li>
                                    <User/>
                                    1 Permits Needs Action
                                </li>
                            </ul>
                        </div>
                        <p className="view">View All</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserProfile;