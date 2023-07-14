import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthProviders';
import useAuthorization from '../Hooks/useAuthorization';



const AdminOnly = ({children}) => {
    const {loading, user} = useAuth()
    const {isLoading, role} = useAuthorization()
    const location = useLocation();
    if(loading || isLoading){
        return 
    }
    
    if(user.email && role === "admin"){
        return children;
    }
    return <Navigate state={{from: location}} to="/" replace/>;
};

export default AdminOnly;