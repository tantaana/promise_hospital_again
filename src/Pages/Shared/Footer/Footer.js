import React from 'react';

const Footer = () => {
    return (
        <div className='text-white mt-10' style={{ background: '#413d3d' }}>
            <footer className="footer p-10 ">
                <div>
                    <span className="footer-title">About Promise Hospital</span>
                    <a href="/" className="link link-hover">About Us</a>
                    <a href="/" className="link link-hover">Leadership</a>
                    <a href="/" className="link link-hover">Doctors</a>
                    <a href="/" className="link link-hover">Specialities</a>
                </div>
                <div>
                    <span className="footer-title">Our Offerings</span>
                    <a href="/" className="link link-hover">Health Packages</a>
                    <a href="/" className="link link-hover">Visa Assistance</a>
                    <a href="/" className="link link-hover">Discharge and Departure</a>
                    <a href="/" className="link link-hover">Worldwide Insurance Partners</a>
                    <a href="/" className="link link-hover">Accommodation and Transport</a>
                    <a href="/" className="link link-hover">Arrival Processes</a>
                </div>
                <div>
                    <span className="footer-title">Our Locations</span>
                    <a href="/" className="link link-hover">Old Airport Road - Dhaka</a>
                    <a href="/" className="link link-hover">Chittagong</a>
                    <a href="/" className="link link-hover">Rajshahi</a>
                    <a href="/" className="link link-hover">Khulna</a>
                    <a href="/" className="link link-hover">Barishal</a>
                    <a href="/" className="link link-hover">Sylhet</a>
                </div>
                <div>
                    <span className="footer-title">Centre of Excellence</span>
                    <a href="/" className="link link-hover">Cardiology and Cardiac Surgery</a>
                    <a href="/" className="link link-hover">Cardiothoracic Vascular Surgery</a>
                    <a href="/" className="link link-hover">Comprehensive Cancer Care</a>
                    <a href="/" className="link link-hover">Gastrointestinal Sciences</a>
                    <a href="/" className="link link-hover">Laparoscopic Surgery</a>
                    <a href="/" className="link link-hover">Liver Transplantation Surgery</a>
                    <a href="/" className="link link-hover">Nephrology</a>
                    <a href="/" className="link link-hover">Neurology and Neurosurgery</a>
                    <a href="/" className="link link-hover">Organ Transplants</a>
                    <a href="/" className="link link-hover">Orthopaedics (Joints & Trauma)</a>
                    <a href="/" className="link link-hover">Rheumatology</a>
                    <a href="/" className="link link-hover">Spine Care</a>
                    <a href="/" className="link link-hover">Urology</a>
                </div>
                <div>
                    <span className="footer-title">International Contact Centers</span>
                    <a href="/" className="link link-hover">India</a>
                    <a href="/" className="link link-hover">Nigeria</a>
                    <a href="/" className="link link-hover">Burundi</a>
                    <a href="/" className="link link-hover">Tanzania</a>
                    <a href="/" className="link link-hover">Uganda</a>
                    <span className="footer-title">Talk to us</span>
                    <a href="/" className="link link-hover">Send Enquiry</a>
                    <a href="/" className="link link-hover">Request A Callback</a>
                    <a href="/" className="link link-hover">Talk to our COO/Feedback</a>
                    <a href="/" className="link link-hover">Contact Us</a>
                </div>
            </footer>
            <footer className="footer px-10 py-4">
                <div className="items-center md:grid-flow-col grid-cols-1">
                    <div className="flex gap-2">
                        <a href='/'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                        </a>
                        <a href='/'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                        <a href='/'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                    </div>
                    <div>
                        <p>Copyright © 2023 Promise Hospital - All Rights Reserved</p>
                    </div>
                </div>
                <div className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <a href="/">CSR POLICY</a>|<a href="/">DISCLAIMER</a>|<a href="/">PRIVACY</a>|<a href="/">T&C</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;