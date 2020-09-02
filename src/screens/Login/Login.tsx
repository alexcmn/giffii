import React, { useState } from 'react';
import './Login.css';
import { ReactComponent as Tick } from '../../assets/images/icons/tick.svg';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import FormField from '../../components/utils/form/formFields';
import { update, generateData, isFormValid } from '../../components/utils/form/formActions';

interface LoginProps {
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


const Login: React.FC<LoginProps> = () => {

    const [formError, setFormError] = useState(false);
    // const [formSuccess, setFormSuccess] = useState('');
    const [formdata, setFormdata] = useState({
        username: {
            element: 'input',
            value: '',
            config: {
                name: 'username_input',
                type: 'text',
                placeholder: 'Username'
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
        }
    });

    const submitForm = (event: any) => {
        event.preventDefault();

        let dataToSubmit = generateData(formdata, 'login');
        let formIsValid = isFormValid(formdata, 'login');
        console.log(formIsValid)
        if (formIsValid) {
            console.log(dataToSubmit)

        } else {
            setFormError(true)
        }
    }

    const updateForm = (element: any) => {
        console.log(element)
        const newFormdata = update(element, formdata, 'login');
        setFormError(false);
        setFormdata(newFormdata);
    }


    return (
        <div className="login-wrapp">
            <div className="left">
                <Container className="container">
                    <div className="row">
                        <Grid className="login-box" sm={12} md={12} lg={12}>
                            <h2>login</h2>
                            <form onSubmit={(event) => submitForm(event)}>
                                <div className="form-group">
                                    <FormField
                                        id={'username'}
                                        formdata={formdata.username}
                                        change={(element: any) => updateForm(element)}
                                    />
                                </div>
                                <div className="form-group">
                                    <FormField
                                        id={'password'}
                                        formdata={formdata.password}
                                        change={(element: any) => updateForm(element)}
                                    />
                                </div>
                                {
                                    formError ?
                                        <div className="error_label">
                                            Please check your data
                            </div>
                                        :
                                        null
                                }
                                <div className="form-row bottom">
                                    <button onClick={(event) => submitForm(event)} type="submit" className="btn btn-primary">Sign In</button>
                                </div>
                                <div className="stay-sign">
                                    <div className="wrapp">
                                        <input type="checkbox" name="permit" id="stay-sign-in" />
                                        <label htmlFor="stay-sign-in">
                                            <span className="overlay">
                                                <Tick />
                                            </span>
                                        </label>
                                    </div>
                                    <p>Stay Signed In</p>
                                </div>
                                <Link className="forgot" to="/forgot">Forgot Password?</Link>
                            </form>
                        </Grid>
                    </div>
                </Container>
            </div>
            <div className="right"></div>
        </div>
    );
};

export default Login;