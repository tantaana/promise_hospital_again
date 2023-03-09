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
import ShowPackages from "../../Pages/Dashboard/ShowPackages/ShowPackages";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
import SslSuccess from "../../Pages/MyAppointments/SslSuccess/SslSuccess";
import ConnectUs from "../../Pages/ConnectUs/ConnectUs";
import UserProfile from "../../Pages/UserProfile/UserProfile";
import EditeUserProfile from "../../Pages/UserProfile/EditeUserProfile/EditeUserProfile";
import Diagnosis from "../../Pages/Diagnosis/Diagnosis/Diagnosis";
import AddDiagnosis from "../../Pages/DashboardDiagnosis/AddDiagnosis/AddDiagnosis";
import DiagnosisForm from "../../Pages/Diagnosis/DiagnosisBookFrom/DiagnosisForm/DiagnosisForm";
import Meeting from "../../Pages/Meeting/Meeting";
import PatientsChart from "../../Pages/Dashboard/Patients-Chart/PatientsChart";
import ViewAllGallery from "../../Pages/Dashboard/Gallery/ViewAllGallery";


import Dashboard from "../../Pages/Dashboard/Dashboard";
import AllUser from "../../Pages/Dashboard/AllUser/AllUser";
<<<<<<< HEAD
=======
import UserProfileOne from "../../Pages/Dashboard/UserProfileOne/UserProfileOne";
import EditeUserProfileOne from "../../Pages/Dashboard/EditeUserProfileOne/EditeUserProfileOne";
import AdminRoute from "../AdminRoute/AdminRoute";
import VirtualAppointment from "../../Pages/Dashboard/VirtualAppointment/VirtualAppointment";
import DoctorVirtualAppointments from "../../Pages/Dashboard/DoctorVirtualAppointments/DoctorVirtualAppointments";
import DoctorRoute from "../DoctorRoute/DoctorRoute";
import OurLeader from "../../Pages/About/OurLeader";
import Fellowship from "../../Pages/Doctors/DoctorsProfile/Fellowship/Fellowship";
>>>>>>> b7f3881ccb77bcc881c5af1b1f04dbafd9bfdf0d


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
                path: '/meet',
                element: <Meeting></Meeting>,
            },
            {
                path: '/gallery',
                element: <ViewAllGallery></ViewAllGallery>,
            },

            {
                path: '/specialities/:speciality_id',
                element: <SpecialitiesDetails></SpecialitiesDetails>,
                loader: ({ params }) => fetch(`https://promise-hospoital-server-jahid900pj.vercel.app/specialities/${params.speciality_id}`),

            },







            ///////------- Fouzia aria is end --------/////////////////////////


            ///////---------- Rakib aria is 127-147 line ---------///////////////

            {
                path: '/doctors', element: <Doctors></Doctors>
            },
            {
                path: '/doctors/:docURL',
                loader: async ({ params }) => {
                    return fetch(`http://localhost:5000/docInfo/${params.docURL}`)
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
                loader: ({ params }) => fetch(`https://promise-hospoital-server-jahid900pj.vercel.app/details/${params.id}`)
            },










            /////////----------  kausarul aria is end ----------- /////////////////////


            ///////--------- solyman aria is 174-194 line----------- ////////////////////
            {
                path: '/news', element: <NewsAndMedia></NewsAndMedia>
            },
            {
                path: '/social', element: <SocilaMediya></SocilaMediya>
            },
            {
                path: '/success',
                element: <SslSuccess></SslSuccess>
            },
            {
                path: '/contact',
                element: <ConnectUs></ConnectUs>
            },












            ////////////--------- Solyman aria is end ----------///////////////////


            //////////--------- Jahid aria is 197-217 line----------- /////////////////////
            {
                path: '/blogs', element: <Blogs></Blogs>
            },
            {
                path: '/blog/:id', element: <BlogDetails></BlogDetails>,
                loader: ({ params }) => fetch(`https://promise-hospoital-server-jahid900pj.vercel.app/blog/${params.id}`)
            },
            {
                path: '/about', element: <About></About>
            },
            {
                path: '/lead', element: <OurLeader></OurLeader>
            },
            {
                path: '/diagnosis', element: <Diagnosis></Diagnosis>
            },
            {
                path: '/diagnosis/:id', element: <DiagnosisForm></DiagnosisForm>,
                loader: ({ params }) => fetch(`https://promise-hospoital-server-jahid900pj.vercel.app/diagnosis/${params.id}`)

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
        path: '*',
        element:
            <div className="flex flex-col justify-center items-center my-10 mx-4">
                <img src={errorImg} alt="" />
            </div>
    },
    {
        path: '/dashboard',
        element:
            <PrivateRoute>
                <DashboardLayout></DashboardLayout>
            </PrivateRoute>
        , children: [
            ///// tanvir start 230-245 line //////////////////
            { path: '/dashboard/add_doctors', element: <AddDoctors></AddDoctors> },
            { path: '/dashboard/appointments', element: <MyAppointments></MyAppointments> },
            { path: '/dashboard/details/:id', element: <MyDetails></MyDetails>, loader: ({ params }) => fetch(`https://promise-hospoital-server-jahid900pj.vercel.app/details/${params.id}`) },
            { path: '/dashboard/all_users', element: <AdminRoute> <AllUser></AllUser> </AdminRoute> },













            //////   tanvir end ///////////////////

            ////   fouzia aria 247-264 line //////////////


            {
                path: '/dashboard/add_services', element: <SpecialitiesAdd></SpecialitiesAdd>
            },
            {
                path: '/dashboard', element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/chart',
                element: <PatientsChart></PatientsChart>,

            },


            {
                path: '/dashboard/show_services', element: <AllServiceShow></AllServiceShow>
            },














            //////  fouzia end 264 line //////////////////

            /////// jahid aria 266-280 line //////
            {
                path: '/dashboard/add_diagnosis', element: <AddDiagnosis></AddDiagnosis>
            },
            {
                path: '/dashboard/VirtualAppointment', element: <VirtualAppointment></VirtualAppointment>
            },
            {
                path: '/dashboard/doctorVirtualAppointment',
                element: <DoctorRoute> <DoctorVirtualAppointments></DoctorVirtualAppointments></DoctorRoute>
            },












            /////     jahid end 280 line ///////

            //// Rakibul aria 282-195 line /////












            ///////// rakibul end 295 line /////


            //////  kausarul aria start 298-315 line //////////
            {
                path: '/dashboard/add_package',
                element: <AddHealthPackage></AddHealthPackage>
            },
            {
                path: '/dashboard/show_package',
                element: <ShowPackages></ShowPackages>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://promise-hospoital-server-jahid900pj.vercel.app/booking/${params.id}`)
            },












            ////  kausarul end 315 line ////////////

            //// solyman aria start 317-330 line //////////


            {
                path: '/dashboard/useprofile',
                element: <UserProfileOne></UserProfileOne>

            },
            {
                path: '/dashboard/editeuserprofile/:email',
                loader: ({ params }) => fetch(`https://promise-hospoital-server-jahid900pj.vercel.app/users/edite/${params.email}`),
                element: <EditeUserProfileOne />
            }










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


