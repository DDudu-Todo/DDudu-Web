import { Route, Routes } from "react-router-dom";
import HomeTemplate from "./component/HomeTemplate";
import LoginTemplate from "./component/LoginTemplate";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginTemplate />} />
      <Route path="/home" element={<HomeTemplate />} />
    </Routes>
  );
}
// function App() {
//   return <Login />;
// }

export default App;
