
import {Routes, Route} from "react-router-dom";

import Home from "../components/Home";
import Aboutus from "../components/Aboutus";
import Contact from "../components/Contact";
import Services from "../components/Services";
import List from "../components/List";
import Login from "../components/login";
import Register from "../components/register";

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutus" element={<Aboutus/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/list" element={<List/>}/>
        <Route path="/login" element= {<Login/>}/>
        <Route path="/register" element= {<Register/>}/>

</Routes>
);
export default AppRoutes;