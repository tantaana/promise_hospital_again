
import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../../context/AuthProvider/AuthProvider"
import useDoctor from "../../Hooks/useDoctor/useDoctor"
import Loader from "../../Pages/Shared/Loader/Loader"



const DoctorRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const [isDoctor, isDoctorLoading] = useDoctor(user?.email)
    let location = useLocation()

    if (loading || isDoctorLoading) {
        return <Loader></Loader>
    }

    if (user && isDoctor) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
}

export default DoctorRoute;