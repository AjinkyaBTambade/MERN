import { useEffect, useState } from "react";
import ProductServiceFetch  from "../../services/ProductServiceFetch";
const List=()=>{

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchProducts = async () => {
            try {
                const data = await ProductServiceFetch.getAllProducts();
                setProducts(data);
            } catch (err) {
                setError('Failed to fetch products');
            }
        };

        fetchProducts();
    },[]);

    if (error) return <p>{error}</p>;

    return(
        <>
             <h1>Todays Fresh Flowers</h1>
        <ul>
            {
                products.map(product => (
                <li key={product.id}>{product.title} {product.unitprice} {product.quantity}</li>
            ))}
        </ul>
        </>
    );
}

export default List;
