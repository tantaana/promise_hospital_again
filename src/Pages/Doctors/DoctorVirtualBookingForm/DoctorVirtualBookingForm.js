import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
// import imgCircle from '../../../assets/loading-circle.gif'
import imgCircle from '../../../assets/loading-circle.gif'

const DoctorVirtualBookingForm = ({ anotherLoader }) => {
    console.log(anotherLoader.doctor_email)
    const { user } = useContext(AuthContext);
    console.log(user)
    // REACT_APP_imgbb_key=e346ac8df76e30d9061204950128b025
    const imageHostKey = `e346ac8df76e30d9061204950128b025`;

    const [treatDate, setTreatDate] = useState('');

    const [loader, setLoader] = useState(false);


    const handleChange = event => {
        setTreatDate(event.target.value);
    };


    const modalClose = () => {
        const elem = document.activeElement;
        if (elem) {
            elem?.blur();
        }
    };


    const handlePatient = event => {
        event.preventDefault();
        setLoader(true);
        const allData = event.target;
        const patientName = allData.patientName.value;
        const patientEmail = allData.patientEmail.value;
        const patientNumber = allData.patientNumber.value;
        const country = allData.country.value;
        const language = allData.language.value;
        const docName = allData.docName.value;
        const docLocation = allData.docLocation.value;
        const healthInfo = allData.healthInfo.value;
        const imageMedical = allData.medicalReport.files[0];
        const appointDate = allData.appointDate.value;
        const fees = anotherLoader?.fees;
        const doctorImg = anotherLoader?.doctorImg;

        const formData = new FormData();
        formData.append('image', imageMedical);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`

        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData)
                if (imgData.success) {

                    const addPatient = {
                        patientName: patientName,
                        patientEmail: patientEmail,
                        patientNumber: patientNumber,
                        country: country,
                        language: language,
                        docName: docName,
                        doctorImg: doctorImg,
                        docLocation: docLocation,
                        healthInfo: healthInfo,
                        imageMedical: imgData.data.url,
                        appointDate: appointDate,
                        fees: fees,
                        doctor_email: anotherLoader.doctor_email
                    }




                    //save patient information to the database
                    fetch('https://promise-hospoital-server-jahid900pj.vercel.app/virtualAppointmentData', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(addPatient)
                    })
                        .then(res => res.json())
                        .then(data => {

                            if (data.acknowledged) {
                                setLoader(false);
                                toast.success('Appointment has been booked successfully')
                                setTimeout(() => {
                                    window.location.reload()
                                }, 2000);
                            }
                        })

                }
            })
    }
    return (
        <div className="cardbg-white mx-8">
            <input type="checkbox" id="doctor-virtual-book-modal" className="modal-toggle" />
            <form onSubmit={handlePatient} className="modal">
                <div className="modal-box relative w-11/12 max-w-6xl rounded-sm  border border-l-blue-900 border-t-blue-900 border-r-teal-500 border-b-teal-500 border-4">
                    <label htmlFor="doctor-virtual-book-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h2 className='text-3xl font-semibold text-blue-900 text-center mb-10'>Virtual Appointment Form</h2>

                    <div className="">

                        <h2 className='ml-6 text-xl font-semibold text-black'>Personal Information*</h2>
                        <div className="fast-input-fild grid gap-10 lg:grid-cols-3 py-8">
                            <div className="mt-2">
                                <span className="primary-color font-semibold">Patients Name</span>
                                <input type="text" name='patientName' placeholder="Enter Name" className="block mt-2 input bg-white border-gray-400 border input-bordered input-sm w-full " defaultValue={user?.displayName} readOnly />
                            </div>
                            <div className="mt-2">
                                <span className="primary-color font-semibold">Patients Email ID</span>
                                <input type="email" name='patientEmail' placeholder="Enter email ID" className="block mt-2 input bg-white border-gray-400 border input-bordered input-sm w-full " defaultValue={user?.email} readOnly />
                            </div>
                            <div className="mt-2">
                                <span className="primary-color font-semibold">Patients Contact Number</span>
                                <input type="number" name='patientNumber' placeholder="Enter Contact Number" className="block mt-2 input bg-white border-gray-400 border input-bordered input-sm w-full max-w-xs" required />
                            </div>

                            <div className="mt-2">
                                <span className="primary-color font-semibold">Country</span>
                                <select name='country' className="select select-bordered block bg-white mt-2 border-gray-400 border select-sm w-full" required>
                                    <option value="" disabled selected>Select a country</option>
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="Cameroon">Cameroon</option>
                                    <option value="India">India</option>
                                    <option value="Iraq">Iraq</option>
                                    <option value="Maldives">Maldives</option>
                                    <option value="Sri Lanka">Sri Lanka</option>
                                    <option value="Uganda">Uganda</option>
                                </select>
                            </div>

                            <div className="mt-2">
                                <span className="primary-color font-semibold">Preferred Language</span>
                                <select name='language' className="select select-bordered block bg-white mt-2 border-gray-400 border select-sm w-full" required>
                                    <option value="" disabled selected>Select a language</option>
                                    <option value="English">English</option>
                                    <option value="French">French</option>
                                    <option value="Hindi">Hindi</option>
                                    <option value="Bangla">Bangla</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="py-8">
                        <h2 className='ml-6 text-xl font-semibold text-black'>Consultation Details</h2>
                        <div className="fast-input-fild grid gap-10 lg:grid-cols-3 py-8">
                            <div className="mt-2">
                                <span className="primary-color font-semibold">Preferred Doctor</span>
                                <input type="text" name='docName' placeholder="" className="block mt-2 input bg-white border-gray-400 border input-bordered input-sm w-full" defaultValue={anotherLoader?.name} readOnly />
                            </div>
                            <div className="mt-2">
                                <span className="primary-color font-semibold">Preferred Location</span>
                                <input type="text" name='docLocation' placeholder="Enter your location" className="block mt-2 input bg-white border-gray-400 border input-bordered input-sm w-full " defaultValue={anotherLoader?.location} readOnly />
                            </div>
                        </div>

                        <div className="py-8">
                            <span className="primary-color font-semibold ">Health Issue <span className='text-black'>(Write within 100 words)</span></span>
                            <textarea name='healthInfo' className="textarea block bg-white border-gray-400 border w-full mt-2" placeholder="Tell us about your health issue" required></textarea>
                        </div>
                    </div>

                    <div className="py-8">
                        <h2 className='ml-6 text-xl font-semibold text-black'>Documents Upload & Date Selection</h2>
                        <div className="fast-input-fild grid gap-10 md:grid-cols-2 py-8">
                            {/* <div className="mt-2">
                            <h2 className="primary-color font-semibold mb-2">Patients Passport</h2>
                            <input name='passportPic' type="file" className="block w-full text-sm text-black border border-blue-900 rounded-lg
  file:mr-4 file:py-2 file:px-4
  file:rounded-lg file:border-0
  file:text-sm file:font-semibold
  file:bg-gradient-to-r file:from-blue-900 file:to-teal-500 hover:file:bg-gradient-to-r hover:file:from-teal-500 hover:file:to-teal-500 file:text-white" required />
                        </div> */}
                            <div className="mt-2">
                                <h2 className="primary-color font-semibold mb-2">Recent Medical Reports</h2>
                                <input name='medicalReport' type="file" className="block w-full text-sm text-black border border-blue-900 rounded-lg
  file:mr-4 file:py-2 file:px-4
  file:rounded-lg file:border-0
  file:text-sm file:font-semibold
  file:bg-gradient-to-r file:from-blue-900 file:to-teal-500 hover:file:bg-gradient-to-r hover:file:from-teal-500 hover:file:to-teal-500 file:text-white" required />
                            </div>

                            <div className='border border-black'>
                                <h2 className='text-lg font-semibold text-white text-center bg-blue-900 p-2 mb-4'>Select your availability date *</h2>

                                <div className='flex justify-center items-center'>
                                    <input onChange={handleChange} type="date" name="appointDate" min="2023-02-03" max="2030-04-30" className='m-3' id="" required />
                                </div>

                                <div className='flex justify-center'>
                                    <h2 className='text-xl font-semibold text-blue-900 mb-3'>{treatDate ? <p>You have selected <span className='font-bold text-black'>{treatDate}</span></p>
                                        : <p className='text-xl font-semibold text-blue-900'>Please pick a date.</p>}</h2>
                                </div>


                            </div>
                        </div>
                    </div>

                    <div className='bg-blue-400 py-10 border border-blue-900 border-4'>
                        <h2 className='text-2xl font-semibold text-center text-white'>Consultation fees <span className='text-4xl font-semibold text-black'>{anotherLoader?.fees}/-</span> only</h2>
                    </div>



                    <div>

                    </div>

                    <div className='flex justify-center items-center gap-2 mt-10'>
                        <input className='btn btn-primary btn-lg bg-gradient-to-r from-blue-900 to-teal-500 hover:bg-gradient-to-r hover:from-teal-500 hover:to-teal-500 text-white font-semibold w-1/4' type="submit" value="Submit" />
                        <h2 className=''>{loader ? <img src={imgCircle} className="w-[40px]" alt="" /> : ''}</h2>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default DoctorVirtualBookingForm;