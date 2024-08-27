import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductServiceInMem from "../../Services/ProductServiceInMem";

const Details = () => {
  let { productId } = useParams();
  productId = parseInt(productId); 
  console.log(productId);

  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    const product = ProductServiceInMem.getById(productId);
    setCurrentProduct(product);
  }, [productId]);

  if (!currentProduct) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>Todays Flower: {currentProduct.title}</h2>
      <img src={`/images/flowers/${currentProduct.title.toLowerCase()}.jpg`} width="100" height="100" alt={currentProduct.title} />
      <p>Title: {currentProduct.title}</p>
      <p>Description: {currentProduct.description}</p>
      <p>Unit Price: {currentProduct.unitprice}</p>
      <p>Stock Available: {currentProduct.quantity}</p>
      <p>Likes: {currentProduct.likes}</p>
    </div>
  );
}

export default Details;
