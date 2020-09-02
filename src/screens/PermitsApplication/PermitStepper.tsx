import React, { useState } from 'react'
import './PermitStepper.css';
import Container from "@material-ui/core/Container";

import Stepper from './steps/stepper';
import Step1 from './steps/step1';
import Step2 from './steps/step2';
import Step3 from './steps/step3';
import Step4 from './steps/step4';

import App1 from './steps/step_3_forms/app1';
import App2 from './steps/step_3_forms/app2';
import App3 from './steps/step_3_forms/app3';
import App4 from './steps/step_3_forms/app4';

import Trenching from '../../assets/images/icons/permits/trenching.png';
import Market from '../../assets/images/icons/permits/market.png';
import BBQ from '../../assets/images/icons/permits/bbq.png';
import VendingMachine from '../../assets/images/icons/permits/vending-machine.png';
import Van from '../../assets/images/icons/permits/van.png';
import Crane from '../../assets/images/icons/permits/crane.png';
import Scaffolding from '../../assets/images/icons/permits/scaffolding.png';
import Fire from '../../assets/images/icons/permits/fire.png'
import Firework from '../../assets/images/icons/permits/firework.png';
import Dumpster from '../../assets/images/icons/permits/dumpster.png';
import Kiosk from '../../assets/images/icons/permits/kiosk.png';
import Help from '../../assets/images/icons/permits/question.png';

import { update } from '../../components/utils/form/formActions';

interface SteperState {
    step: number,
    formError: boolean,
    formSuccess: boolean,
    formdata:{
        element: string,
        value: string,
        config: {
            label: string,
            name: string,
            options:{
                key: boolean,
                value: string
            }
        },
        validation: Validation,
        valid: boolean,
        touched: boolean,
        validationMessage: string,
        showlabel: boolean,
        name: string,
        checked: boolean,
    }
    type:[{
        id: number,
        name: string,
        imgUrl: string,
        isChecked: boolean
    }]
}

interface Validation{
    required: boolean
}

const steps = [
    "Locality",
    "Permit Type",
    "Review",
    "Confirm"
]

const PermitStepper: React.FC<SteperState> = () => {

    const [step, setStep] = useState(1);
    // const [formError, setFormError] = useState(false);
    // const [formSuccess, setFormSuccess] = useState(false);
    const [formdata, setFormdata] = useState({
        locality: {
            element: 'select',
            value: '',
            config: {
                label: 'Pick The Locality for your permit',
                name: 'locality_input',
                options: [
                    { key: 0, value: 'Naxxar' },
                    { key: 1, value: 'Mosta' },
                    { key: 2, value: "St. Paul's Bay" },
                    { key: 3, value: 'Swieqi' },
                    { key: 4, value: 'San Lawrence (Gonzo)' },
                    { key: 5, value: 'San Giljan' }
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
        jobActivity: {
            element: 'select',
            value: '',
            config: {
                name: 'job_activity_input',
                options: [
                    { key: 0, value: 'Self-erector crane' },
                    { key: 1, value: 'Tower Crane' },
                    { key: 2, value: "Goods Lifter" },
                    { key: 3, value: 'Mobile Crane' },
                    { key: 4, value: 'Loader Crane' },
                    { key: 5, value: 'Aerial Lifter' }
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
        numberCranes: {
            element: 'select',
            value: '',
            config: {
                name: 'number_cranes_input',
                options: [
                    { key: 0, value: '1' },
                    { key: 1, value: '2' },
                    { key: 2, value: "3" },
                    { key: 3, value: '4' },
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
        application: {
            element: 'select',
            value: '',
            config: {
                name: 'application_input',
                options: [
                    { key: 0, value: 'Voluntary Organization' },
                    { key: 1, value: 'Myself' },
                    { key: 2, value: "Business / Commercial" },
                    { key: 3, value: 'Political Party' },
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
        application_name:{
            element: 'input',
            value: '',
            config: {
                name: 'application_name_input',
                type: 'application_name',
                placeholder: 'Name'
            },
            validation: {
                required: true
            },
            valid: true,
            touched: true,
            validationMessage: ''
        },
        application_surname:{
            element: 'input',
            value: '',
            config: {
                name: 'application_surname_input',
                type: 'application_surname',
                placeholder: 'Surname'
            },
            validation: {
                required: true
            },
            valid: true,
            touched: true,
            validationMessage: ''
        },
        application_id_card:{
            element: 'input',
            value: '',
            config: {
                name: 'application_id_card_input',
                type: 'application_id_card',
                placeholder: 'ID Crad Name'
            },
            validation: {
                required: true
            },
            valid: true,
            touched: true,
            validationMessage: ''
        },
        application_adress:{
            element: 'input',
            value: '',
            config: {
                name: 'application_adress_input',
                type: 'application_adress',
                placeholder: 'Address Line 1'
            },
            validation: {
                required: true
            },
            valid: true,
            touched: true,
            validationMessage: ''
        },
        application_street:{
            element: 'input',
            value: '',
            config: {
                name: 'application_street_input',
                type: 'application_street',
                placeholder: 'Str.'
            },
            validation: {
                required: true
            },
            valid: true,
            touched: true,
            validationMessage: ''
        },
        application_locality:{
            element: 'input',
            value: '',
            config: {
                name: 'application_locality_input',
                type: 'application_locality',
                placeholder: 'Locality'
            },
            validation: {
                required: true
            },
            valid: true,
            touched: true,
            validationMessage: ''
        },
        application_postcode:{
            element: 'input',
            value: '',
            config: {
                name: 'application_postcode_input',
                type: 'application_postcode',
                placeholder: 'Postcode'
            },
            validation: {
                required: true
            },
            valid: true,
            touched: true,
            validationMessage: ''
        },
        application_company:{
            element: 'input',
            value: '',
            config: {
                name: 'application_company_input',
                type: 'application_company',
                placeholder: 'Company Name'
            },
            validation: {
                required: true
            },
            valid: true,
            touched: true,
            validationMessage: ''
        },
        checkWarden:{
            name: 'Book a Warden?',
            checked: false
        }
    })
    const [type, setType] = useState([
        {
            id: 1,
            name: 'Trenching',
            imgUrl: Trenching,
            isChecked: false,
        },
        {
            id: 2,
            name: 'Open Market',
            imgUrl: Market,
            isChecked: false,
        },
        {
            id: 3,
            name: 'BBQ Event',
            imgUrl: BBQ,
            isChecked: false,
        },
        {
            id: 4,
            name: 'Tables & Chairs Outdoor',
            imgUrl: Scaffolding,
            isChecked: false,
        },
        {
            id: 5,
            name: 'Kiddie Ride & Vending Machine',
            imgUrl: VendingMachine,
            isChecked: false,
        },
        {
            id: 6,
            name: 'Caravan',
            imgUrl: Van,
            isChecked: false,
        },
        {
            id: 7,
            name: 'Crane / Lifting',
            imgUrl: Crane,
            isChecked: false,
        },
        {
            id: 8,
            name: 'Scaffolding',
            imgUrl: Scaffolding,
            isChecked: false,
        },
        {
            id: 9,
            name: 'Camping',
            imgUrl: Fire,
            isChecked: false,
        },
        {
            id: 10,
            name: 'Outdoor Event',
            imgUrl: Firework,
            isChecked: false,
        },
        {
            id: 11,
            name: 'Material or any other objects in the street',
            imgUrl: VendingMachine,
            isChecked: false,
        },
        {
            id: 12,
            name: 'Skip',
            imgUrl: Dumpster,
            isChecked: false,
        },
        {
            id: 13,
            name: 'Kiosk',
            imgUrl: Kiosk,
            isChecked: false,
        },
        {
            id: 14,
            name: 'Cherry Picker',
            imgUrl: Market,
            isChecked: false,
        },
        {
            id: 15,
            name: 'Help',
            imgUrl: Help,
            isChecked: false,
        }
    ])
    const [checkWarden, setCheckWarden] = useState(false);
    const [checkRoad, setCheckRoad] = useState(false);
    const [checkTraffic, setCheckTraffic] = useState(false);
    const [checkRoadTraffic, setCheckRoadTraffic] = useState(false);
    const [checkDocY, setCheckDocY] = useState(false);
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [endDate, setEndDate] = useState<Date | null>(new Date());

    const nextStep = () => {
        if (step <= 3) {
            setStep(step + 1);
        }
    }

    const prevStep = () => {
        if (step > 1) {
            setStep(step - 1)
        }
    }

    const toggleWardenChecbox = () =>{
        setCheckWarden(!checkWarden);
    }

    const toggleRoadChecbox = () =>{
        // if(checkTraffic === true || checkRoadTraffic !== true){
        //     setCheckRoad(!checkRoad)
        // }else{
        //     setCheckRoad(false)
        // }
        setCheckRoad(!checkRoad)
    }

    const toggleTrafficChecbox = () =>{
        setCheckTraffic(!checkTraffic)
    }

    const toggleRoadTrafficChecbox = () =>{
        setCheckRoadTraffic(!checkRoadTraffic)
    }

    const toggleDocYCheckbox = () =>{
        setCheckDocY(!checkDocY)
    }

    const handleStartDateChange = (date: Date | null) => {
        setStartDate(date);
    };

    const handleEndDateChange = (date: Date | null) => {
        setEndDate(date);
    };

    const switchSteps = (step:any) => {
        const appStep = parseInt(formdata.application.value);
        switch (step) {
            case 1:
                return <Step1
                    values={formdata}
                    update={(element: any) => updateForm(element)}
                    nextStep={nextStep}
                />
            case 2:
                return <Step2
                    values={type}
                    update={(element: any) => updateForm(element)}
                    handleCheckChieldElement={(event:any) => handleCheckChieldElement(event)}
                    nextStep={nextStep}
                    prevStep={prevStep}
                />
            case 3:
                return <Step3
                    values={formdata}
                    // step={formdata.application.value}
                    switchApplicationForm={switchApplicationForm(appStep)}
                    update={(element: any) => updateForm(element)}
                    checkWarden={checkWarden}
                    toggleChecbox={toggleWardenChecbox}
                    checkRoad={checkRoad}
                    toggleRoad={toggleRoadChecbox}
                    checkTraffic={checkTraffic}
                    toggleTraffic={toggleTrafficChecbox}
                    checkRoadTraffic={checkRoadTraffic}
                    toggleRoadTraffic={toggleRoadTrafficChecbox}
                    checkDocY={checkDocY}
                    toggleDocYCheckbox={toggleDocYCheckbox}
                    startDate={startDate}
                    endDate={endDate}
                    handleStartDateChange={handleStartDateChange}
                    handleEndDateChange={handleEndDateChange}
                    prevStep={prevStep}
                    nextStep={nextStep}
                />
            case 4:
                return <Step4
                    values={formdata}
                    checkWarden={checkWarden}
                    startDate={startDate}
                    endDate={endDate}
                    handleStartDateChange={handleStartDateChange}
                    handleEndDateChange={handleEndDateChange}
                    prevStep={prevStep}
                />
        }
    }

    const switchApplicationForm = (appStep: any) =>{
        const step = appStep;
        const err = isNaN(step);
        if(err === false){
            switch (step) {
                case 0:
                    return <App1
                    values={formdata}
                    update={(element: any) => updateForm(element)}

                    />
                case 1:
                    return <App2
                    values={formdata}
                    update={(element: any) => updateForm(element)}

                    />
                case 2:
                    return <App3
                    values={formdata}
                    update={(element: any) => updateForm(element)}

                    />
                case 3:
                    return <App4
                    values={formdata}
                    update={(element: any) => updateForm(element)}
                    />
                default:
                    break;
            }
        }
    }

    const handleCheckChieldElement = (event:any) =>{

        let types = type;
        types.forEach(item => {
            if(item.name === event.target.value){
                item.isChecked = !item.isChecked
            }else{
                item.isChecked = false;
            }
        })

        setType(types)
    }

    const updateForm = (element:any) => {
        const newFormdata = update(element, formdata, 'permits');
        setFormdata(newFormdata)
    }


    return (
        <div className="permits-application-wrapper">
            <div className="stepper">
                <Stepper steps={steps} currentStep={step} />
            </div>
            <Container maxWidth="md">
                <div className="main">
                    {switchSteps(step)}
                </div>
            </Container>
        </div>
    )
}

export default PermitStepper;