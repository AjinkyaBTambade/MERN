
import {Routes, Route} from "react-router-dom";

import Home from "../components/Main/Home";
import Aboutus from "../components/Main/Aboutus";
import Contact from "../components/Main/Contact";
import Services from "../components/Main/Services";
import List from "../components/Standard/List";
import Login from "../components/Membership/Login";
import Register from "../components/Membership/Register";
import BarChart from "../components/BI/Charts/BarChart";
import PieChart from "../components/BI/Charts/PieChart";
import LineChart from "../components/BI/Charts/LineChart";
import BI from "../components/BI/BI";

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutus" element={<Aboutus/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/list" element={<List/>}/>
        <Route path="/login" element= {<Login/>}/>
        <Route path="/register" element= {<Register/>}/>
        <Route path="bi" element={<BI />}>
                  {/*  Nested Routes  */}
                  <Route path="line" element={<LineChart/>}></Route>
                  <Route path="bar" element={<BarChart/>}></Route>
                  <Route path="pie" element={<PieChart/>}></Route>
          </Route>

</Routes>
);
export default AppRoutes;