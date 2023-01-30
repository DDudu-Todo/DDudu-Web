import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const OAuth = () => {

    const navigate = useNavigate();
    const code = new URL(document.location.href).searchParams.get('code');

    // 환경변수 설정 필요
    const baseURL = process.env.REACT_APP_SERVER_IP;

    const sendCode = async () => {

        await axios.get(`${baseURL}/api/oauth/token?code=${code}`)
            // 성공 시, 메인 화면으로
            .then(() => {
                navigate('/');
            })
            // 에러시, 콘솔에 에러 메세지 출력
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        if (!code) return;
        sendCode();
    })

    return (
        <div>
            KAKAO LOGIN
        </div>
    )

};

export default OAuth;