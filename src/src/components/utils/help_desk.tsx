import React, { useEffect, useState, useRef } from 'react';
import { ReactComponent as Rubic } from '../../assets/images/icons/rubik.svg';
import Clip from '../../assets/images/icons/clip.png';
import Like from '../../assets/images/icons/like.png';
import Cross from '../../assets/images/icons/close.png';

interface HelpDeskProps {
    open: boolean,
    toggleHelpDesk: any
}

const PermitCheckbox: React.SFC<HelpDeskProps> = ({ open, toggleHelpDesk }) => {


    return (
        <div className={`help-desk-btn ${open ? 'active' : ''}`}>
            <span onClick={toggleHelpDesk}>
                <img src={Cross} alt="" />
            </span>
            <div className="help">
                <div className="top">
                    <div className="left">
                        <img src="https://s3-eu-west-1.amazonaws.com/wbm.thumbnail/dissolve/1200/685236.jpg" alt="" />
                        <div className="name">
                            <h2>Cristabel</h2>
                            <p>Support Specialist</p>
                        </div>
                    </div>
                    <div className="icon">
                        <Rubic />
                    </div>
                </div>
                <div className="middle">

                </div>
                <div className="bottom">
                    <input type="text" placeholder="Type and press [enter]"/>
                    <div className="right">
                        <img src={Like} alt=""/>
                        <img src={Clip} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PermitCheckbox;