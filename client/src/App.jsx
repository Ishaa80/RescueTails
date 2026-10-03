import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact1";
import { Services } from "./pages/Services";
import { Register } from "./pages/Register";          //Form that the user will fill
import { Login } from "./pages/Login";                //Rescuer's Login
import { R_register } from "./pages/R_register";      //Rescuer's Registration
import { Animalupdate } from "./pages/Animalupdate";

import { Userinfo } from "./pages/Userinfo";
import { Userdata } from "./pages/Userdata";
import { Usercontact } from "./pages/Usercontact";
import { Response } from "./pages/Response";

import { Navbar } from "./components/Navbar";   
import { RescuerHome } from "./components/layouts/RescuerHome";


function App  () {
  return ( 
  <>
   { <Navbar/>}
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />} ></Route>
      <Route path="/services" element={<Services />} ></Route>
      <Route path="/register" element={<Register />} ></Route>
      <Route path="/login" element={<Login />} ></Route>
      <Route path="/r_register" element={<R_register />} ></Route>
      <Route path="/animalupdate" element={<Animalupdate />} ></Route>
    
      
    {/* Nested Routing */} 
    <Route path="/r_home" element={<RescuerHome />}>
        <Route path="userinfo" element={<Userinfo />}/>
        <Route path="userdata" element={<Userdata />}/>
        <Route path="usercontact" element={<Usercontact />}/>
        <Route path="response" element={<Response />}/>
      </Route>
    </Routes>
  </>
  );
};

export default App;