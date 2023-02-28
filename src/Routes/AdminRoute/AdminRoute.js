import React from 'react'
import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../../context/AuthProvider/AuthProvider'
import useAdmin from '../../Hooks/useAdmin/useAdmin'
import Loader from '../../Pages/Shared/Loader/Loader'

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)
    console.log(isAdmin)
    const location = useLocation()

    if (loading || isAdminLoading) {
        return <Loader></Loader>
    }

    if (user?.email && isAdmin) {
        return children
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
}

export default AdminRoute;