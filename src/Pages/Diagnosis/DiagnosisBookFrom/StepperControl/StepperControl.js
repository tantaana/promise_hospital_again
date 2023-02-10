import React from 'react';

const StepperControl = ({ handleClick, steps, currentStep }) => {
    return (
        <div className='container flex justify-around mt-4 mb-8'>
            <button onClick={() => handleClick()} className={`btn btn-outline btn-secondary ${currentStep === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}>BACK</button>

            <button onClick={() => handleClick('next')} className="btn btn-secondary">
                {currentStep === steps.length - 1 ? 'Confirm' : 'NEXT'}
            </button>

        </div>
    );
};

export default StepperControl;