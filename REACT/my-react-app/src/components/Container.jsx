import {BrowserRouter } from "react-router-dom";
import Navbar from "./NavBar";
import AppRoutes from "../routes/route";
function Container() {
    return (
      <div>
        <h2>Transflower Single Page Application (SPA)</h2>
        <BrowserRouter>
            <Navbar/>
            <hr/>
            <AppRoutes/>
        </BrowserRouter>
      </div>
    );
  }
  export default Container;