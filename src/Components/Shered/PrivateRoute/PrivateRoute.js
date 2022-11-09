import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useState(AuthContext)
    const location = useLocation()
    if (loading) {
        return <Spinner animation="grow" variant="success" />
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;


};

export default PrivateRoute;