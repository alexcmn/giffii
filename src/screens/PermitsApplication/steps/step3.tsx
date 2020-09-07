import React from 'react';
import Crane from '../../../assets/images/icons/permits/crane.png';
import Warden from '../../../assets/images/icons/permits/van.png';
import FormField from '../../../components/utils/form/formFields';
import { ReactComponent as Tick } from '../../../assets/images/icons/tick.svg';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns'

interface LocalityProps {
    values: any,
    update: (element: any) => void
    prevStep: any,
    nextStep: any,
    switchApplicationForm: any,
    toggleChecbox: any,
    checkWarden: any,
    toggleRoad: any,
    toggleTraffic: any,
    toggleRoadTraffic: any,
    checkRoad: boolean,
    checkTraffic: boolean,
    checkRoadTraffic: boolean,
    checkDocY: boolean,
    toggleDocYCheckbox: any,
    handleStartDateChange: any,
    handleEndDateChange: any,
    startDate: any,
    endDate: any
}

const Step3: React.FC<LocalityProps> = ({ values, 
                                        update, 
                                        prevStep, 
                                        nextStep, 
                                        switchApplicationForm, 
                                        toggleChecbox, 
                                        checkWarden, 
                                        toggleRoad, 
                                        toggleTraffic, 
                                        toggleRoadTraffic, 
                                        checkRoad, 
                                        checkTraffic, 
                                        checkRoadTraffic, 
                                        checkDocY, 
                                        toggleDocYCheckbox,
                                        startDate,
                                        endDate,
                                        handleStartDateChange,
                                        handleEndDateChange 
}) => {

    console.log(startDate.toISOString().replace(' 00:00:00', /T.+/))

    return (
        <div className="step-3">
            <div className="step-3-wrapp">
                <div className="box box-1">
                    <h3>Selected permit</h3>
                    <div className="img">
                        <img src={Crane} alt="" />
                        <p>Crane / Lifting</p>
                    </div>
                </div>
                <div className="box box-2">
                    <h3>Job/Activity type</h3>
                    <FormField
                        id={'jobActivity'}
                        formdata={values.jobActivity}
                        change={(element: any) => update(element)}
                    />
                </div>
                <div className="box box-3">
                    <h3>Number Of Cranes</h3>
                    <FormField
                        id={'numberCranes'}
                        formdata={values.numberCranes}
                        change={(element: any) => update(element)}
                    />
                </div>
                <div className="box box-4">
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <div className="left">
                            <h3>select start date</h3>
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="dd/MM/yyyy"
                                margin="normal"
                                value={startDate}
                                onChange={handleStartDateChange}
                                minDate={startDate}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </div>
                        <div className="right">
                            <h3>select end date</h3>
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="dd/MM/yyyy"
                                margin="normal"
                                value={endDate}
                                minDate={startDate}
                                onChange={handleEndDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </div>
                    </MuiPickersUtilsProvider>
                </div>
                <div className="box box-5">
                    <h3>Application For</h3>
                    <FormField
                        id={'application'}
                        formdata={values.application}
                        change={(element: any) => update(element)}
                    />
                </div>
                <div className="box box-6">
                    {switchApplicationForm}
                </div>
                <div className="box box-7">
                    <div className="top">
                        <img src={Warden} alt="" />
                        <h1>A Warden Booking is Recommended with this application. Please tick the box if you would like to book a warden.</h1>
                    </div>
                    <div className="check-w">
                        <h4>Book a Warden?</h4>
                        <div className={`check ${checkWarden ? 'active' : ''}`} onClick={toggleChecbox}>
                            {checkWarden ? <Tick /> : ''}
                        </div>
                    </div>
                </div>
                {
                    checkWarden ?
                        <div className="box box-8">
                            <h3>Pick The Best option</h3>
                            <div className="check-wrapp">
                                <div className="checkbx">
                                    <div className={`check ${checkRoad ? 'active' : ''}`} onClick={toggleRoad}>
                                        {checkRoad ? <Tick /> : ''}
                                    </div>
                                    <p>Road Closure</p>
                                </div>
                                <div className="checkbx">
                                    <div className={`check ${checkTraffic ? 'active' : ''}`} onClick={toggleTraffic}>
                                        {checkTraffic ? <Tick /> : ''}
                                    </div>
                                    <p>Traffic Control</p>
                                </div>
                                <div className="checkbx">
                                    <div className={`check ${checkRoadTraffic ? 'active' : ''}`} onClick={toggleRoadTraffic}>
                                        {checkRoadTraffic ? <Tick /> : ''}
                                    </div>
                                    <p>Road Closure & Traffic Control</p>
                                </div>
                            </div>
                        </div>
                        : ''
                }
                <div className="box box-9">
                    <div className="top">
                        <img src={Warden} alt="" />
                        <h1>This type Of permit requires you to upload Health & Safety Documents.</h1>
                    </div>
                    <div className="check-w">
                        <h4>Do you have these documents?</h4>
                        <div className="wrapp">
                            <div className="checkbx">
                                <div className={`check ${checkDocY ? 'active' : ''}`} onClick={toggleDocYCheckbox}>
                                    {checkDocY ? <Tick /> : ''}
                                </div>
                                <p>Yes</p>
                            </div>
                            <div className="checkbx">
                                <div className={`check ${!checkDocY ? 'active' : ''}`} onClick={toggleDocYCheckbox}>
                                    {!checkDocY ? <Tick /> : ''}
                                </div>
                                <p>No</p>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    checkDocY ?
                        <div className="box box-10">
                            <div className="wrapp">
                                <div className="inner">
                                    <h3>Drag and drop your documents here</h3>
                                    <p>or</p>
                                    <button>Browse files</button>
                                </div>
                            </div>
                            <h2>I'll do it later</h2>
                        </div>
                        :
                        <div className="box box-11">
                            <div className="wrapp">
                                <h1>The Health & Safety Documents will be requested from Gifi.</h1>
                            </div>
                        </div>
                }
            </div>
            <div className="btns">
                <button className="prev" onClick={prevStep}>Back</button>
                <button className="next" onClick={nextStep}>Next</button>
            </div>
        </div>
    )
}

export default Step3;