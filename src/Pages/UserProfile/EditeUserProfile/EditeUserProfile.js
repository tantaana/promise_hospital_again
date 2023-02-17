import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const EditeUserProfile = () => {
  const { updateUserProfile } = useContext(AuthContext);


  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const displayName = form.name.value;
    const photoURL = form.photoURL.value;

    const email = form.email.value;

    console.log(email, name)

    const data = {
      name,
      email
    };


    updateUserProfile(displayName, photoURL)
      .then((data) => {
        console.log(data)
        // Profile updated!
        // ...
      }).catch((error) => {
        // An error occurred
        // ...
        console.log(error)
      });






    fetch('https://promise-hospoital-server-jahid900pj.vercel.app/users/edite', {
      method: 'PUT', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);


      })
      .catch((error) => {
        console.error('Error:', error);
      });



  }











  return (
    <div>
      edite

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Edite Profile Now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <form onSubmit={handleSubmit} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="Name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' placeholder="Email" className="input input-bordered" />

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">photoURL</span>
                </label>
                <input type="text" name='photoURL' placeholder="photoURL" className="input input-bordered" />

              </div>



              <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>

    </div>
  );
};

export default EditeUserProfile;