import React, { useState } from 'react';
// import { Input } from 'reactstrap';
import FormField from '../../components/utils/form/formFields';

interface LocalityProps {
    local: any,
    update: (element:any) => void
}

const Locality: React.FC<LocalityProps> = ({ local, update }) => {
    
    return (
        <div className="wrapp">
            <FormField
                id={'locality'}
                formdata={local.locality}
                change={(element: any) => update(element)}
            />
        </div>
    );
};

export default Locality;