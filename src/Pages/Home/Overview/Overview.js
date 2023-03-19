import React from 'react';

const Overview = () => {
    return (
        <div className='my-28'>
            <div className='mx-4 md:mx-20 lg:mx-40 xl:mx-60 2xl:mx-96' >
                <div className=' '>
                    <h2 className='text-3xl font-bold text-center mb-6' style={{ color: '#1e3a8a' }}>Overview</h2>
                    <div className='border-b-4 border-t-4 rounded-md border-teal-500 py-10'>
                        <p className='text-justify text-md lg:text-lg font-medium'>Thousands of International patients visit <span className='text-blue-900 font-bold'>Promise</span> <span className='text-teal-500 font-bold'>Hospital</span> in Bangladesh for medical treatment every year.
                            The patients travel to our hospital for sophisticated heart surgery, cancer treatment, organ transplantation,
                            treatment for infertility, orthopaedic surgery, neurology, treatment for kidney diseases, and general health check-up.
                            Book an appointment for the best treatment.
                        </p>
                        <br />
                        <p className='text-justify text-md lg:text-lg font-medium'><span className='text-blue-900 font-bold'>Promise</span> <span className='text-teal-500 font-bold'>Hospital</span> is at the forefront of medical tourism in Bangladesh.
                            We provide world-class treatment by qualified surgeons and specialists at less than half the cost of that in developed nations.
                            With a network of more than 28 hospitals across 15+ cities in Bangladesh, we are the first choice for International patients.
                            We offer full support and assistance at every step of the treatment right from enquiry to visa assistance and accommodation for
                            patients from outside Bangladesh so that they can get quality treatment without any worries.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Overview;