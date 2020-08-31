import React from 'react';
import CheckBox from '../../../components/utils/permit-checkbox';

interface LocalityProps{
    values: any,
    update: (element:any) => void
    nextStep: any,
    prevStep: any,
    handleCheckChieldElement: (event: any) => void
}

const Step2: React.FC<LocalityProps> = ({values, update, nextStep, prevStep, handleCheckChieldElement}) => {



    return(
        <div className="step-2">
            <h2>Please Click to Select the type of Permit you would like to apply for.</h2>
            <div className="checks">
                {
                    values.map((type:any) =>{
                        return(
                            <CheckBox {...type} handleCheckChieldElement={handleCheckChieldElement}/>
                        )
                    })
                }
            </div>
            <div className="btns">
                <button className="prev" onClick={prevStep}>Back</button>
                <button className="next" onClick={nextStep}>Next</button>
            </div>
        </div>
    )
}

export default Step2;