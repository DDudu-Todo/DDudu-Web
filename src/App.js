import { Route, Routes } from "react-router-dom";
import HomeTemplate from "./component/HomeTemplate";
import LoginTemplate from "./component/LoginTemplate";
import OAuth from "./component/OAuth/OAuth";

function App() {

  return (
    <Routes>
      <Route path="/" element={<LoginTemplate />} />
      <Route path="/home" element={<HomeTemplate />} />
      <Route path='/user/kakao/oauth' element={<OAuth />} />
    </Routes>
  );
}
// function App() {
//   return <Login />;
// }

export default App;
