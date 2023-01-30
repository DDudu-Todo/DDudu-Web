import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserInfo = () => {

    const navigate = useNavigate();

    const baseURL = process.env.REACT_APP_SERVER_IP;
    const token = localStorage.getItem('token');

    const sendToken = async () => {

        await axios.get(`${baseURL}/api/me?token=${token}`)
            .then((res) => {
                console.log('사용자 정보 가져오기');
                const user = res.data;
                localStorage.setItem('userInfo', JSON.stringify(user));
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