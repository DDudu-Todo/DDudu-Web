import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const OAuth = () => {

    const navigate = useNavigate();

    const code = new URL(document.location.href).searchParams.get('code');

    const baseURL = process.env.REACT_APP_SERVER_IP;

    const sendCode = async () => {

        await axios.get(`${baseURL}/api/oauth/token?code=${code}`)
            // 성공 시, 메인 화면으로
            .then((res) => {
                window.localStorage.setItem('token', res.headers["authorization"]);
                navigate('/user/kakao/info');
            })
            // 에러시, 콘솔에 에러 메세지 출력
            .catch((err) => {
                console.log(err);
                navigate('/404');
            })
    }

    useEffect(() => {
        if (!code) return;
        sendCode();
    })

    return (
        <div>
            카카오 로그인 처리 중 ...
        </div>
    )

}

export default OAuth;