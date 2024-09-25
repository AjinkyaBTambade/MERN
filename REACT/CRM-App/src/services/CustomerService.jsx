var customers = [
    { id: 1, firstName: 'Ravi', lastName: 'Tambade', email: 'ravi.tambade@transflower.in', contactNumber: '9881375881' },
    { id: 2, firstName: 'Manasi', lastName: 'Nighot', email: 'manasi@domain.com', contactNumber: '8856214785' }, 
    { id: 3, firstName: 'Ajinkya', lastName: 'Tambade', email: 'ajinkya.tambade@transflower.in', contactNumber: '9561222333' },
    { id: 4, firstName: 'Aditya', lastName: 'Tambade', email: 'aditya.tambade@transflower.in', contactNumber: '7756529698' },
    { id: 5, firstName: 'Shreedhar', lastName: 'Patil', email: 'shree.patil@transflower.in', contactNumber: '9841477885' },
    { id: 6, firstName: 'Sharayu', lastName: 'Koli', email: 'sharayu@domain.com', contactNumber: '7410562485' },  
 ];
 
 const CustomerService = {
     getAll() {     
         return customers;
     },
 
     getById(id){
        let customer= customers.find( (customer)=>(customer.id ===id));
        return customer;
     },
 
     insert(theCustomer){
        customers.push(theCustomer);
         console.log(customers);
     },
 
     Update(theCustomer){
        customers=customers.filter(customer=>customer.id !==theCustomer.id);
        customers.push(theCustomer);
         console.log(customers);
     },
 
     remove(id){
        customers=customers.filter(customer=>customer.id !==id);
     } 
 }
  
export default CustomerService;