import React from 'react';
import { useEffect, useState } from 'react';
import { FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';

const AllServiceShow = () => {
  const [servicereviews, setservicereviews] = useState([])
  const [services, setService] = useState([]);
  useEffect(() => {
    fetch('https://promise-hospoital-server-jahid900pj.vercel.app/specialities')
      .then(res => res.json())
      .then(data => setService(data))
  }, []);

  const handleDelete = id => {
    const process = window.confirm('Are you sure . You want to delete yous review');

    if (process) {
      fetch(`https://promise-hospoital-server-jahid900pj.vercel.app/specialities/${id}`, {
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
    <div className=' bg-teal-500'>
      <div >
        <p className='text-2xl mb-4 font-bold text-white border-b-4   border-spacing-6 text-center justify-center' >All Special Service Data</p>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">

          <thead className=''>
            <tr>
              <th className='bg-cyan-600 text-white text-xl'></th>
              <th className='bg-cyan-600 text-white text-xl' >Service Name</th>
              <th className='bg-cyan-600 text-white text-xl'>Cost</th>
              <th className='bg-cyan-600 text-white text-xl'>Doctor</th>
              <th className='bg-cyan-600 text-white text-xl'>Delete</th>
            </tr>
          </thead>
          <tbody>

            {
              services.map((service, i) => {
                return <tr key={service._id}>

                  <th>{i + 1}</th>
                  <td>{service.speciality}</td>
                  <td>{service.amount}</td>
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