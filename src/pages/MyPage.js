// import PropTypes from "prop-types";

// import { Helmet } from "react-helmet-async";
// import { useState } from "react";

import { useState, useRef, setFile } from "react";
// @mui
import { ButtonGroup, Container, Stack, Typography } from "@mui/material";

import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
//import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

// components
import { MyInfo } from "../sections/@dashboard/myinfo";
// mock
import PRODUCTS from "../_mock/products";

// // ----------------------------------------------------------------------

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
//   large: {
//     width: theme.spacing(20),
//     height: theme.spacing(20),
//   },
// }));

// export default function MyPage() {
//   const classes = useStyles();
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);
//   const user = JSON.parse(localStorage.getItem("user"));

//   const handleMenu = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("accessToken");
//     localStorage.removeItem("user");
//     window.location.href = "/";
//   };

//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>
//           <Typography variant="h6" className={classes.title}>
//             Profile
//           </Typography>
//           <div>
//             <IconButton onClick={handleMenu} color="inherit">
//               <Avatar src={user.avatar} />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorEl}
//               open={open}
//               onClose={handleClose}
//             >
//               <MenuItem onClick={handleLogout}>Logout</MenuItem>
//             </Menu>
//           </div>
//         </Toolbar>
//       </AppBar>
//       <Card className={classes.root} variant="outlined">
//         <CardContent>
//           <Avatar src={user.avatar} className={classes.large} />
//           <Typography variant="h5">
//             Welcome {user.fname} {user.lname}
//           </Typography>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

// /*---------------------------*/

import { createContext, useContext, useReducer } from "react";

import { Helmet } from "react-helmet-async";
import { Link as RouterLink } from "react-router-dom";
// @mui
import { styled } from "@mui/material/styles";
import { Button, Box } from "@mui/material";

import classNames from "classnames/bind";
import styles from "./profile.css";

import { InteractiveList } from "../sections/@dashboard/myinfo";

import MYPAGE from "../_mock/mypage";
import { Public } from "@material-ui/icons";

//-----------------------------

export function FileUpload() {
  const [Image, setImage] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  );
  const fileInput = useRef(null);
  <input
    type="file"
    style={{ display: "none" }}
    accept="image/jpg,impge/png,image/jpeg"
    name="profile_img"
    onChange={onChange}
    ref={fileInput}
  />;

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
}
// ----------------------------------------------------------------------

const StyledContent = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

// State
const initialProfile = {
  name: "",
  message: "",
  img: null,
};

// Reducer
function profileReducer(state, action) {
  switch (action.type) {
    case "IMPORT":
      return { ...action.profile };
    case "SAVE":
      return { ...action.profile };
    default:
      throw new Error(`Invalid action type ${action.type}`);
  }
}

// Context API
const ProfileStateContext = createContext();
const ProfileDispatchContext = createContext();

// useContext
export function useProfileState() {
  const context = useContext(ProfileStateContext);
  if (!context) throw new Error("Cannot find ProfileState");
  return context;
}

export function useProfileDispatch() {
  const context = useContext(ProfileDispatchContext);
  if (!context) throw new Error("Cannot find ProfileDispatch");
  return context;
}

// Provider
export function ProfileProvider({ children }) {
  const [state, dispatch] = useReducer(profileReducer, initialProfile);
  return (
    <ProfileStateContext.Provider value={state}>
      <ProfileDispatchContext.Provider value={dispatch}>
        {children}
      </ProfileDispatchContext.Provider>
    </ProfileStateContext.Provider>
  );
}

const classes = classNames.bind(styles);

export default function MyPage() {
  return (
    <>
      <Helmet>
        <title> MY PAGE </title>
      </Helmet>

      <Container>
        <StyledContent sx={{ textAlign: "center", alignItems: "center" }}>
          <Typography variant="h3" paragraph>
            MY INFORMATION
          </Typography>

          <Typography sx={{ color: "text.secondary" }}></Typography>

          {/* <div className={classes.root}>
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h6" className={classes.title}>
                  Profile
                </Typography>
                <div>
                  <IconButton onClick={handleMenu} color="inherit">
                    <Avatar src={user.avatar} />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </Menu>
                </div>
              </Toolbar>
            </AppBar>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Avatar src={mypage.avatar} className={classes.large} />
                <Typography variant="h5">
                  Welcome {mypage.username} {user.lname}
                </Typography>
              </CardContent>
            </Card>
          </div> */}

          {/* <IconButton
            color="inherit"
            component="img"
            src="/assets/illustrations/whale_icon.svg"
            sx={{ height: 200, mx: "auto", my: { xs: 5, sm: 10 } }}
          /> */}

          <Box
            component="img"
            src="/assets/illustrations/whale_icon.svg"
            sx={{ height: 200, mx: "auto", my: { xs: 5, sm: 5 } }}
          />

          <Stack
            mb={5}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <InteractiveList />
          </Stack>

          <ButtonGroup size="secondary" color="secondary">
            <Button
              to="/"
              //size="large"
              variant="outlined"
              //sx={{ mr: 30 }}
              component={RouterLink}
              mb={5}
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <image_file_input mypage={MYPAGE} />
              프로필 사진 수정
            </Button>
            <Button
              to="/"
              //size="large"
              variant="outlined"
              // sx={{ ml: 30, my: { md: 10 } }}
              component={RouterLink}
              mb={5}
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              {/* <PassowrdEdit /> */}
              비밀번호 변경
            </Button>
          </ButtonGroup>

          <Button
            to="/"
            size="large"
            variant="contained"
            sx={{ my: { xs: 0, sm: 7 } }}
            component={RouterLink}
          >
            Go to Home
          </Button>
        </StyledContent>
      </Container>
    </>
  );
}
/*------------- 다시 ----------------*/
// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import IconButton from "@material-ui/core/IconButton";
// import MenuItem from "@material-ui/core/MenuItem";
// import Menu from "@material-ui/core/Menu";
// import Avatar from "@material-ui/core/Avatar";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";

// // mock
// import MYPAGE from "../_mock/mypage";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
//   large: {
//     width: theme.spacing(20),
//     height: theme.spacing(20),
//   },
// }));

// export default function MyPage() {
//   const classes = useStyles();
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);
//   const user = JSON.parse(localStorage.getItem("user"));

//   const handleMenu = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("accessToken");
//     localStorage.removeItem("user");
//     window.location.href = "/";
//   };

//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>
//           <Typography variant="h6" className={classes.title}>
//             Profile
//           </Typography>
//           <div>
//             <IconButton onClick={handleMenu} color="inherit">
//               <Avatar src={user.avatar} />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorEl}
//               open={open}
//               onClose={handleClose}
//             >
//               <MenuItem onClick={handleLogout}>Logout</MenuItem>
//             </Menu>
//           </div>
//         </Toolbar>
//       </AppBar>
//       <Card className={classes.root} variant="outlined">
//         <CardContent>
//           <Avatar src={user.avatar} className={classes.large} />
//           <Typography variant="h5">
//             Welcome {user.fname} {user.lname}
//           </Typography>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

/*---------------------------*/

// return (
//   <div className={classes.root}>
//     <AppBar position="static">
//       <Toolbar>
//         <Typography variant="h6" className={classes.title}>
//           Profile
//         </Typography>
//         <div>
//           <IconButton onClick={handleMenu} color="inherit">
//             <Avatar src={user.avatar} />
//           </IconButton>
//           <Menu
//             id="menu-appbar"
//             anchorEl={anchorEl}
//             open={open}
//             onClose={handleClose}
//           >
//             <MenuItem onClick={handleLogout}>Logout</MenuItem>
//           </Menu>
//         </div>
//       </Toolbar>
//     </AppBar>
//     <Card className={classes.root} variant="outlined">
//       <CardContent>
//         <Avatar src={user.avatar} className={classes.large} />
//         <Typography variant="h5">
//           Welcome {user.fname} {user.lname}
//         </Typography>
//       </CardContent>
//     </Card>
//   </div>
// );
//}

/*-------*/

// import React from "react";
// import classNames from "classnames/bind";
// import styles from "./profile.css";
// import { useProfileDispatch } from "../contexts/profile_context";
// import { useNavigate } from "react-router-dom";

// const cx = classNames.bind(styles);

// const MyPage = ({
//   profileRepository,
//   user,
//   logoutHandler,
//   profile,
//   onChange,
//   imgOnChange,
//   imgOnRemove,
//   ImageInput,
// }) => {
//   const history = useNavigate();
//   const profileDispatch = useProfileDispatch();

//   // 프로필 저장
//   const onSave = (e) => {
//     e.preventDefault();
//     profileDispatch({
//       type: "SAVE",
//       profile,
//     });
//     profileRepository.saveProfile(user.uid, profile);
//     alert("저장되었습니다 🙂");
//   };

//   // 계정 로그아웃
//   const onLogout = () => {
//     logoutHandler();
//     history.push("/");
//   };

//   return (
//     <section>
//       <h2 className={cx("title")}>내 정보</h2>
//       <form className={cx("box")} onSubmit={onSave}>
//         <div className={cx("row")}>
//           <span>사진</span>
//           <ImageInput
//             profile={profile}
//             imgOnChange={imgOnChange}
//             imgOnRemove={imgOnRemove}
//           />
//         </div>
//         <div className={cx("row")}>
//           <span>이메일</span>
//           <p className={cx("email")} type="text">
//             {user.email}
//           </p>
//         </div>
//         <div className={cx("row")}>
//           <span>이름</span>
//           <input
//             name={"name"}
//             className={cx("name")}
//             type="text"
//             placeholder="이름을 입력하세요"
//             maxLength="10"
//             value={profile.name}
//             onChange={onChange}
//           />
//         </div>
//         <div className={cx("row")}>
//           <span>소개</span>
//           <textarea
//             name={"message"}
//             className={cx("message")}
//             placeholder="소개를 해주세요"
//             maxLength="40"
//             value={profile.message}
//             onChange={onChange}
//           ></textarea>
//         </div>
//         <div className={cx("row")}>
//           <button className={cx("save")} type="submit">
//             저장하기
//           </button>
//           <button className={cx("logout")} type="button" onClick={onLogout}>
//             로그아웃
//           </button>
//         </div>
//       </form>
//     </section>
//   );
// };

//export default MyPage;
