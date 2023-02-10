import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import bg from '../../Diagnosis/DiagnosisImages/diafnosisBg.jpg'

const AddDiagnosis = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm()

    const imgHostKey = "7bd087226ccbe42290452a157f175e5f"

    const handleAddTest = (data) => {

        const image = data.image[0]
        const formData = new FormData()
        formData.append("image", image)
        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    // console.group(imgData.data.url)
                    const testes = {
                        title: data.testName,
                        Why: data.location,
                        price: data.newPrice,
                        old_price: data.oldPrice,
                        img: imgData.data.url,
                        description: data.description
                    }

                    console.log(testes)

                    fetch('https://promise-hospoital-server-jahid900pj.vercel.app/diagnosis', {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(testes)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                toast.success('Test add successfully')
                                reset()
                            }
                        })
                }
            })


    }


    return (
        <div className='bg-cover h-full' style={{
            background: `url(${bg})`
        }}>
            <div className='w-full  h-full'>
                <div className='md:w-3/5 w-full mx-auto pt-5 pb-5'>
                    <form onSubmit={handleSubmit(handleAddTest)} className='bg-slate-100 text-black p-5 shadow-2xl mt-3 rounded-lg h-full'>
                        <h2 className='text-2xl text-center  font-semibold'>Add Test Package</h2>
                        <div className=' mb-5'>
                            <h3 className='text-lg  font-medium mb-1'>Test Name</h3>
                            <input type="text" {...register("testName")} placeholder="Type here" className="input input-bordered input-info w-full mt-3 text-lg" />
                        </div>

                        <div className='flex justify-between gap-5'>
                            <div className='mb-5 w-full'>
                                <h3 className='text-lg  font-medium mb-1'>Price</h3>
                                <input type="text" {...register("newPrice")} placeholder="Type here" className="input input-bordered input-info w-full mt-3 text-lg" />
                            </div>
                            <div className='mb-5 w-full'>
                                <h3 className='text-lg  font-medium mb-1'>Old Price</h3>
                                <input type="text" {...register("oldPrice")} placeholder="Type here" className="input input-bordered input-info w-full mt-3 text-lg" />
                            </div>
                        </div>

                        <div className=' mb-5'>
                            <h3 className='text-lg  font-medium mb-1'>Question</h3>
                            <input type="text" {...register("question")} placeholder="Type here" className="input input-bordered input-info w-full mt-3 text-lg" />
                        </div>

                        <div className='mb-5'>
                            <h3 className='text-lg  font-medium mb-1'>Package Description</h3>
                            <textarea {...register("description")} className="textarea textarea-info w-full" placeholder="Bio"></textarea>
                        </div>
                        <div>

                            <div class="extraOutline p-4 bg-white w-max bg-whtie m-auto rounded-lg">
                                <div class="file_upload  relative border-4 border-dotted border-gray-300 rounded-lg" >
                                    <svg class="text-teal-400 w-24 mx-auto " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                                    <div class="input_field flex flex-col w-max mx-auto text-center">
                                        <label>
                                            <input {...register("image")} class="text-sm cursor-pointer w-36 hidden" type="file" multiple />
                                            <div class="text bg-teal-400 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-white hover:text-teal-500 hover:border-teal-500">Select</div>
                                        </label>

                                        <div class="title text-teal-400 uppercase">or drop files here</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center md:justify-end gap-3'>
                            <button className='btn btn-secondary text-white shadow-xl mr-4'>Upload</button>
                            <button className="btn btn-outline btn-secondary ">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddDiagnosis;