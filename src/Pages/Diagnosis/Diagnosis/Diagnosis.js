import React from 'react';
import DiagnosisForm from '../DiagnosisBookFrom/DiagnosisForm/DiagnosisForm';
import Stepper from '../DiagnosisBookFrom/Stepper/Stepper';
import StepperControl from '../DiagnosisBookFrom/StepperControl/StepperControl';
import DiagnosisCards from '../DiagnosisCards/DiagnosisCards';
import bg from '../DiagnosisImages/diafnosisBg.jpg'

const Diagnosis = () => {
    return (
        <div className=''
            style={{
                background: `url(${bg})`
            }}>
            <DiagnosisCards></DiagnosisCards>
            {/* <DiagnosisForm></DiagnosisForm> */}
        </div>
    );
};

export default Diagnosis;