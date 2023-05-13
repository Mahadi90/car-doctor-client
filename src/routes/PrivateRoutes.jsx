import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {

   const { user, loading } = useContext(AuthContext)

   if(loading){
    return <progress className="progress w-56 block mx-auto mb-6"></progress>
   }

   if(user?.email){
    return children
   }

    return <Navigate to='/login'></Navigate>
};

export default PrivateRoutes;