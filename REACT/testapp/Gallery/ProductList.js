import React, { useState, useEffect } from 'react';
import Product from './Product';
import ProductServiceInMem from "../../Services/ProductServiceInMem";

const flowers=ProductServiceInMem.getAll();

const ProductList = () => {

  const [products, setProducts] = useState(flowers);

  const handleLike = (productId) => {

    setProducts((prev) =>
        prev.map((product) =>
        product.id === productId
          ? { ...product, likes: product.likes + 1 }
          : product
      )
    );
  };

  
 /* useEffect(() => {
    console.log('Products updated:', products);
  }, [products]);
*/

  return (
    <div>
      {products.map((product) => (
                    <Product key={product.id} product={product} onLike={handleLike} />
      ))}
    </div>
  );
};

export default ProductList;
