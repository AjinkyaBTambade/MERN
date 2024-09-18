import { useState } from 'react'
import Details from './Details';
 import ProductService from '../services/productservice';
function List() {
   const flowers= ProductService.getAll();
  
  return (
    <>
      <div>
        <table>
          <tr>
          {
            flowers.map( (flower) =>(
              <td> <Details product={flower}/></td>
            ))
        }
        </tr>
        </table>
        </div>
    </>
  )
}

export default List;