import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import '../../Dashboard/Dashboard.css'

const AddDoctors = () => {
    const specialityList = [
        { category_id: '01', speciality: 'Bariatric Surgery' },
        { category_id: '02', speciality: 'Cardiology & Cardiac Surgery' },
        { category_id: '03', speciality: 'Cardiothoracic Vascular Surgery' },
        { category_id: '04', speciality: 'Comprehensive Cancer Care' },
        { category_id: '05', speciality: 'Dermatology' },
        { category_id: '06', speciality: 'Diabetes & Endocrinology' },
        { category_id: '07', speciality: 'Ear, Nose & Throat' },
        { category_id: '08', speciality: 'Gastrointestinal Sciences' },
        { category_id: '09', speciality: 'General Surgery' },
        { category_id: '10', speciality: 'Internal Medicine' },
        { category_id: '11', speciality: 'Laparoscopic Surgery' },
        { category_id: '12', speciality: 'Liver Transplantation Surgery' },
        { category_id: '13', speciality: 'Nephrology' },
        { category_id: '14', speciality: 'Neurology & Neurosurgery' },
        { category_id: '15', speciality: 'Ophthalmology' },
        { category_id: '16', speciality: 'Organ Transplants' },
        { category_id: '17', speciality: 'Orthopaedics' },
        { category_id: '18', speciality: 'Plastic & Cosmetic Surgery' },
        { category_id: '19', speciality: 'Psychiatry' },
        { category_id: '20', speciality: 'Pulmonology' },
        { category_id: '21', speciality: 'Rheumatology' },
        { category_id: '22', speciality: 'Spine Care' },
        { category_id: '23', speciality: 'Urology' },
    ];

    const locationList = [
        { _id: '1', location: 'Dhaka' },
        { _id: '2', location: 'Chittagong' },
        { _id: '3', location: 'Rajshahi' },
        { _id: '4', location: 'Khulna' },
        { _id: '5', location: 'Barisal' },
        { _id: '6', location: 'Sylhet' },
        { _id: '7', location: 'Mymensingh' },
        { _id: '8', location: 'Rangpur' }
    ]


    const [loader, setLoader] = useState(false);

    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const navigate = useNavigate();

    const addDoctor = event => {
        event.preventDefault();
        setLoader(true);
        const allData = event.target;
        const name = allData.name.value;
        const docURL = allData.docURL.value;
        const speciality = allData.speciality.value;
        const position = allData.position.value;
        const qualification = allData.qualification.value;
        const location = allData.location.value;
        const doctorImg = allData.doctorImg.files[0];
        const fees = allData.fees.value;

        const fellowship = allData.fellowship.value;
        const expertise = allData.expertise.value;
        const languages = allData.languages.value;
        const publications = allData.publications.value;
        const awards = allData.awards.value;

        console.log(name, speciality, position, qualification, location, doctorImg, fees, fellowship, expertise, languages, publications, awards)

        const formData = new FormData();
        formData.append('image', doctorImg);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`

        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData)
                if (imgData.success) {

                    const addDoctors = {
                        name: name,
                        docURL: docURL,
                        speciality: speciality,
                        position: position,
                        qualification: qualification,
                        location: location,
                        doctorImg: imgData.data.url,
                        fees: fees,
                        others: {
                            fellowship: fellowship,
                            expertise: expertise,
                            languages: languages,
                            publications: publications,
                            awards: awards
                        }
                    }




                    //save doctor's information to the database
                    fetch('https://promise-hospoital-server-jahid900pj.vercel.app/addDoctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(addDoctors)
                    })
                        .then(res => res.json())
                        .then(data => {

                            if (data.acknowledged) {
                                setLoader(false);
                                toast.success('Doctor has been added successfully')
                                setTimeout(() => {
                                    // window.location.reload();
                                    navigate('/doctors');
                                }, 1500);
                            }
                        })

                }
            })
    }



    return (
        <div className='my-10 dashboardBg'>
            <h2 className='text-3xl font-bold text-center mb-20 text-blue-900'>Add a Doctor</h2>
            <form onSubmit={addDoctor} className='flex justify-center border-4 border-blue-900 mx-4 py-10 rounded-xl' action="">
                <div className='my-4 w-full mx-6'>

                    <div className='flex justify-center'>
                        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-6 xl:w-11/12 2xl:w-5/6'>
                            <div className=''>
                                <h2 className='text-xl font-semibold mb-2'>Doctor's Name<span className='text-red-500'>*</span> 🖋️</h2>
                                <input type="text" name="name" placeholder="Type a doctor's name" className="input input-bordered input-primary w-full max-w-xs" required />

                            </div>

                            <div className=''>
                                <h2 className='text-xl font-semibold mb-2'>Doctor's Speciality<span className='text-red-500'>*</span> ✨</h2>
                                {/* <input type="text" name="sepecilaty" placeholder="Type doctor's speciality" className="input input-bordered input-primary w-full max-w-xs" /> */}
                                <div>
                                    <select name='speciality' className="select select-primary w-full max-w-xs" required>
                                        <option value="" disabled selected className='text-gray-400'>Select doctor's speciality/section</option>

                                        {
                                            specialityList.map(speciality =>
                                                <option key={speciality.category_id} value={speciality.speciality}>{speciality.speciality}</option>)
                                        }
                                    </select>
                                </div>

                            </div>

                            <div className=''>
                                <h2 className='text-xl font-semibold mb-2'>Doctor's Position<span className='text-red-500'>*</span> 💉🩺</h2>
                                <textarea name="position" placeholder="Type doctor's position (Ex: Head Consultant, Consultant, Surgeon etc.)" className="textarea textarea-primary w-full max-w-xs h-[70px]" required></textarea>
                                <h2 className='text-center text-sm w-full max-w-xs'>Use <span className='font-bold text-sm'>|</span> for more information</h2>

                            </div>

                            <div className=''>
                                <h2 className='text-xl font-semibold mb-2'>Doctor's Qualification<span className='text-red-500'>*</span> 📝</h2>
                                <textarea name="qualification" placeholder="Type doctor's qualification (Ex: MBBS, FCPS, MS)" className="textarea textarea-primary w-full max-w-xs h-[70px]" required></textarea>
                                <h2 className='text-center text-sm w-full max-w-xs'>Use <span className='font-bold text-sm'>|</span> for more information</h2>

                            </div>

                            <div className=''>
                                <h2 className='text-xl font-semibold mb-2'>Doctor's Location<span className='text-red-500'>*</span> 🏥</h2>
                                <div>
                                    <select name='location' className="select select-primary w-full max-w-xs" required>
                                        <option value="" disabled selected className='text-gray-400'>Select doctor's location</option>

                                        {
                                            locationList.map(location =>
                                                <option key={location._id} value={location.location}>{location.location}</option>)
                                        }
                                    </select>
                                </div>

                            </div>

                            <div className=''>
                                <h2 className='text-xl font-semibold mb-2'>Doctor's Image<span className='text-red-500'>*</span> 📸</h2>
                                <input type="file" name="doctorImg" className="block w-full text-lg text-black border border-blue-400 rounded-lg
      file:mr-4 file:py-2 file:px-4
      file:rounded-lg file:border-0
      file:text-md file:font-semibold file-input-md
      file:bg-gradient-to-r file:from-blue-900 file:to-teal-500 hover:file:bg-gradient-to-r hover:file:from-teal-500 hover:file:to-teal-500 file:text-white max-w-xs" required />

                            </div>

                            <div className=''>
                                <h2 className='text-xl font-semibold mb-2'>Consultation Fees<span className='text-red-500'>*</span> 💰</h2>
                                <input type="number" name="fees" placeholder="Type doctor's fees" className="input input-bordered input-primary w-full max-w-xs" required />

                            </div>

                            <div className=''>
                                <h2 className='text-xl font-semibold mb-2'>Doctor's URL<span className='text-red-500'>*</span> 🖋️</h2>
                                <textarea name="docURL" placeholder="Write doctor's URL for website view (Ex: manik_mia, sanjoy_sen)" className="textarea textarea-primary w-full max-w-xs h-[70px]" required></textarea>
                                <h2 className='w-full max-w-xs text-center text-sm'>Use <span className='font-bold text-xl'>__</span> instead space</h2>

                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <div className="w-3/4 border-blue-900 border-2 p-0 my-10"></div>
                    </div>

                    <h2 className='text-3xl font-bold text-center mb-8'>Additional Information</h2>
                    <div className='flex justify-center'>
                        <div className='grid grid-cols-1 2xl:grid-cols-2 gap-6 w-full xl:w-11/12 2xl:w-5/6 border border-teal-500 p-6 rounded-xl'>
                            <div className=''>
                                <h2 className='text-xl font-semibold mb-2'>Fellowship & Membership 👨🏽‍⚕️</h2>
                                <textarea name="fellowship" placeholder="Write doctor's fellowship & membership information" className="textarea textarea-primary w-full h-[70px]"></textarea>
                                <h2 className='text-center text-sm'>Use <span className='font-bold text-sm'>|</span> for more information</h2>

                            </div>

                            <div className=''>
                                <h2 className='text-xl font-semibold mb-2'>Field of Expertise ✨</h2>
                                <textarea name="expertise" placeholder="Write doctor's various fields of expertise" className="textarea textarea-primary w-full h-[70px]"></textarea>
                                <h2 className='text-center text-sm'>Use <span className='font-bold text-sm'>|</span> for more information</h2>

                            </div>

                            <div className=''>
                                <h2 className='text-xl font-semibold mb-2'>Languages Spoken 🆎🈲</h2>
                                <textarea name="languages" placeholder="Write how many languages the doctor can speak" className="textarea textarea-primary w-full h-[70px]"></textarea>
                                <h2 className='text-center text-sm'>Use <span className='font-bold text-sm'>|</span> for more information</h2>

                            </div>

                            <div className=''>
                                <h2 className='text-xl font-semibold mb-2'>Talks & Publications 📝</h2>
                                <textarea name="publications" placeholder="Write doctor's different talks & publications" className="textarea textarea-primary w-full h-[70px]"></textarea>
                                <h2 className='text-center text-sm'>Use <span className='font-bold text-sm'>|</span> for more information</h2>

                            </div>

                            <div className=''>
                                <h2 className='text-xl font-semibold mb-2'>Awards & Achievements 🎖️</h2>
                                <textarea name="awards" placeholder="Write doctor's all achievements & awards" className="textarea textarea-primary w-full h-[70px]"></textarea>
                                <h2 className='text-center text-sm'>Use <span className='font-bold text-sm'>|</span> for more information</h2>

                            </div>
                        </div>
                    </div>

                    <div className='flex  flex-col justify-center items-center gap-6'>
                        <h2 className='mt-6'>
                            {
                                loader ?
                                    <div class="flex flex-col">
                                        <div class="w-12 h-12 rounded-full animate-spin
                        border-4 border-solid border-green-500 border-t-transparent shadow-md"></div>


                                    </div>
                                    : ''
                            }
                        </h2>
                        <input className='btn btn-primary btn-lg bg-gradient-to-r from-blue-900 to-teal-500 hover:bg-gradient-to-r hover:from-teal-500 hover:to-teal-500 text-white font-semibold w-[200px] lg:w-[300px]' type="submit" value="Add Doctor" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddDoctors;