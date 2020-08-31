import React from 'react';
import FormField from '../../../components/utils/form/formFields';

interface LocalityProps {
    values: any,
    update: (element: any) => void
    nextStep: any
}

const Step1: React.FC<LocalityProps> = ({ values, update, nextStep }) => {

    return (
        <div className="step-1">
            <FormField
                id={'locality'}
                formdata={values.locality}
                change={(element: any) => update(element)}
            />
            <div className="btns">
                <button className="next" onClick={nextStep}>Next</button>
            </div>
        </div>
    )
}

export default Step1;