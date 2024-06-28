import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/userinterface/Home";
import FooterComponent from "./components/admin/userinterface/FooterComponent";


function App() {
  return (
   <div>
    <Router>
      <Routes>
        <Route element={<Home/>} path={'/home'} />
        <Route element={<FooterComponent/>} path={'/footer'} />
      </Routes>
    </Router>
    
    </div>
  );
}

export default App;
