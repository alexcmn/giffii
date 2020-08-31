import React, { useState, useEffect, useRef } from 'react';
import { ReactComponent as Tick } from '../../../assets/images/icons/tick.svg';

interface StepperNavigationProps{
    steps: any,
    currentStep: number,
}

interface Steps{
    name?: string,
    completed?: boolean,
    active?: boolean,
    selected?: boolean
}

const Stepper: React.FC<StepperNavigationProps> = ({steps, currentStep}) => {

    const [stepss, setStepss] = useState([]);

    useEffect(() => {
        const newSteps = steps.map((step:any, i:any) => {
            const stepObj:Steps = {};
            stepObj.name = step;
            stepObj.completed = false;
            stepObj.active = i === 0 ? true : false;
            stepObj.selected = i === 0 ? true : false;
            return stepObj;
        })
        const current:any = updateStep(currentStep-1, newSteps);
        setStepss(current)
        
    }, [currentStep])

    const updateStep = (stepNumb:any, steps:any) =>{
        const newSteps = [...steps];
        let count = 0;

        while(count < newSteps.length){
            if(count === stepNumb){
                newSteps[count] = {
                    ...newSteps[count],
                    active: true,
                    selected: true,
                    completed: false,
                }
                count++
            }else if(count < stepNumb){
                newSteps[count] = {
                    ...newSteps[count],
                    active: false,
                    selected: true,
                    completed: true,
                }
                count++
            }else{
                newSteps[count] = {
                    ...newSteps[count],
                    active: false,
                    selected: false,
                    completed: false,
                }
                count++
            }
        }
        return newSteps;
    }

    return(
        <>
            {
                stepss.map((step:any, i) =>{
                    return(
                        <div className="stepper-wrapp" key={i}>
                            <div className={`desc ${step.active ? 'active' : 'disabled'} ${step.completed ? 'completed' : ''}`}>
                                {step.name}
                            </div>
                            <div className={`numb ${step.selected ? 'active' : 'disabled'} ${step.completed ? 'completed' : ''}`}>
                                {step.completed ? <span><Tick/></span> : i + 1}
                            </div>
                            <div className={`${i !== stepss.length - 1 ? 'line' : ''} ${step.completed ? 'completed' : ''}`}/>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Stepper;