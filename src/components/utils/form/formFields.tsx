import React from 'react';

interface formFieldsProps {
    formdata: any,
    change: any,
    id: string,
}

const formFields: React.FC<formFieldsProps> = ({ formdata, change, id }) => {

    const showError = () => {
        let errorMessage = null;

        if (formdata.validation && !formdata.valid) {
            errorMessage = (
                <div className="error_label">
                    {formdata.validationMessage}
                </div>
            )
        }

        return errorMessage;
    }

    const renderTemplate = () => {
        let formTemplate = null;

        switch (formdata.element) {
            case ('input'):
                formTemplate = (
                    <>
                        {formdata.showlabel ?
                            <label>{formdata.config.label}</label>
                            : null
                        }
                        <input
                            className={`form-control ${formdata.validation && !formdata.valid ? 'input-error' : ''}`}
                            {...formdata.config}
                            value={formdata.value}
                            onBlur={(event) => change({ event, id, blur: true })}
                            onChange={(event) => change({ event, id })}
                        />
                        {showError()}
                    </>
                )
                break;
            case ('select'):
                // console.log(formdata.showlabel)
                formTemplate = (
                    <>
                        {formdata.showlabel ?
                            <label>{formdata.config.label}</label>
                            : null
                        }
                        <div className="select-bx">
                            <select
                                className="form-control"
                                value={formdata.value}
                                onBlur={(event) => change({ event, id, blur: true })}
                                onChange={(event) => change({ event, id })}
                            >
                                <option selected disabled>Select one</option>
                                {
                                    formdata.config.options.map((item:any) => (
                                        <option key={item.key}
                                            value={item.key}
                                        >
                                            {item.value}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>
                        {showError()}
                    </>
                )
                break;
            default:
                formTemplate = null;
        }

        return formTemplate;
    }

    return (
        <>
            {renderTemplate()}
        </>
    );
};

export default formFields;