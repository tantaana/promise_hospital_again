import React from 'react';
import overviewBg from '../Gallery/gelleryImg/bg.jpeg'

const Overview = () => {
    return (
        <div style={
            { background: `url(${overviewBg})`, }
        }>
            <div className='py-8 px-2   sm:px-64 md:px-64  ' >
                <div className=' '>
                    <h2 className='text-3xl font-semibold text-center mb-2' style={{ color: '#0038FF' }}>Overview</h2>
                    <div className='text-base'>
                        <p cl>Thousands of International patients visit Manipal Hospitals in India for medical treatment every year.
                            The patients travel to our hospitals for sophisticated heart surgery, cancer treatment, organ transplantation,
                            treatment for infertility, orthopaedic surgery, neurology, treatment for kidney diseases, and general health check-up.
                            Book an appointment for the best treatment.
                        </p>
                        <br />
                        <p className='text-base'>
                            Manipal Hospitals is at the forefront of medical tourism in India.
                            We provide world-class treatment by qualified surgeons and specialists at less than half the cost of that in developed nations.
                            With a network of more than 28 hospitals across 15+ cities in India, we are the first choice for International patients.
                            We offer full support and assistance at every step of the treatment right from enquiry to visa assistance and accommodation for
                            patients from outside India so that they can get quality treatment without any worries.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Overview;