import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import errorImg from '../../assets/404Image/error.png'




///// Tanvir import place(8-16) -----//////////
import Login from "../../Pages/Login/Login"; import Signup from "../../Pages/Signup/Signup";
import SuccessStories from "../../Pages/SuccessStories/SuccessStories";





///// Tanvir import place end //////
////-----------------------------------------------------
/////  Fouzia import place (18-27)--/////




import Specialities from "../../Pages/Specialities/Specialities";
import SpecialitiesDetails from "../../Pages/Specialities/SpecialitiesDetails";



///// Fouzia import end  /////////
//------------------------------------------------------
///// Rakib import place (29-37)---/////
import Doctors from "../../Pages/Doctors/Doctors";
import DoctorProfile from "../../Pages/Doctors/DoctorsProfile/DoctorsProfile";





////////Rabib import end /////////
///-------------------------------------------------------
///////  Kausarul import place (39-47)----///







////// Kausarul end //////////////
/////----------------------------------------
////// solyman import place (49-57)//////////







/////  solyman end ////////////////
///--------------------------------------------------
//// Jahid import place (59-68)///////








///// Jahid import end //////////////



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            ////----- Tanvir aria is 81-101 line ----------//////////////////////////
            {
                path: '/stories',
                element: <SuccessStories></SuccessStories>
            },















            ////// ---------- tanvir aria end ---------- ///////////////////////////////


            //////----------- Fouzia aria is 104-124 line ---------/////////////////////////




            {
                path: '/specialities',
                element: <Specialities></Specialities>,
         
            },

            {
                path: '/specialitiesDetails/:id',
                element: <SpecialitiesDetails></SpecialitiesDetails>,
                loader : ({params}) => fetch(`http://localhost:5000/specialities/${params.id}`),
         
            },














            ///////------- Fouzia aria is end --------/////////////////////////


            ///////---------- Rakib aria is 127-147 line ---------///////////////

            {
                path: '/doctors', element: <Doctors></Doctors>
            },
            {
                path: '/doctors/:id',
                loader: async ({ params }) => {
                    return fetch(`https://server-new-rokibul-bd.vercel.app/doctors/${params.id}`)
                },
                element: <DoctorProfile></DoctorProfile>
            },








            ////////---------- Rakia aria is end -----------///////////////////////////



            ////////----------- Kausarul aria is 151-171 line ---------/////////////



















            /////////----------  kausarul aria is end ----------- /////////////////////


            ///////--------- solyman aria is 174-194 line----------- ////////////////////



















            ////////////--------- Solyman aria is end ----------///////////////////


            //////////--------- Jahid aria is 197-117 line----------- /////////////////////



















            /////////-------- Jahid aria is end-------- /////////////////////////
            {
                path: '*',
                element:
                    <div className="flex flex-col justify-center items-center my-10 mx-4">
                        <img src={errorImg} alt="" />
                    </div>
            }
        ]
    },

    /////// Tanvir login & logout aria (228-260) line ------------------/////

    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/signup',
        element: <Signup></Signup>
    },





























    /////------- Tanvir login & logout aria end -------
])



