import { useEffect } from "react";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom'

function Logout() {
    useEffect(() => {
        Cookies.remove('accessToken');
        Cookies.remove('usuario');
        handleNavigation('/login')
    }, [])

    const navigate = useNavigate()
    const handleNavigation = (path) => {
      navigate(path);
      window.location.href = path;
    }
}

export default Logout