import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const Logout = () => {

    const [cookies, setCookie, removeCookie] = useCookies(['token', 'userInfo']);
    
    const navi = useNavigate();
    
    useEffect(() => {
        removeCookie('token', {
            path: '/'
        });
        removeCookie('userInfo', {
            path: '/'
        });

        navi('/login');
    }, []);
}

export default Logout;