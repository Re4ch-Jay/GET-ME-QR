import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Meme from "./components/Meme";
import Navbar from "./components/Navbar";
import Password from "./components/Password";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from './pages/Home'
import Notfound from "./pages/Notfound";

function App() {

  return (
    <BrowserRouter>
      <div className="App bg-white dark:bg-gray-900">
        <Navbar/> 	
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/password" element={<Password />} />
          <Route path="/meme" element={<Meme />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
