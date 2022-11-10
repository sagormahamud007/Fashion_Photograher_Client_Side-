import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation, } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useState(AuthContext)
    let location = useLocation()
    if (loading) {
        return <Spinner animation="grow" variant="success" />
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>;



};

export default PrivateRoute;