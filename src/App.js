 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ForgotPassword from "./pages/ForgotPassword";
import Offer from "./pages/Offer";
function App() {
  return (
    < >
       <Router>
        <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/Profile" element={<Profile />} /> 
            <Route path="/Sign-in" element={<SignIn />} /> 
            <Route path="/Sign-up" element={<SignUp />} /> 
            <Route path="/forgot-password" element={<ForgotPassword />} /> 
            <Route path="/Offers" element={<Offer />} /> 
            </Routes>
       </Router>
    </ >
  );
}

export default App;
