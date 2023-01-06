import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from './pages/Home'
function App() {

  return (
    <BrowserRouter>
      <div className="App bg-white dark:bg-gray-900">
        <Navbar/> 	
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
