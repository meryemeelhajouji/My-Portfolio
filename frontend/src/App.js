import React,{useState} from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import Project from "./pages/Project";

import { UserContext } from "./context/UserContext";


import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
const [user,setUser] = useState("mery")
  return (
    <Router>
      <Navbar />
<UserContext.Provider value={{user,setUser}}>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project" element={<Project />} />
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>     
         </UserContext.Provider>
      <Footer />

    </Router>
  );
}

export default App;
