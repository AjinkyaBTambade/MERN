import { Outlet,Link } from "react-router-dom";

const Bi=()=> {
     return (
          <div>
               <h2>Buissness Intelligence</h2>
                    <nav>
                         <Link to="bar"> Bar Chart</Link>| <Link to="line"> Line Chart</Link>| <Link to="pie"> Pie Chart</Link>          
                    </nav>
               <hr/>
               <Outlet/>
          </div>
     );
}

export default Bi;