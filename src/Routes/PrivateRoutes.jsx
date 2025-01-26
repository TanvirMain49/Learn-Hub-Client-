import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import Loader from '../Shared/Loader';

const PrivateRoutes = ({children}) => {
    const {user, loader} = useAuth()
    const location = useLocation();
    if(loader){
        return <Loader></Loader>
    }
    if(user){
        return children;
    }
    return (
        <Navigate to="/login" state={{from: location}} replace></Navigate>
    );
};

export default PrivateRoutes;