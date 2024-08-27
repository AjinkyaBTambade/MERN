import { Link, Outlet,useNavigate } from "react-router-dom";
import ProductService from '../../Services/ProductServiceInMem';
import ProductServiceInMem
 from "../../Services/ProductServiceInMem";
const List=()=>{
    const products=ProductServiceInMem.getAll();
    var navigator=useNavigate();
   
    const handleDelete = (id) => {
           console.log('Deleting product with id:', id);
           ProductServiceInMem.remove(id);
           navigator("/products");
    };

    return(
        <div>
            <h2>Todays Fresh Flowers</h2>
            <Link to="/products/create">Add New Flower</Link>
            <ul>
                {
                    products.map(product => (
                                            <li key={product.id}>
                                                <Link to={`/products/${product.id}`}>{product.title}</Link>
                                                {' | '}<Link to={`/products/update/${product.id}`}>Update</Link>
                                                {' | '} <button onClick={() => handleDelete(product.id)}>Delete</button>
                                            </li>
                ))}
            </ul>
             <Outlet/>
        </div>
    );
}
export default List;