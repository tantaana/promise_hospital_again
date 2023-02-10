import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { toast } from 'react-hot-toast'
import { Link } from 'react-router-dom'

const ShowPackages = () => {
    const { data: packages = [], refetch } = useQuery({
        queryKey: [['packages']],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/packages`)
            const data = res.json()
            return data
        }
    })
    // console.log(packages)
    const handleDelete = pk =>{
        fetch(`http://localhost:5000/packages/${pk._id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                refetch()
                toast("Pacakges Deleted")
            }
        })
    }
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                                Delete
                            </th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Total Test</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            packages.map((packag, i) => <tr key={packag._id}>
                            <th><button onClick={() => handleDelete(packag)} className='btn bg-red-500 btn-sm'>X</button></th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask w-12 h-12">
                                            <img src={packag.img} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{packag.name}</div>
                                        <div className="text-sm opacity-50">{packag.location}</div>
                                    </div>
                                </div>
                            </td>
                            <td>$ {packag.price}</td>
                            <td>
                                {packag.includes}
                            </td>
                            
                        </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default ShowPackages