import React from "react";
import classNames from "classnames/bind";
import styles from "./profile.css";
import { useProfileDispatch } from "../contexts/profile_context";
//import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

const MyInfo = ({
  profileRepository,
  user,
  logoutHandler,
  profile,
  onChange,
  imgOnChange,
  imgOnRemove,
  ImageInput,
}) => {
  const history = useNavigate();
  const profileDispatch = useProfileDispatch();

  // 프로필 저장
  const onSave = (e) => {
    e.preventDefault();
    profileDispatch({
      type: "SAVE",
      profile,
    });
    profileRepository.saveProfile(user.uid, profile);
    alert("저장되었습니다 🙂");
  };

  // 계정 로그아웃
  const onLogout = () => {
    logoutHandler();
    history.push("/");
  };

  return (
    <section>
      <h2 className={cx("title")}>내 정보</h2>
      <form className={cx("box")} onSubmit={onSave}>
        <div className={cx("row")}>
          <span>사진</span>
          <ImageInput
            profile={profile}
            imgOnChange={imgOnChange}
            imgOnRemove={imgOnRemove}
          />
        </div>
        <div className={cx("row")}>
          <span>이메일</span>
          <p className={cx("email")} type="text">
            {user.email}
          </p>
        </div>
        <div className={cx("row")}>
          <span>이름</span>
          <input
            name={"name"}
            className={cx("name")}
            type="text"
            placeholder="이름을 입력하세요"
            maxLength="10"
            value={profile.name}
            onChange={onChange}
          />
        </div>
        <div className={cx("row")}>
          <span>소개</span>
          <textarea
            name={"message"}
            className={cx("message")}
            placeholder="소개를 해주세요"
            maxLength="40"
            value={profile.message}
            onChange={onChange}
          ></textarea>
        </div>
        <div className={cx("row")}>
          <button className={cx("save")} type="submit">
            저장하기
          </button>
          <button className={cx("logout")} type="button" onClick={onLogout}>
            로그아웃
          </button>
        </div>
      </form>
    </section>
  );
};

export default MyInfo;

// /*--------------------*/
// import { createContext, useContext, useReducer } from "react";

// // State
// const initialProfile = {
//   name: "",
//   message: "",
//   img: null,
// };

// // Reducer
// function profileReducer(state, action) {
//   switch (action.type) {
//     case "IMPORT":
//       return { ...action.profile };
//     case "SAVE":
//       return { ...action.profile };
//     default:
//       throw new Error(`Invalid action type ${action.type}`);
//   }
// }

// // Context API
// const ProfileStateContext = createContext();
// const ProfileDispatchContext = createContext();

// // useContext
// export function useProfileState() {
//   const context = useContext(ProfileStateContext);
//   if (!context) throw new Error("Cannot find ProfileState");
//   return context;
// }

// export function useProfileDispatch() {
//   const context = useContext(ProfileDispatchContext);
//   if (!context) throw new Error("Cannot find ProfileDispatch");
//   return context;
// }

// // Provider
// export function ProfileProvider({ children }) {
//   const [state, dispatch] = useReducer(profileReducer, initialProfile);
//   return (
//     <ProfileStateContext.Provider value={state}>
//       <ProfileDispatchContext.Provider value={dispatch}>
//         {children}
//       </ProfileDispatchContext.Provider>
//     </ProfileStateContext.Provider>
//   );
// }
