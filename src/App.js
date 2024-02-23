import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from './Components/Hero';
import Offer from './Components/Offer';
import Blogs from './Components/Blogs';
import Contact from './Components/Contact';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path={"/"} element={<Hero />} />
        <Route path={"/offer"} element={<Offer />} />
        <Route path={"/blogs"} element={<Blogs />} />
        <Route path={"/contact"} element={<Contact />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
