import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            // {
            //     path: '*',
            //     element:
            //         <div className="flex flex-col justify-center items-center my-10 mx-4">
            //             <img src={errorImg} alt="" />
            //         </div>
            // }

        ]
    },

])