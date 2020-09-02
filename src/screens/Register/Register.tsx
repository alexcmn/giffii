import React, { useState } from 'react';
import './Register.css';
// import { ReactComponent as Tick } from '../../assets/images/icons/tick.svg';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';
import FormField from '../../components/utils/form/formFields';
import { update, generateData, isFormValid } from '../../components/utils/form/formActions';

interface RegisterProps {
    formError: boolean,
    formSuccess: string,
    formdata: FormData
}

interface FormData {
    username: Username,
    password: Password
}

interface Username {
    element: string,
    value: string,
    config: Config,
    validation: EmailValidation,
    valid: boolean,
    touched: boolean,
    validationMessage: string
}

interface Password {
    element: string,
    value: string,
    config: Config,
    validation: Validation,
    valid: boolean,
    touched: boolean,
    validationMessage: string
}

interface Config {
    name: string,
    type: string,
    placeholder: string
}

interface Validation {
    required: boolean
}

interface EmailValidation {
    required: boolean,
    email: boolean
}


const Register: React.FC<RegisterProps> = () => {

    const [formError, setFormError] = useState(false);
    // const [formSuccess, setFormSuccess] = useState('');
    const [formdata, setFormdata] = useState({
        title: {
            element: 'select',
            value: '',
            config: {
                name: 'title_input',
                options: [
                    { key: 0, value: 'Mr.' },
                    { key: 1, value: 'Mrs.' },
                    { key: 2, value: "Prof." },
                    { key: 3, value: 'E-mail Adress' }
                ]
            },
            validation: {
                required: true
            },
            valid: false,
            touched: false,
            validationMessage: '',
            showlabel: true
        },
        cardID: {
            element: 'input',
            value: '',
            config: {
                name: 'cardID_input',
                type: 'text',
                placeholder: 'ID Card Number'
            },
            validation: {
                required: true,
            },
            valid: true,
            touched: true,
            validationMessage: ''
        },
        name: {
            element: 'input',
            value: '',
            config: {
                name: 'name_input',
                type: 'text',
                placeholder: 'Name'
            },
            validation: {
                required: true,
            },
            valid: true,
            touched: true,
            validationMessage: ''
        },
        surname: {
            element: 'input',
            value: '',
            config: {
                name: 'surname_input',
                type: 'text',
                placeholder: 'Surname'
            },
            validation: {
                required: true,
            },
            valid: true,
            touched: true,
            validationMessage: ''
        },
        email: {
            element: 'input',
            value: '',
            config: {
                name: 'email_input',
                type: 'email',
                placeholder: 'E-mail Adress'
            },
            validation: {
                required: true,
                email: true
            },
            valid: true,
            touched: true,
            validationMessage: ''
        },
        adress: {
            element: 'input',
            value: '',
            config: {
                name: 'adress_input',
                type: 'text',
                placeholder: 'Address Line 1'
            },
            validation: {
                required: true,
            },
            valid: true,
            touched: true,
            validationMessage: ''
        },
        street: {
            element: 'input',
            value: '',
            config: {
                name: 'street_input',
                type: 'text',
                placeholder: 'Str.'
            },
            validation: {
                required: true,
            },
            valid: true,
            touched: true,
            validationMessage: ''
        },
        locality: {
            element: 'input',
            value: '',
            config: {
                name: 'locality_input',
                type: 'text',
                placeholder: 'Locality'
            },
            validation: {
                required: true,
            },
            valid: true,
            touched: true,
            validationMessage: ''
        },
        postcode: {
            element: 'input',
            value: '',
            config: {
                name: 'postcode_input',
                type: 'text',
                placeholder: 'Postcode'
            },
            validation: {
                required: true,
            },
            valid: true,
            touched: true,
            validationMessage: ''
        },
        company: {
            element: 'input',
            value: '',
            config: {
                name: 'company_input',
                type: 'text',
                placeholder: 'Company Name'
            },
            validation: {
                required: true,
            },
            valid: true,
            touched: true,
            validationMessage: ''
        },
        mob: {
            element: 'input',
            value: '',
            config: {
                name: 'mob_input',
                type: 'text',
                placeholder: 'Mob.'
            },
            validation: {
                required: true,
            },
            valid: true,
            touched: true,
            validationMessage: ''
        },
        tel: {
            element: 'input',
            value: '',
            config: {
                name: 'tel_input',
                type: 'text',
                placeholder: 'Tel.'
            },
            validation: {
                required: true,
            },
            valid: true,
            touched: true,
            validationMessage: ''
        },
        password: {
            element: 'input',
            value: '',
            config: {
                name: 'password_input',
                type: 'password',
                placeholder: 'Password'
            },
            validation: {
                required: true
            },
            valid: true,
            touched: true,
            validationMessage: ''
        },
        confirmPassword: {
            element: 'input',
            value: '',
            config: {
                name: 'confirm_password_input',
                type: 'password',
                placeholder: 'Confirm'
            },
            validation: {
                required: true
            },
            valid: true,
            touched: true,
            validationMessage: ''
        }
    });

    const submitForm = (event: any) => {
        event.preventDefault();

        let dataToSubmit = generateData(formdata, 'register');
        let formIsValid = isFormValid(formdata, 'register');
        console.log(formIsValid)
        if (formIsValid) {
            console.log(dataToSubmit)
            console.log(formError)
        } else {
            setFormError(true)
        }
    }

    const updateForm = (element: any) => {
        console.log(element)
        const newFormdata = update(element, formdata, 'register');
        setFormError(false);
        setFormdata(newFormdata);
    }


    return (
        <div className="register-wrapp">
            <Container maxWidth="lg" className="container">
                <form onSubmit={(event) => submitForm(event)}>
                    <h1>CREATE YOUR GIFI ACCOUNT</h1>
                    <div className="form-row">
                        <div className="inp">
                            <FormField
                                id={'title'}
                                formdata={formdata.title}
                                change={(element: any) => updateForm(element)}
                            />
                        </div>
                        <div className="inp">
                            <FormField
                                id={'cardID'}
                                formdata={formdata.cardID}
                                change={(element: any) => updateForm(element)}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="inp">
                            <FormField
                                id={'name'}
                                formdata={formdata.name}
                                change={(element: any) => updateForm(element)}
                            />
                        </div>
                        <div className="inp">
                            <FormField
                                id={'surname'}
                                formdata={formdata.surname}
                                change={(element: any) => updateForm(element)}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="inp">
                            <FormField
                                id={'email'}
                                formdata={formdata.email}
                                change={(element: any) => updateForm(element)}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="inp">
                            <FormField
                                id={'adress'}
                                formdata={formdata.adress}
                                change={(element: any) => updateForm(element)}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="inp">
                            <FormField
                                id={'street'}
                                formdata={formdata.street}
                                change={(element: any) => updateForm(element)}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="inp">
                            <FormField
                                id={'locality'}
                                formdata={formdata.locality}
                                change={(element: any) => updateForm(element)}
                            />
                        </div>
                        <div className="inp">
                            <FormField
                                id={'postcode'}
                                formdata={formdata.postcode}
                                change={(element: any) => updateForm(element)}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="inp">
                            <FormField
                                id={'company'}
                                formdata={formdata.company}
                                change={(element: any) => updateForm(element)}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="inp">
                            <FormField
                                id={'mob'}
                                formdata={formdata.mob}
                                change={(element: any) => updateForm(element)}
                            />
                        </div>
                        <div className="inp">
                            <FormField
                                id={'tel'}
                                formdata={formdata.tel}
                                change={(element: any) => updateForm(element)}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="inp">
                            <FormField
                                id={'password'}
                                formdata={formdata.password}
                                change={(element: any) => updateForm(element)}
                            />
                        </div>
                        <div className="inp">
                            <FormField
                                id={'confirmPassword'}
                                formdata={formdata.confirmPassword}
                                change={(element: any) => updateForm(element)}
                            />
                        </div>
                    </div>
                    <p className="sugg">Use 8 or more characters with a mix of letters, numbers & symbols</p>
                    <div className="btns">
                        <button className="log">
                            <Link to="/login">Login Instead</Link>
                        </button>
                        <button className="reg">Next</button>
                    </div>
                </form>
            </Container>
        </div>
    );
};

export default Register;