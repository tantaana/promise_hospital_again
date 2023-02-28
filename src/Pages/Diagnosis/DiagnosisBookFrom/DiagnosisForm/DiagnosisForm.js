import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { StepFormContext } from '../../../../context/StepperFormContext/StepperFormContext';
import Stepper from '../Stepper/Stepper';
import StepperControl from '../StepperControl/StepperControl';
import Account from '../Steps/Account';
import Details from '../Steps/Details';
import Final from '../Steps/Final';
import formbg from '../../DiagnosisImages/diagnosisFrom.png'

const DiagnosisForm = () => {
    const testDetails = useLoaderData()
    const [currentStep, setCurrentStep] = useState(1)
    const [userData, setUserData] = useState('')
    const [finalData, setFinalData] = useState([])

    console.log(testDetails)
    // console.log(userData)
    const handleTest = event => {
        console.log(userData)
    }

    const steps = [
        'Basic',
        'personal Details',
        'Complete'
    ]
    const hh = false
    const displayStep = (step) => {
        switch (step) {
            case 1: return <Account key={testDetails._id} price={testDetails?.price} testName={testDetails?.title}></Account>
            case 2: return <Details></Details>
            case 3: if (hh === true) { return <Final></Final> } else { }
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
        <div className='pt-10 pb-20' style={{
            background: `url(${formbg})`
        }}>
            <div className='md:w-1/2 mx-auto shadow-2xl rounded-2xl  pb-2 
        '  >
                <div className=''>
                    <div className='container horizontal '>
                        <Stepper
                            hh={hh}
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
                            handleTest={handleTest}
                            handleClick={handleClick}
                            steps={steps}
                            currentStep={currentStep}
                        ></StepperControl>
                    )}


                </div>
            </div>
        </div>
    );
};

export default DiagnosisForm;