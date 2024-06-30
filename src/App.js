import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/userinterface/Home";
import FooterComponent from "./components/admin/userinterface/FooterComponent";
import SignIn from "./screens/userinterface/SignIn";
import SignInDetail from "./components/SignInDetail";
import SignInPicture from "./components/SignInPicture";
import ScrollComponents from "./components/admin/userinterface/ScrollComponent";
import SideBar from "./components/admin/userinterface/SideBar";
import DashBoard from "./screens/userinterface/DashBoard"
import DashSlider from "./components/admin/userinterface/DashSlider";
import PieChart from "./components/chart/PieChart";
import ColumnChart from "./components/chart/ColumnChart";
import DashDetails from "./screens/userinterface/DashDetails";
import LineChart from "./components/chart/LineChart";
import Card from "./components/chart/Card";


function App() {
  return (
   <div>
    <Router>
      <Routes>
        <Route element={<Home/>} path={'/home'} />
        <Route element={<FooterComponent/>} path={'/footer'} />
        <Route element={<SignIn/>} path={'/signin'} />
        <Route element={<SignInDetail/>} path={'/sign'} />
        <Route element={<SignInPicture/>} path={'/signpic'} />
        <Route element={<ScrollComponents/>} path={'/scroll'} />
        <Route element={<SideBar/>} path={'/sidebar'} />
        <Route element={<DashBoard/>} path={'/dashboard'} />
        <Route element={<DashSlider/>} path={'/dashslider'} />
        <Route element={<PieChart/>} path={'/pie'} />
        <Route element={<ColumnChart/>} path={'/column'} />
        <Route element={<DashDetails/>} path={'/detail'} />
        <Route element={<LineChart/>} path={'/line'} />
        <Route element={<Card/>} path={'/card'} />
      </Routes>
    </Router>
    
    </div>
  );
}

export default App;
