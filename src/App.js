import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ADS from "./components/ADS";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Password from "./components/Password";
import QRCodeReader from "./components/QRCodeReader";
import { ThemeContext } from "./Contexts/ThemeContext";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from './pages/Home'
import Notfound from "./pages/Notfound";

function App() {
  const {toggleMode} = useContext(ThemeContext)

  return (
    <BrowserRouter>
      <div className={!toggleMode ? "App bg-white bg-gray-900 scroll-smooth ui-sans-serif" : "App ui-sans-serif bg-white text-dark scroll-smooth"}>
        <Header />
        <Navbar/> 	
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/password" element={<Password />} />
          <Route path="/scan" element={<QRCodeReader />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
        <ADS/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
