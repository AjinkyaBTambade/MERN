import { useEffect, useState } from "react";
import CustomerService from "../../Services/CustomerService";
import { useParams } from "react-router-dom";

const Details=()=>{

   const { customerId } = useParams();
   const [customer, setCustomer]=useState( CustomerService.getById(Number(customerId)));

//    useEffect(()=>{
//     let theProduct=ProductServiceInMem.getById(Number(productId));
//     setProduct(theProduct)
//    });

        return(
        <div>
            <h2>Customer Details:</h2>
            <p> Name: {customer.Name}</p>
            <p> Email:{customer.Email}</p>
            <p> phoneNumber:{customer.phoneNumber}</p>
        </div>
    );
}

export default Details;