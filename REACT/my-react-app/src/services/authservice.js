//data
var users = [
    { id: 1, email: 'ravi.tambade@trransflower.in', password:'seed', firstname:"Ravi", lastname:"Tambade",contactnumber:"9881735801" },
    { id: 2, email: 'shubhangi.tambade@transflower.in', password:' transflower', firstname:"Ravi", lastname:"Tambade",contactnumber:"9881735801" },
    { id: 3, email: 'sanika.bhor@gmail.com', password:'pvg', firstname:"Sankia", lastname:"Bhor",contactnumber:"9881735801" },
    { id: 4, email: 'nikhil.navale@gmail.com', password:'seed', firstname:"Ravi", lastname:"Tambade",contactnumber:"9881735801" },
    { id: 5, email: 'shreedhar.patil@gmail.com', password:'seed', firstname:"Ravi", lastname:"Tambade",contactnumber:"9881735801" },
    { id: 6, email: 'Sharan.kulkarni@gmail.com', password:'seed', firstname:"Ravi", lastname:"Tambade",contactnumber:"9881735801" },
    { id: 7, email: 'kartik.g@gmail.com', password:'seed', firstname:"Ravi", lastname:"Tambade",contactnumber:"9881735801" },    
    { id: 8, email: 'seema.patil@gmail.com', password:'seed', firstname:"Ravi", lastname:"Tambade",contactnumber:"9881735801" },
];
//Service
 
const AuthService = {
    //service methods
   
    validate(email, password){
        let user= users.find( (theUser)=>(theUser.email ===email && theUser.password===password));
        if(user ==undefined){
            return false;
        }
        return true;
     },
 
     getAllUsers() {    
         return users;
     },
 
     getUserById(id){
        let user= users.find( (theUser)=>(theUser.id ===id));
        return user;
     },
 
     register(theUser){
         users.push(theUser);
     },
 
     Update(theUser){
         users=users.filter(user=>user.id !==theUser.id);
         users.push(theUser);
     },
 
     remove(id){
         users=users.filter(theUser=>theUser.id !==id);
     }
}
 
 export default AuthService;