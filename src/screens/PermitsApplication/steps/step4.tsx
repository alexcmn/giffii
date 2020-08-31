import React from 'react';
// import FormField from '../../../components/utils/form/formFields';

interface LocalityProps {
    values: any,
    prevStep: any
}

const Step4: React.FC<LocalityProps> = ({ values, prevStep }) => {

    return (
        <div className="step-4">
            
            <div className="btns">
                <button className="next" onClick={prevStep}>Next</button>
            </div>
        </div>
    )
}

export default Step4;