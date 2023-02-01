import React from "react";
import styled from "styled-components";
import { onChange } from "react";

export default function FileInput() {
  return <input type="file" multiple />;
}

const HomeWrapper = styled.div`
  @keyframes smoothAppear {
    from {
      opacity: 0;
      transform: translate3d(0, -100%, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }

  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Noto Sans KR", sans-serif;
  span {
    font-size: 2.7rem;
    font-family: "Pacifico", cursive;
  }
`;

const HomeTitle = styled.div`
  opacity: 0;
  animation: smoothAppear 1s forwards;
  animation-delay: 0.5s;
  margin: 15px 0;
  font-size: 30px;
  font-weight: bold;
  color: midnightblue;
  span {
    font-size: 40px;
    font-family: "Pacifico", cursive;
  }
`;

const HomeContents = styled.div`
  opacity: 0;
  animation: smoothAppear 1s forwards;
  animation-delay: 1s;
  margin: 30px 0;
  font-size: 30px;
  color: #282c34;
`;

const AboutProject = styled.div`
  opacity: 0;
  animation: smoothAppear 1s forwards;
  animation-delay: 1.5s;
  margin: 30px 0;
  font-size: 25px;
  color: #282c34;
  text-align: center;
  span {
    font-size: 30px;
    font-weight: bold;
    color: blue;
  }
`;

const MyWebsite = styled.div`
  opacity: 0;
  animation: smoothAppear 1s forwards;
  animation-delay: 2s;
  margin: 30px 0;
  text-align: center;
  .my-website-title {
    margin-bottom: 5px;
    font-size: 1.8rem;
    font-weight: bold;
    color: midnightblue;
  }
  t {
    width: 50px;
    height: 22px;
    display: inline-block;
    border: 1px solid #111;
    word-wrap: break-word;
    text-align:center;
    text-align:justify;
`;

<Avatar
  src={Image}
  style={{ margin: "20px" }}
  size={200}
  onClick={() => {
    fileInput.current.click();
  }}
/>;

// const fileInput = useRef(null){
//    <input
//    type='file'
//      style={ {display:'none'} }
//        accept='image/jpg,impge/png,image/jpeg'
//        name='profile_img'
//        onChange={onChange}
//        ref={fileInput}/>;
// };

const onChange = (e) => {
  if (e.target.files[0]) {
    setFile(e.target.files[0]);
  } else {
    //업로드 취소할 시
    setImage(
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    );
    return;
  }
  //화면에 프로필 사진 표시
  const reader = new FileReader();
  reader.onload = () => {
    if (reader.readyState === 2) {
      setImage(reader.result);
    }
  };
  reader.readAsDataURL(e.target.files[0]);
};

const Home = () => {
  return (
    <div class="container-login100">
      <div class="wrap-login100 p-l-85 p-r-85 p-t-55 p-b-55">
        <div class="row justify-content-center">
          <div id="app">
            <div class="card">
              <div class="card-header" style="padding-bottom:15px;">
                <strong style="font-size: 18px;">
                  <i class="fas fa-user-cog"></i>&nbsp;내 정보
                </strong>
              </div>
              <div class="card-body">
                <table style="color:black; margin-left:10px; border-collapse: separate; border-spacing:0 10px; ">
                  <tr>
                    <td class="profile_title">
                      <p>내 아이디 &emsp;&emsp;&emsp;</p>{" "}
                    </td>
                    <td class="profile_content">
                      &#58;&emsp;&emsp;{{ username }}
                    </td>
                  </tr>
                </table>
                <t> &emsp;{{ key }} &emsp;</t>

                <div style="text-align: center;"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//export default Home;
