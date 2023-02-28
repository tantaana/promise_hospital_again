import React from 'react'

const TestsIncluded = ({ packagesDetails }) => {

    return (
        <div className='bg-blue-500 lg:p-16 sm:p-5 pt-0'>
            {

                <div className='bg-white p-10 rounded-md'>
                    <div>
                        <h2 className='text-4xl text-center text-blue-500 font-bold mb-8'>Tests Included</h2>
                    </div>
                    <div className='lg:flex sm:grid justify-between'>
                        <div className='text-xl'>
                            {/* {
                                test1.map(test => <li className='mb-1'>{test}</li>)
                            } */}
                            <li>Complete Blood Counts (Automated)</li>
                            <li>Blood Sugar (FBS)</li>
                            <li>Peripheral Smear Examination</li>
                            <li>Blood Grouping & Rh Typing</li>
                            <li>Thyroid Profile(T3 T4 Tsh)</li>
                            <li>Glycated Haemoglobin(Hba1C)</li>
                            <li>Urine Routine and Microscopy(Qualitative Method)</li>
                            <li>Electorlytes (Na, K & CI)</li>
                            <li>Vitamin B12</li>
                            <li>Total Vitamin D</li>
                            <li>Iron with TIBC</li>
                            <li>Ferritin</li>
                        </div>
                        <div className='text-xl'>
                            {/* {
                                test2.map(test => <li className='mb-1'>{test}</li>)
                            } */}
                            <li>Lipoprotein</li>
                            <li>Hepatiti B Surface Antigen(Hbsag) - Elisa</li>
                            <li>Human Immnuo Virus (HIVI +II) - Elisa</li>
                            <li>Rheumatoid Factor Assay</li>
                            <li>Kidney Profile</li>
                            <li>Lipid Pofile</li>
                            <li>Liver Functional Test</li>
                            <li>Xray Chest PA (CXR)</li>
                            <li>Xray Knee AP(bilateral)</li>
                            <li>Ultrasound abdemen & Pelvis</li>
                            <li>Pure Tone Audiogram</li>
                            <li>ECG - Adult</li>
                        </div>
                        <div className='text-xl'>
                            {/* {
                                test3.map(test => <li className='mb-1'>{test}</li>)
                            } */}
                            <li>Echo-Cardiogram</li>
                            <li>Tread Mill Test</li>
                            <li>HC Diet Consultation</li>
                            <li>Consultation Dental - Medicine</li>
                            <li>Consultation - Cardiology</li>
                            <li>Consultation - Opthalmology</li>
                            <li>Hc Physical Examination</li>
                            <li>Consultation Internal Medicine</li>
                            <li>Consultation Gastro Medical</li>
                            <li>Consultation Orthopaedics</li>
                            <li>Consultation Respiratory Medicine</li>
                            <li>Ogd With Biopsy</li>
                            <li>Pulmonary Functional Test</li>
                            <li>Dexa Whole Body</li>
                            <li>Ultrasound Breast</li>
                            <li>Mammogram Both Breast</li>
                            <li>Pap Smear</li>
                            <li>Consultation Obg</li>
                        </div>
                    </div>
                    <div className='text-center'>
                        <label htmlFor="packages-book" className='btn bg-primary hover:bg-primary border-none text-white font-semibold mt-5'>Make an Enquiry</label>
                    </div>
                </div>
            }
        </div>
    )
}

export default TestsIncluded