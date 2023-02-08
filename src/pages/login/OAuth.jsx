import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const OAuth = () => {

    const [cookies, setCookie] = useCookies(['token']);
    
    const code = new URL(document.location.href).searchParams.get('code');
    const baseURL = process.env.REACT_APP_SERVER_IP;
    const navigate = useNavigate();

    const sendCode = async () => {

        await axios.get(`${baseURL}/api/oauth/token?code=${code}`)
            // 성공 시, 메인 화면으로
            .then((res) => {
                setCookie('token', res.headers['authorization'].replace('Bearer ', ''), {
                    path: '/',
                    maxAge: 21599, // (kakao oauth 에서의 access_token의 기한)
                    // httpOnly: true (쿠키 저장 확인 위해서)
                });
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