import React from 'react';
import{ useEffect, useState } from 'react';
import { FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';

const AllServiceShow = () => {
    const [servicereviews, setservicereviews] = useState([])
    const [services,setService] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/specialities')
        .then(res => res.json())
        .then(data => setService(data))
    }, []);

    const handleDelete = id => {
        const process = window.confirm('Are you sure . You want to delete yous review');
    
        if (process) {
          fetch(`http://localhost:5000/specialities/${id}`, {
            method: 'DELETE'
          })
            .then(res => res.json())
            .then(data => {
              if (data.deletedCount > 0) {
                alert('deleted successfully..');
                const remaining = servicereviews.filter(rev => rev._id !== id)
                setservicereviews(remaining);
                window.location.reload(false)
              }
            })
        }
      }
    return (
        <div>
             <div>
                    <p className='text-2xl mb-2 font-bold text-cyan-600 border-b-4 mt-2  border-spacing-6 text-center justify-center' >All Special Service Data</p>
                </div>
                <div className="overflow-x-auto">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Service Name</th>
                                <th>Doctor</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>

                        {
                services.map((service , i)=> {
                    return <tr key={service._id}>

                        <th>{i + 1}</th>
                        <td>{service.name}</td>
                        <td>{service.docName}</td>
                      <td><Link onClick={() => handleDelete(service._id)}><FaTimes></FaTimes></Link>  </td>
                        {/* <td><button  onClick={() => handleOrder('Cancel')}></button></td> */}


                    </tr>;
                })
                }
                      
                        </tbody>
                    </table>
                </div>
        </div>
    )
};

export default AllServiceShow;