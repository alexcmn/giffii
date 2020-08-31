import React from 'react';
import FormField from '../../../../components/utils/form/formFields';

interface LocalityProps {
    values: any,
    update: (element: any) => void
}

const App1: React.FC<LocalityProps> = ({ values, update }) => {

    return (
        <>
            <h3>Application Details</h3>
            <div className="form-row">
                <div className="left">
                    <FormField
                        id={'application_name'}
                        formdata={values.application_name}
                        change={(element: any) => update(element)}
                    />
                </div>
                <div className="right">
                    <FormField
                        id={'application_surname'}
                        formdata={values.application_surname}
                        change={(element: any) => update(element)}
                    />
                </div>
            </div>
            <div className="form-group">
                <FormField
                    id={'application_id_card'}
                    formdata={values.application_id_card}
                    change={(element: any) => update(element)}
                />
            </div>
            <div className="form-group">
                <FormField
                    id={'application_adress'}
                    formdata={values.application_adress}
                    change={(element: any) => update(element)}
                />
            </div>
            <div className="form-group">
                <FormField
                    id={'application_street'}
                    formdata={values.application_street}
                    change={(element: any) => update(element)}
                />
            </div>
            <div className="form-row">
                <div className="left">
                    <FormField
                        id={'application_locality'}
                        formdata={values.application_locality}
                        change={(element: any) => update(element)}
                    />
                </div>
                <div className="right">
                    <FormField
                        id={'application_postcode'}
                        formdata={values.application_postcode}
                        change={(element: any) => update(element)}
                    />
                </div>
            </div>
            <div className="form-group">
                <FormField
                    id={'application_company'}
                    formdata={values.application_company}
                    change={(element: any) => update(element)}
                />
            </div>
        </>
    )
}

export default App1;