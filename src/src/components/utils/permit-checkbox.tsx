import React, { useEffect, useState, useRef } from 'react';
import { ReactComponent as Tick } from '../../assets/images/icons/tick.svg';

interface PermitType{
    id: number,
    name: string,
    imgUrl: string,
    isChecked: boolean,
    handleCheckChieldElement: (event: any) => void
}

function usePrevious(value:any){
    const ref = useRef();
    useEffect(() => {
        ref.current = value; 
    })

    return ref.current;
}
 
const PermitCheckbox: React.SFC<PermitType> = ({name, imgUrl, isChecked, id, handleCheckChieldElement}) => { 

    const check = usePrevious(isChecked);

    return (
        <div className="permit-type-box">
            <input type="checkbox" id={`permit-type-${name.replace(/\s+/g, '-').toLowerCase()}`} key={id} checked={check} value={name} onChange={(event:any) => handleCheckChieldElement(event)} />
            <label htmlFor={`permit-type-${name.replace(/\s+/g, '-').toLowerCase()}`}>
                <img src={imgUrl} alt=""/>
                <p>{name}</p>
                <span className="overlay">
                    <Tick/>
                </span>
            </label>
        </div>
    );
}
 
export default PermitCheckbox;