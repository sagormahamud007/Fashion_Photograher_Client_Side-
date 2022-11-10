import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation, } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <Spinner animation="grow" variant="success" />
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />;



};

export default PrivateRoute;