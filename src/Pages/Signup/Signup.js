import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { RiHomeHeartFill } from "react-icons/ri";
import { FaGoogle } from "react-icons/fa";
import signImg from '../../assets/signup.gif'
import AllTitle from '../../Hooks/AllTitle';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import circleLoading from '../../assets/loading-circle.gif'
import useToken from '../../Hooks/useToken/useToken';

const Signup = () => {
    const { createUser, updateUserProfile, providerLogin } = useContext(AuthContext);

    const [userData, setUserData] = useState([]);
    console.log(userData)

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';


    AllTitle('Sign Up')

    const googleLogIn = new GoogleAuthProvider();


    //Loader to show while loading
    const [isLoading, setIsLoading] = useState(false);

    //JWT 
    // const [signUpUserEmail, setSiginUpUserEmail] = useState('')
    // const [token] = useToken(signUpUserEmail)

    // if(token){

    // }

    useEffect(() => {

        fetch('https://promise-hospoital-server-jahid900pj.vercel.app/userData')
            .then(res => res.json())
            .then(data => {

                setUserData(data)
            })
    }, []);



    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        setIsLoading(true);




        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                handleUserInfo(name)



                const addPatient = {
                    name: name,
                    email: email,
                    userType: 'Patient',
                    role: ''
                }

                //save user information to the database
                fetch('https://promise-hospoital-server-jahid900pj.vercel.app/userData', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(addPatient)
                })
                    .then(res => res.json())
                    .then(data => {

                        if (data.acknowledged) {
                            toast.success('Successfully signed up');
                            // setSiginUpUserEmail(email)
                            setIsLoading(false);
                            setTimeout(() => {
                                navigate(from, { replace: true });
                            }, 2000);
                        }
                    })


                // setTimeout(() => {
                //     if (user.displayName) {
                //         setIsLoading(false);
                //         navigate(from, { replace: true });
                //         console.log('hello');
                //     }
                // }, 2000);



            })
            .catch(err => {
                console.error(err.message);
                if (err.message === "Firebase: Error (auth/email-already-in-use).") {
                    toast.error('User Already Exists !');
                    setIsLoading(false);
                    form.email.value = '';
                    form.password.value = '';
                }
                if (err.message === "Firebase: Password should be at least 6 characters (auth/weak-password).") {
                    toast.error('Password should be at least 6 characters');
                    setIsLoading(false);
                    form.password.value = '';
                };
                if (err.message === "Firebase: Error (auth/invalid-email).") {
                    toast.error('Invalid Email');
                    setIsLoading(false);
                };
                if (err.message === "Firebase: Error (auth/network-request-failed).") {
                    toast.error('Network Request Failed. Try Again');
                    setIsLoading(false);
                }
            })

        const handleUserInfo = name => {
            const profile = {
                displayName: name
            }
            updateUserProfile(profile)
                .then(() => { })
                .catch(err => console.error(err))
        }

    };






    const handleGoogle = () => {
        setIsLoading(true);
        providerLogin(googleLogIn)
            .then(result => {
                const user = result.user;
                const getData = userData.filter(users => users?.email === user?.email);
                if (getData.length > 0) {
                    toast.success('User exists already. Redirecting.....');
                    setTimeout(() => {
                        // navigate(from, { replace: true });
                        navigate(-1);
                    }, 2000);
                }
                else if (getData.length === 0) {
                    if (user.uid) {

                        const addPatient = {
                            name: user?.displayName,
                            email: user?.email,
                            userType: 'Patient',
                            role: ''

                        }

                        //save user information to the database
                        fetch('https://promise-hospoital-server-jahid900pj.vercel.app/userData', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(addPatient)
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data)

                                if (data.acknowledged) {
                                    toast.success('Successfully signed up');
                                    setIsLoading(false);
                                    setTimeout(() => {
                                        navigate(-1);
                                        // navigate(from, { replace: true });
                                    }, 2000);
                                }
                            })
                            .catch(err => console.error(err.message))


                    }
                }

            })
            .catch(err => {
                console.error(err.message);
                if (err.message === "Firebase: Error (auth/popup-closed-by-user).") {
                    toast.error('Could not sign up. Please try again');
                    setIsLoading(false);
                };
            })
    }




    return (
        <div>
            <div className='flex justify-center mb-6 mt-6'>
                <Link className="bg-transparent border-none hover:bg-transparent normal-case text-3xl" to='/'>
                    <div>
                        <div className='mb-2'>
                            <h2 className='text-5xl font-semibold'><span className='text-blue-700'>promise</span><span className='text-teal-500'>hospital</span></h2>
                        </div>
                        <div className='flex justify-end'>
                            <h2 className='text-blue-500 text-xl font-semibold'>Beside you forever ❤️</h2>
                        </div>

                    </div>
                </Link>
            </div>

            <div className='flex justify-center mb-4'>
                <div className="tooltip tooltip-right tooltip-primary border-dashed border-b-4 border-indigo-500" data-tip="Go to home">
                    <Link to='/'><h2 className='btn border-none bg-transparent hover:bg-transparent text-5xl text-blue-500 text-center'><RiHomeHeartFill /></h2></Link>
                </div>

            </div>

            <div className='flex justify-center'>
                <div className="hero py-20 bg-green-200 shadow-2xl rounded-xl mx-20 mb-20">
                    <div className="hero-content flex-col 2xl:flex-row gap-10 2xl:gap-60">
                        <div className="lg:text-left">
                            <img src={signImg} className="w-full" alt="" />
                        </div>



                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gradient-to-r from-teal-400 to-blue-300">
                            <form onSubmit={handleSignUp} className="card-body">
                                <div className='flex gap-4'>
                                    <h1 className="text-3xl md:text-4xl font-bold mb-10">Sign Up</h1>

                                    <h3>{isLoading ?
                                        <img src={circleLoading} alt="" className='w-[50px]' /> : ''
                                    }</h3>

                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl font-semibold">Your Full Name 🖋️</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Type your name" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl font-semibold">Your Email 📧</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Type your email" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl font-semibold">Your Password 🔐</span>
                                    </label>
                                    <input type="password" name="password" placeholder="Type your password" className="input input-bordered" required />
                                    <div className="form-control mt-6">
                                        <button className="btn glass hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-400 text-black" type="submit">Sign Up</button>
                                    </div>
                                </div>
                            </form>

                            <h3 className='text-center text-2xl font-bold mb-6'>OR</h3>
                            <button onClick={handleGoogle} className='btn btn-secondary mb-6 mx-8 flex justify-evenly font-bold'><span className='text-2xl'><FaGoogle /></span><span>Sign Up with Google</span></button>
                            <h3 className='text-lg font-bold  mb-10 text-center'>Already have an account? <Link className='text-blue-600 font-bold' to='/login'>Login</Link> here</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Signup;