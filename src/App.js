import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/userinterface/Home";
import FooterComponent from "./components/admin/userinterface/FooterComponent";
import SignIn from "./screens/userinterface/SignIn";
import SignInDetail from "./components/SignInDetail";
import SignInPicture from "./components/SignInPicture";
import ScrollComponents from "./components/admin/userinterface/ScrollComponent";


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
      </Routes>
    </Router>
    
    </div>
  );
}

export default App;
