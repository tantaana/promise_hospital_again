import React from 'react';

const StepperControl = ({ handleClick, steps, currentStep, handleTest }) => {
    return (
        <div className='container flex justify-around mt-4 mb-8'>
            <button onClick={() => handleClick()} className={`btn btn-outline btn-secondary ${currentStep === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}>BACK</button>

            {
                currentStep === steps.length - 1 ? <div onClick={() => handleTest()}> <button onClick={() => handleClick('next')} className="btn btn-secondary">
                    confirm
                </button> </div> : <button onClick={() => handleClick('next')} className="btn btn-secondary">
                    Next
                </button>
            }
        </div>
    );
};

export default StepperControl;