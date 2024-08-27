import { useParams,useNavigate } from "react-router-dom";
import { useState} from "react";
import ProductServiceInMem from "../../Services/ProductServiceInMem";

const Update = () => {

  var navigator=useNavigate();
  const { productId } = useParams();
  const [product, setProduct]=useState( ProductServiceInMem.getById(Number(productId)));

  const handleChange=(e)=>{
    const { name, value } = e.target;
    setProduct(prvProduct => ({
                              ...prvProduct,
                              [name]: value
                              })
    );
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    ProductServiceInMem.Update(product);
    navigator("/products");
  };

return (
<div>
      <h2>Update Existing Product</h2>
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

      <button type="submit">Update</button>
      </form>
  </div>
);
};

export default Update;
