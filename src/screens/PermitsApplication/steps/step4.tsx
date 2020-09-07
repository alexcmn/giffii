import React from 'react';
// import FormField from '../../../components/utils/form/formFields';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns'
import { Link } from 'react-router-dom';

interface LocalityProps {
    values: any,
    prevStep: any,
    checkWarden: any,
    handleStartDateChange: any,
    handleEndDateChange: any,
    startDate: any,
    endDate: any
}

const Step4: React.FC<LocalityProps> = ({ values, prevStep, checkWarden, startDate, endDate, handleStartDateChange, handleEndDateChange }) => {

    const findSelectName = (array: any, id: any) => {
        if (id !== undefined) {
            let fieldName = array.find(({ key }: any) => key === id);
            console.log(fieldName)
            return id;
        }
    }

    return (
        <div className="step-4">
            <h2>You are Submitting an Application for</h2>
            <div className="box box-1">
                <div className="left">
                    <p>Category</p>
                    <div className="wrapp">
                        <span>Crane/Lifting</span>
                    </div>
                </div>
                <div className="right">
                    <p>Type</p>
                    <div className="wrapp">
                        <span>{findSelectName(values.jobActivity.config.options, values.jobActivity.value)}</span>
                    </div>
                </div>
            </div>
            <div className="box box-2">
                <div className="left">
                    <p>Number of Cranes</p>
                    <div className="wrapp">
                        <span>{findSelectName(values.numberCranes.config.options, values.numberCranes.value)}</span>
                    </div>
                </div>
            </div>
            <div className="box box-1">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <div className="left">
                        <p>Start Date</p>
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
                        <p>End Date</p>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
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
            <div className="box box-2">
                <div className="left">
                    <p>Application for</p>
                    <div className="wrapp">
                        <span>{findSelectName(values.application.config.options, values.application.value)}</span>
                    </div>
                </div>
            </div>
            <div className="box box-2">
                <div className="left">
                    <p>Includes</p>
                    <div className="wrapp">
                        <span>
                            Warden-{checkWarden ? 'Yes' : 'No'}
                        </span>
                    </div>
                </div>
            </div>
            <div className="box box-2">
                <div className="left">
                    <p>Price</p>
                    <div className="wrapp">
                        <span>&euro; 5.50</span>
                    </div>
                </div>
            </div>
            <div className="box">
                <h3>*This is an Estimate. Payment will be affected upon approval of permit</h3>
            </div>
            <div className="btns">
                <button className="prev" onClick={prevStep}>Back</button>
                <button className="next" onClick={prevStep}>
                    <Link to="/register">Submit</Link>
                </button>
            </div>
        </div>
    )
}

export default Step4;