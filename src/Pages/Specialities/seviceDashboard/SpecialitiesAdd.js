import { Input } from 'postcss';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import bg from '../../../Pages/Specialities/SpecialitiesImg/spbg.jpg'
import toast from 'react-hot-toast';
import AllServiceShow from './AllServiceShow';

const SpecialitiesAdd = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const [error, setError] = useState('');
    const imageHostKey = process.env.REACT_APP_imgbb;

    const handleSpecialitiesAdd = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            // fetch(url2, {
            //     method: 'POST',
            //     body: formData2
            // })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);

                    const service = {
                        name: data.name,
                        amount: data.amount,
                        docName: data.docName,
                        title: data.title,
                        qualification: data.qualification,
                        email: data.email,
                        det: data.det,
                        image: imgData.data.url,
                        docImg: imgData.data.url2,



                    }

                    fetch('http://localhost:5000/specialities', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(service)

                    })
                        .then(res => res.json())
                        .then(data => {
                            setError('');
                            console.log(data)
                            toast.success('Service added successfully');
                            //navigate(from, { replace: true });


                        })

                }
            })

    }

    return (
        <div className=''>

            <div>
                <div className='   '
                    style={
                        {
                            background: `url(${bg})`,
                            padding: 20,
                            height: '100%',

                        }
                    }>
                    <div>
                        <p className='text-2xl mb-2  font-bold text-cyan-700 border-b-4  text-center justify-center  border-spacing-6'>Add Your Special Service</p>
                    </div>
                    <form className=' ' onSubmit={handleSubmit(handleSpecialitiesAdd)}>

                        <div className='grid lg:grid-cols-2 grid-cols-1'>
                            <div className='ml-7'>
                                <label ><b className='text-cyan-700 font-bold ml-2'>Service Name</b></label><br></br>
                                <input name="name" type="text"   {...register("name", {
                                    required: "productName is Required"
                                })}
                                    placeholder="Service Name" className="input input-bordered input-accent w-full mt-3 text-lg" />
                                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                                <br />
                                <label ><b className='text-cyan-700 font-bold ml-2'>Service Title</b></label><br></br>
                                <input name="title" type="text"  {...register("title", {
                                    required: "title is Required"
                                })} placeholder="Service Title" className="input input-bordered input-accent w-full mt-3 text-lg" />
                                {errors.title && <p className='text-red-600'>{errors.title?.message}</p>}
                                <br />

                                <label ><b className='text-cyan-700 font-bold ml-2'>Service Cost</b></label><br></br>
                                <input name="amount" type="text"   {...register("amount", {
                                    required: "Cost is Required"
                                })}
                                    placeholder="Total Cost" className="input input-bordered input-accent w-full mt-3 text-lg" />
                                {errors.amount && <p className='text-red-500'>{errors.amount.message}</p>}
                                <br />

                            </div>
                            <div className='ml-52'>
                            <label ><b className='text-cyan-700 font-bold ml-2'>Service Image</b></label><br></br>
                                <input name="image" type="file"  {...register("image", {
                                    required: "image is required"
                                })} className="form-control-file p-3 input input-bordered input-accent w-80  h-36  mt-3 text-lg" id="exampleFormControlFile1" />
                                {errors.image && <p className='text-red-600'>{errors.image?.message}</p>}
                                <br />
                            </div>

                        </div>
                        <div className='ml-6'>




                            {/* <label ><b>Doctor Name</b></label><br></br>
                            <input name="docName" type="text"  {...register("docName", {
                                required: "name is Required"
                            })} placeholder="Doctor Name" className="input input-bordered input-accent w-full mt-3 text-lg" />
                            {errors.docName && <p className='text-red-600'>{errors.docName?.message}</p>}
                            <br />
                            <label ><b>Doctor Qualification</b></label><br></br>
                            <input name="reprice" type="text"  {...register("qualification", {
                                required: "qualification is Required"
                            })} placeholder="Qualification" className="input input-bordered input-accent w-full mt-3 text-lg" />
                            {errors.price && <p className='text-red-600'>{errors.price?.message}</p>}
                            <br />

                            <label ><b>Doctor Email</b></label><br></br>
                            <input name="reprice" type="text"  {...register("email", {
                                required: "email is Required"
                            })} placeholder="Email" className="input input-bordered input-accent w-full mt-3 text-lg" />
                            {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                            <br /> */}



                            <label ><b  className='text-cyan-700 font-bold ml-2'>Service Description</b></label><br></br>
                            <textarea  {...register("det", {
                                required: "Description is Required"
                            })} name="det" placeholder='Description' className='input input-bordered input-accent w-full h-28 mt-3 text-lg' id="exampleFormControlTextarea1" rows="3" ></textarea>
                            {errors.det && <p className='text-red-600'>{errors.det?.message}</p>}
                            <br />
                            <br />
                            <div className='flex justify-center'>
                                <button className="h-10 mb-8 w-48 text-white bg-gradient-to-r from-cyan-500 to-blue-500 text-lg font-bold">Add Service</button>

                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SpecialitiesAdd;