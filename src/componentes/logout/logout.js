import { useEffect } from "react";
import Cookies from 'js-cookie';
import { Navigate, useNavigate } from 'react-router-dom'

function Logout() {
    useEffect(() => {
        Cookies.remove('accessToken');
        handleNavigation('/login')
    }, [])

    const navigate = useNavigate()
    const handleNavigation = (path) => {
      navigate(path);
      window.location.href = path;
    }
}

export default Logout