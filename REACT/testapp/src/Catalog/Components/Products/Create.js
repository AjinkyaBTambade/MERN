import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductServiceInMem from "../../Services/ProductServiceInMem";

const Create = () => {
  var navigator=useNavigate();

  let prd= { id: 1, title: '', description:'', 
             imageurl:"", unitprice:0, quantity:0,
             likes:0 
          };

  const [product, setProduct]=useState(prd);

  const handleChange=(e)=>{
    const { name, value } = e.target;
    setProduct(prvProduct => ({
        ...prvProduct,
        [name]: value
    }));
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    ProductServiceInMem.insert(product);
    navigator("/products");
  };

  return (
    <div>
      <h2>Insert New Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" value={product.title} onChange={handleChange} required/>
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input id="description" name="description"  value={product.description } onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="unitprice">Unit Price:</label>
          <input id="unitprice" name="unitprice"  value={product.unitprice} onChange={handleChange} required />
        </div>

        <div>
          <label htmlFor="quantity">Quantity:</label>
          <input id="quantity" name="quantity"  value={product.quantity} onChange={handleChange} required />
        </div>

        <div>
          <label htmlFor="likes">Quantity:</label>
          <input id="likes" name="likes"  value={product.likes} onChange={handleChange} required />
        </div>

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default Create;