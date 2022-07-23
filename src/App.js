import {Routes, Route} from "react-router-dom"
import About from "./view/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./view/Home/Home";
import Lab from "./view/Lab";
import Project from "./view/Project";
import Writing from "./view/Writing";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/writing" element={<Writing/>} />
        <Route path="/lab" element={<Lab/>} />
        <Route path="/project" element={<Project/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
