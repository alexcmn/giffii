import React, { useState } from 'react'
import './Application.css';
import { ReactComponent as Search } from '../../../assets/images/icons/search.svg';
import { ReactComponent as Tick } from '../../../assets/images/icons/tick.svg';
import Firework from '../../../assets/images/icons/permits/firework.png';
import BBQ from '../../../assets/images/icons/permits/bbq.png';
import Kiosk from '../../../assets/images/icons/permits/kiosk.png';
import Scaffolding from '../../../assets/images/icons/permits/scaffolding.png';
import Sidebar from '../../../components/Header/Admin';
import { Link } from 'react-router-dom';


interface State {

}

const MyApplication: React.FC<State> = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openSearch, setOpenSearch] = useState(false)

    const toggle = () => setIsOpen(!isOpen);
    const toggleSearch = () => setOpenSearch(!openSearch)
    return (
        <>
            <Sidebar toggle={toggle} isOpen={isOpen} />
            <div className={`dashboard ${isOpen ? 'open' : ''}`}>
                <div className="top">
                    {
                        openSearch ?
                            <div className="search-input">
                                <span className="search"><Search /></span>
                                <input type="text" placeholder="Search Permits" />
                                <span className="close" onClick={toggleSearch}>x</span>
                            </div>
                            :
                            <div className="wrapp">
                                <h1>My Applications</h1>
                                <div className="search" onClick={toggleSearch}><Search /></div>
                            </div>
                    }
                </div>
                <div className="table">
                    <table>
                        <tr>
                            <th>ID</th>
                            <th>Permit Type</th>
                            <th>Status</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Action Required</th>
                            <th>View</th>
                        </tr>
                        <tr>
                            <td>356121</td>
                            <td><span><img src={Firework} alt="" /> Outdoor Event</span></td>
                            <td className="pend"><div><Tick /></div>Pending</td>
                            <td>11-06-2020</td>
                            <td>13-08-2020</td>
                            <td><div><Search /></div>Affect Payment</td>
                            <td><div><Search /></div></td>
                        </tr>
                        <tr>
                            <td>356122</td>
                            <td><span><img src={BBQ} alt="" /> BBQ</span></td>
                            <td className="app"><div><Tick /></div>Approved</td>
                            <td>11-06-2020</td>
                            <td>13-08-2020</td>
                            <td><div><Search /></div>Affect Payment</td>
                            <td><div><Search /></div></td>
                        </tr>
                        <tr>
                            <td>356123</td>
                            <td><span><img src={Scaffolding} alt="" /> Scaffolding</span></td>
                            <td className="err"><div><Tick /></div>Rejected</td>
                            <td>11-06-2020</td>
                            <td>13-08-2020</td>
                            <td><div><Search /></div>Affect Payment</td>
                            <td><div><Search /></div></td>
                        </tr>
                    </table>
                </div>
                <div className="new">
                    <div className="wrapp">
                        <h1>My Applications</h1>
                    </div>
                    <div className="link">
                        <p>If you would like to apply for a New Permit</p>
                        <button>Click Here</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyApplication;