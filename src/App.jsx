import { Routes, Route} from "react-router-dom";
import Navbar from "./NarBar/NavBar";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Service from "./component/Service";
import Login from "./component/Login";

function App() {


  return (
    <div>
      {/* Corrected button click handler */}
     

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Login" element={<Login />} />
      </Routes>

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      />
  
    </div>
  );
}

export default App;
