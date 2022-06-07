import { Navigate, useLocation } from 'react-router-dom';
import useUser from '../../hooks/useUser';

const RequireAuth = ({children}) => {
    const location = useLocation();
    const [user] = useUser();
    if (!user) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAuth;