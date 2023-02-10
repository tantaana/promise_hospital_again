import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import errorImg from '../../assets/404Image/error.png'



///// Tanvir import place(8-16) -----//////////
import Login from "../../Pages/Login/Login"; import Signup from "../../Pages/Signup/Signup"; import SuccessStories from "../../Pages/SuccessStories/SuccessStories"; import VisitPlan from "../../Pages/VisitPlan/VisitPlan"; import Insurance from "../../Pages/VisitPlan/Insurance/Insurance"; import Arrival from "../../Pages/VisitPlan/Arrival/Arrival"; import Discharge from "../../Pages/VisitPlan/Discharge/Discharge"; import AddDoctors from "../../Pages/Doctors/AddDoctors/AddDoctors";
import MyAppointments from "../../Pages/MyAppointments/MyAppointments";
import MyDetails from "../../Pages/MyAppointments/MyDetails/MyDetails";




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
import HealthPackages from "../../Pages/HealthPackages/HealthPackages/HealthPackages";
import PackagesDetails from "../../Pages/HealthPackages/PackagesDetails/PackagesDetails";
import AddHealthPackage from "../../Pages/Dashboard/HealthPackage/AddHealthPackage";




////// Kausarul end //////////////
/////----------------------------------------
////// solyman import place (49-57)//////////
import NewsAndMedia from "../../Pages/NewsMediya/NewsAndMediya";
import SocilaMediya from "../../Pages/SocialMediya/SocilaMediya";





/////  solyman end ////////////////
///--------------------------------------------------
//// Jahid import place (59-68)///////
import Blogs from "../../Pages/Blogs/Blogs/Blogs";
import BlogDetails from "../../Pages/Blogs/BlogDetails/BlogDetails";
import About from "../../Pages/About/About";
import DashboardLayout from "../../Layout/DashboardLayout";
import SpecialitiesAdd from "../../Pages/Specialities/seviceDashboard/SpecialitiesAdd";
import AllServiceShow from "../../Pages/Specialities/seviceDashboard/AllServiceShow";


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
            { path: '/stories', element: <SuccessStories></SuccessStories> },
            { path: '/plan', element: <VisitPlan></VisitPlan> },
            { path: '/plan/insurance', element: <Insurance></Insurance> },
            { path: '/plan/arrival', element: <Arrival></Arrival> },
            { path: '/plan/discharge', element: <Discharge></Discharge> },














            ////// ---------- tanvir aria end ---------- ///////////////////////////////


            //////----------- Fouzia aria is 104-124 line ---------/////////////////////////
            {
                path: '/specialities',
                element: <Specialities></Specialities>,

            },

            {
                path: '/specialitiesDetails/:id',
                element: <SpecialitiesDetails></SpecialitiesDetails>,
                loader: ({ params }) => fetch(`https://promise-hospoital-server.vercel.app/specialities/${params.id}`),

            },







            ///////------- Fouzia aria is end --------/////////////////////////


            ///////---------- Rakib aria is 127-147 line ---------///////////////

            {
                path: '/doctors', element: <Doctors></Doctors>
            },
            {
                path: '/doctors/:id',
                loader: async ({ params }) => {
                    return fetch(`http://localhost:5000/docInfo/${params.id}`)
                },
                element: <DoctorProfile></DoctorProfile>
            },








            ////////---------- Rakia aria is end -----------///////////////////////////



            //////----------- Kausarul aria is 151-171 line ---------/////////////
            {
                path: '/packages',
                element: <HealthPackages></HealthPackages>
            },
            {
                path: '/details/:id',
                element: <PackagesDetails></PackagesDetails>,
                loader: ({ params }) => fetch(`https://promise-hospoital-server.vercel.app/details/${params.id}`)
            },










            /////////----------  kausarul aria is end ----------- /////////////////////


            ///////--------- solyman aria is 174-194 line----------- ////////////////////
            {
                path: '/news', element: <NewsAndMedia></NewsAndMedia>
            },
            {
                path: '/social', element: <SocilaMediya></SocilaMediya>
            },













            ////////////--------- Solyman aria is end ----------///////////////////


            //////////--------- Jahid aria is 197-217 line----------- /////////////////////
            {
                path: '/blogs', element: <Blogs></Blogs>
            },
            {
                path: '/blog/:id', element: <BlogDetails></BlogDetails>,
                loader: ({ params }) => fetch(`https://promise-hospoital-server.vercel.app/blog/${params.id}`)
            },
            {
                path: '/about', element: <About></About>
            },









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
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>, children: [
            ///// tanvir start 230-245 line //////////////////
            { path: '/dashboard/add_doctors', element: <AddDoctors></AddDoctors> },
            { path: '/dashboard/appointments', element: <MyAppointments></MyAppointments> },
            { path: '/dashboard/details/:id', element: <MyDetails></MyDetails>, loader: ({ params }) => fetch(`http://localhost:5000/details/${params.id}`) },













            //////   tanvir end ///////////////////

            ////   fouzia aria 247-264 line //////////////


            {
                path: '/dashboard', element: <SpecialitiesAdd></SpecialitiesAdd>
            },

            {
                path: '/dashboard/show', element: <AllServiceShow></AllServiceShow>
            },







            //////  fouzia end 264 line //////////////////

            /////// jahid aria 266-280 line //////













            /////     jahid end 280 line ///////

            //// Rakibul aria 282-195 line /////












            ///////// rakibul end 295 line /////


            //////  kausarul aria start 298-315 line //////////
            {
                path: '/dashboard/addPackage',
                element: <AddHealthPackage></AddHealthPackage>
            }












            ////  kausarul end 315 line ////////////

            //// solyman aria start 317-330 line //////////












            ////// solyman aria end 330 line 

        ]
    },


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


