import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user } = useState(AuthContext)

    if (user) {

        return <Navigate to="/login" />;
    }
    return children;

};

export default PrivateRoute;