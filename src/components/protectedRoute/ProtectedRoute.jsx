import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    useEffect(() => {
        if(sessionStorage.getItem('isLogged') === 'false')
        {
            navigate("/login");
        }
      }, [navigate])
    return children;
};

export default ProtectedRoute;
