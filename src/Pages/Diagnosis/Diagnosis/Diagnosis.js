import React from 'react';
import DiagnosisCards from '../DiagnosisCards/DiagnosisCards';
import bg from '../DiagnosisImages/diafnosisBg.jpg'

const Diagnosis = () => {
    return (
        <div className=''
            style={{
                background: `url(${bg})`
            }}>

            <DiagnosisCards></DiagnosisCards>
        </div>
    );
};

export default Diagnosis;