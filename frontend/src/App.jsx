import { Routes, Route } from "react-router-dom";
import LoginLayout from "./layouts/LoginLayout";
import MainLayout from "./layouts/MainLayout";

import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Routes>
      {/* LOGIN PAGE */}
      <Route element={<LoginLayout />}>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>

      {/* AFTER LOGIN PAGES */}
      <Route element={<MainLayout />}>
        <Route path="/home" element={<Home />} />
        
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
