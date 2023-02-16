import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const UserProfile = () => {
    const { user} = useContext(AuthContext);
    console.log(user)
    return (
        <div className='mx-5'>
            
            <div className=' my-5 mx-96'>
            <div className="card w-96 bg-base-100 shadow-xl " style={{backgroundColor:'white'}}>
  <figure><div className="avatar my-5 ">
                    <div className="w-52 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    {
                        user?.photoURL && <img src={user?.photoURL} alt=''/>
                    }
    
                    </div>
                </div></figure>
  <div className="card-body" >
    <h2 className="card-title"><b>Name :</b> {user?.displayName ?user?.displayName : <>Null</>}</h2>
    <p><b> Email: </b> {user?.email ? user?.email : <>Null</>}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary"><Link to={`/EditeUserProfile`}>Edite profile</Link></button>
    </div>
  </div>
</div>
</div>



           












        </div>
    );
};

export default UserProfile;