import React, { useContext } from 'react';
import { StepFormContext } from '../../../../context/StepperFormContext/StepperFormContext';

const StepperControl = ({ handleClick, steps, currentStep }) => {
    // const { userData, setUserData } = useContext(StepFormContext);

    const handleConfirm = () =>{
        console.log('hi')
    }
    return (
        <div className='container flex justify-around mt-4 mb-8'>
            <button onClick={() => handleClick()} className={`btn btn-outline btn-secondary ${currentStep === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}>BACK</button>

            {
                currentStep === steps.length - 1 ? <div onClick={() => handleConfirm()}> <button onClick={() => handleClick('next')} className="btn btn-secondary">
                    confirm
                </button> </div> : <button onClick={() => handleClick('next')} className="btn btn-secondary">
                    Next
                </button>
            }
        </div>
    );
};

export default StepperControl;