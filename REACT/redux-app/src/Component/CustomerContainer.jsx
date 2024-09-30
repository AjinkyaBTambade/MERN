import React from 'react';
import { useSelector } from 'react-redux';
import Customer from './Customer';

function CustomerContainer() {
  
  const customers= useSelector((state)=>state.customer.customers);

  return (
      <div>
        {customers.length > 0 ? (
          customers.map((customer)=>(
            <Customer key={customer.id} customer={customer}/>
          ))
        ) :(
          <p>No Customers Available</p>
        )}
      </div>
  );
}

export default CustomerContainer;
