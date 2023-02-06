import React from 'react'
import { useForm } from 'react-hook-form'
import './AddHealthPackage.css'

const AddHealthPackage = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()

    const imgHostKey = "7bd087226ccbe42290452a157f175e5f"

    const handleAddPackage = data => {


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
                    const packages = {
                        name: data.packageName,
                        location: data.location,
                        includes: data.test,
                        price: data.price,
                        old_price: data.oldPrice,
                        save: data.save,
                        img : imgData.data.url,
                        des: data.des
                    }

                    console.log(packages)

                    fetch('https://promise-hospoital-server.vercel.app/packages', {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(packages)
                    })
                        .then(res => res.json())
                        .then(data => console.log(data))
                }
            })





    }
    return (
        <div className='w-full dashboardBg h-full'>
            <div className='w-3/5 mx-auto pt-5 pb-5'>
                <form onSubmit={handleSubmit(handleAddPackage)} className='formBg p-5 shadow-2xl mt-3 rounded-lg h-full'>
                    <h2 className='text-2xl text-center text-white font-semibold'>Add Your Health Package</h2>
                    <div className='w-full mb-5'>
                        <h3 className='text-lg text-white font-medium mb-1'>Package Name</h3>
                        <input type="text" {...register("packageName")} className='border w-full bg-gray-100 outline-none rounded-sm px-3' />
                    </div>
                    <div className='mb-5'>
                        <h3 className='text-lg text-white font-medium mb-1'>Location</h3>
                        <input type="text" {...register("location")} className='border w-full bg-gray-100 outline-none rounded-sm px-3' />
                    </div>
                    <div className='mb-5'>
                        <h3 className='text-lg text-white font-medium mb-1'>Includ Test</h3>
                        <input type="text" {...register("test")} className='border w-full bg-gray-100 outline-none rounded-sm px-3' />
                    </div>
                    <div className='flex justify-between gap-5'>
                        <div className='mb-5 w-full'>
                            <h3 className='text-lg text-white font-medium mb-1'>Price</h3>
                            <input type="text" {...register("price")} className='border w-full bg-gray-100 outline-none rounded-sm px-3' />
                        </div>
                        <div className='mb-5 w-full'>
                            <h3 className='text-lg text-white font-medium mb-1'>Old Price</h3>
                            <input type="text" {...register("oldPrice")} className='border w-full bg-gray-100 outline-none rounded-sm px-3' />
                        </div>
                    </div>
                    <div className='flex justify-between gap-5'>
                        <div className='mb-5 w-full'>
                            <h3 className='text-lg text-white font-medium mb-1'>Save</h3>
                            <input type="text" {...register("save")} className='border w-full bg-gray-100 outline-none rounded-sm px-3' />
                        </div>
                        <div className='w-full'>
                            <h3 className='text-lg text-white font-medium mb-1'>Add Image</h3>
                            <input type="file" {...register("image")} className='border w-full bg-gray-100 outline-none rounded-sm' />
                        </div>
                    </div>
                    <div className='mb-5'>
                        <h3 className='text-lg text-white font-medium mb-1'>Package Description</h3>
                        <textarea {...register("des")} id="" cols="30" rows="3" className='border w-full bg-gray-100 outline-none rounded-sm px-3'></textarea>
                    </div>
                    <div className='text-center'>
                        <button className='btn btn-primary shadow-xl text-white'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddHealthPackage