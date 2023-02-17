import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { StepFormContext } from '../../../../context/StepperFormContext/StepperFormContext';
import Stepper from '../Stepper/Stepper';
import StepperControl from '../StepperControl/StepperControl';
import Account from '../Steps/Account';
import Details from '../Steps/Details';
import Final from '../Steps/Final';

const DiagnosisForm = () => {
    const testDetails = useLoaderData()
    const [currentStep, setCurrentStep] = useState(1)
    const [userData, setUserData] = useState('')
    const [finalData, setFinalData] = useState([])

    // console.log(testDetails)

    const steps = [
        'Account information',
        'personal Details',
        'Complete'
    ]

    const displayStep = (step) => {
        switch (step) {
            case 1: return <Account></Account>
            case 2: return <Details></Details>
            case 3: return <Final></Final>
            default:
        }
    }

    const handleClick = (direction) => {
        let newStep = currentStep;
        direction === 'next' ? newStep++ : newStep--;

        // check if steps are within bounds
        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    }

    return (
        <div className='md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white
        '>
            <div className='container horizontal mt-5'>
                <Stepper
                    steps={steps}
                    currentStep={currentStep}
                ></Stepper>
            </div>

            <div className='my-10 p-10'>
                <StepFormContext.Provider value={{
                    userData,
                    setUserData,
                    finalData,
                    setFinalData
                }}>
                    {displayStep(currentStep)}
                </StepFormContext.Provider>
            </div>

            {currentStep !== steps.length && (
                <StepperControl
                    handleClick={handleClick}
                    steps={steps}
                    currentStep={currentStep}
                ></StepperControl>
            )}

        </div>
    );
};

export default DiagnosisForm;