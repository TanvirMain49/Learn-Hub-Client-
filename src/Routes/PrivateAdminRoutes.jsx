import React from 'react';
import { useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import useRole from '../Hooks/useRole';
import Loader from '../Shared/Loader';

const PrivateAdminRoutes = ({children}) => {
        const {user, loader} = useAuth();
        const { isRole, isLoading } = useRole();
        const location = useLocation();
        if(loader || isLoading){
            return <Loader></Loader>
        }
        if(user && isRole==="Admin" ){
            return children;
        }
        return (
            <Navigate to="/login" state={{from: location}} replace></Navigate>
        );
    };
    
export default PrivateAdminRoutes;