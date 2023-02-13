import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const UserInfo = () => {

    const [cookies, setCookies] = useCookies(['token', 'userInfo']);
    
    const baseURL = process.env.REACT_APP_SERVER_IP;
    const token = cookies.token;
    const navigate = useNavigate();

    const sendToken = async () => {

        await axios.get(`${baseURL}/api/me`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => {
                console.log('사용자 정보 가져오기');
                const user_info = res.data;
                setCookies('userInfo', user_info, {
                    path: '/',
                    maxAge: 21599,
                    // httpOnly: true
                });
                navigate('/dashboard');
            })
            .catch((err) => {
                console.log(err);
                navigate('/404');
            })
    }

    useEffect(() => {
        sendToken();
    });

    return (
        <div>
            사용자 정보 요청
        </div>
    )
}

export default UserInfo;