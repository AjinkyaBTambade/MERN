import { useEffect, useState } from "react";
import ProductServiceInMem from "../../Services/ProductServiceInMem";
import { useParams } from "react-router-dom";

const Details=()=>{

   const { productId } = useParams();
   const [product, setProduct]=useState( ProductServiceInMem.getById(Number(productId)));

   useEffect(()=>{
    let theProduct=ProductServiceInMem.getById(Number(productId));
    setProduct(theProduct)
   });

        return(
        <div>
            <h2>Todays Flower Gerbra:</h2>
            <img src={product.imageurl} height="100"/>
            <p> Title: {product.title}</p>
            <p> Description:{product.description}</p>
            <p> UnitPrice:{product.unitprice}</p>
            <p> Stock Available:{product.quantity}</p>
            <p> Likes:89000</p>
        </div>
    );
}

export default Details;